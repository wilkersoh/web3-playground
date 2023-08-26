import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xDE01d468edc68D3402eda9997f8A68e4a8AC956A" // contract deployed address, after run node deploy.js
);

export default instance;
