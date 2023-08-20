const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compileFactory = require("../ethereum/build/CampaignFactory.json");
const compileCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	// with pass address, it is first deploy
	factory = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
		.deploy({ data: compileFactory.bytecode })
		.send({ from: accounts[0], gas: "1000000" });

	await factory.methods.createCampaign("100").send({
		from: accounts[0], // it is the manager in this campaign
		gas: "1000000",
	});

	// const addresses = await factory.methods.getDeployedCampaigns().call();
	// campaignAddress = addresses[0]
	[campaignAddress] = await factory.methods.getDeployedCampaigns().call();
	// pass address in second args if already deployed.
	campaign = await new web3.eth.Contract(
		JSON.parse(compileCampaign.interface),
		campaignAddress
	);
});

describe("Campaigns", () => {
	it("deploys a factory and campaign", () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	it("marks caller as the campaign manager", async () => {
		const manager = await campaign.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

	it("allows to contribute money and marks them as approvers", async () => {
		await campaign.methods.contribute().send({
			value: "200",
			from: accounts[1],
		});

		const isContributor = await campaign.methods
			.approvers(accounts[1])
			.call();
		assert(isContributor);
	});

	it("requires a minimum contribution", async () => {
		try {
			await campaign.methods.contribute().send({
				value: "5",
				from: accounts[1],
			});
			assert(false);
		} catch (error) {
			assert(error);
		}
	});

	it("allows a manager to make a payment request", async () => {
		await campaign.methods
			.createRequest("Buy batteries", "100", accounts[1])
			.send({
				from: accounts[0],
				gas: "1000000",
			});

		const request = await campaign.methods.requests(0).call();

		assert.equal("Buy batteries", request.description);
	});

	it("processes requests", async () => {
		await campaign.methods.contribute().send({
			from: accounts[0],
			value: web3.utils.toWei("10", "ether"), // convert 10 ether to Wei
		});

		await campaign.methods
			.createRequest(
				"A cake",
				web3.utils.toWei("5", "ether"),
				accounts[1]
			)
			.send({
				from: accounts[0],
				gas: "1000000",
			});

		await campaign.methods.approveRequest(0).send({
			from: accounts[0],
			gas: "1000000",
		});

		await campaign.methods.finalizeRequest(0).send({
			from: accounts[0],
			gas: "1000000",
		});

		let balance = await web3.eth.getBalance(accounts[1]);

		balance = web3.utils.fromWei(balance, "ether");
		balance = parseFloat(balance); // transform to number

		console.log("balance: ", balance);
		// cannot set exactly the balance === 105, the account[1] need to pay the gas also
		assert(balance > 103);
	});
});
