const CropTracking = artifacts.require("CropTracking");

module.exports = function (deployer) {
  // Deploy the CropTracking contract
  deployer.deploy(CropTracking);
};
