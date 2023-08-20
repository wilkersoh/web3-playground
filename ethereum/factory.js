import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x373F441F9cf42C81A5b6C93901A8c14b5c2CbF8D"
);

export default instance;
