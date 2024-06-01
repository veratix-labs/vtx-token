require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

require('dotenv').config();

const { API_URL, MAIN_API_URL, PRIVATE_KEY } = process.env;

console.log ("process.env: ", process.env);

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: MAIN_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}