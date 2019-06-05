var MNEMONIC = "old gasp violin detect weasel mother buffalo daughter dizzy seed lunar lady";
var ENDPOINT = "https://rinkeby.infura.io/v3/b2381ad1e21142eca350021467ba2a78";
var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, ENDPOINT),
      network_id: 4,       // Ropsten's id
      gasPrice: 21000000000,
      //timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
       //docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
