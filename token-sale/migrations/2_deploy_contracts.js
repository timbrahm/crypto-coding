const LenzToken = artifacts.require("LenzToken");

module.exports = function (deployer) {
  deployer.deploy(LenzToken);
};
