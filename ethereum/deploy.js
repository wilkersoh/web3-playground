const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
	"employ across slot jeans plastic hen rely idea daughter problem elbow try",
	"https://sepolia.infura.io/v3/eee50b54cc2845c3a01f6504bfb39999" // go to infura and paste the api key behind
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	// metamask sepoliaETH wallet account
	console.log("Attempting to deploy from account", accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: "1000000", from: accounts[0] });

	console.log("Contract deployed to", result.options.address);
	provider.engine.stop();
};
// deploy address: 0xDE01d468edc68D3402eda9997f8A68e4a8AC956A
deploy();
