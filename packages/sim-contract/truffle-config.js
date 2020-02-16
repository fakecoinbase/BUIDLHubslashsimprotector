const path = require("path");
const ArbProvider = require("arb-provider-truffle");
const mnemonic =
  "jar deny prosper gasp flush glass core corn alarm treat leg smart";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    arbitrum: {
      provider: function() {
        if (!this.provider.prov) {
          this.provider.prov = ArbProvider.provider(
            __dirname,
            "client/src/contracts",
            {
              mnemonic: mnemonic
            }
          );
        }
        return this.provider.prov;
      },
      network_id: "*"
    }
  }
};
