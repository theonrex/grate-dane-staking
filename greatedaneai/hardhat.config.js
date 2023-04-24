require("dotenv").config();
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhanot/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.11",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {},
    mumbai: {
      chainId: 80001,
      url: `https://rpc.ankr.com/polygon`,
    },
  },
  etherscan: {
    apiKey: "", // Your Etherscan API key
  },
  // solidity: {
  //   version: "0.8.11",
  //   // rest of the config
  // },
};
