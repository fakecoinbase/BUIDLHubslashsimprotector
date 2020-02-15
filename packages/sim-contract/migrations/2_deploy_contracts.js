var SimProtector = artifacts.require("./SimProtector.sol");

module.exports = function(deployer) {
  deployer.deploy(SimProtector);
};
