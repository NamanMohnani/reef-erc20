require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = 
{
  solidity: "0.8.19",
  defaultNetwork: "reef",
  networks: 
  {
    reef: 
    {
      url: "ws://127.0.0.1:9944",
    },
    reef_testnet: 
    {
      url: "wss://rpc-testnet.reefscan.com/ws",
      scanUrl: "https://testnet.reefscan.com", // Localhost verification testing: http://localhost:3000
      seeds: 
      {
        testnet_account: process.env.MNEMONIC_TESTNET,
      },
    },
  }
};
