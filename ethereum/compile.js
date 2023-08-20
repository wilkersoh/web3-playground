const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

/**
 * Compile Contract to json file
 * Store into build folder
 */

const buildPath = path.resolve(__dirname, "build");
// delete all the folder inside the build
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(":", "") + ".json"),
		output[contract]
	);
}
