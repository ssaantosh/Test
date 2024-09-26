const CropTracking = artifacts.require("CropTracking");

contract("CropTracking", (accounts) => {
  let cropTrackingInstance;

  before(async () => {
    cropTrackingInstance = await CropTracking.deployed();
  });

  it("should deploy the contract successfully", async () => {
    assert(cropTrackingInstance.address !== "");
  });

  it("should store and retrieve crop details", async () => {
    await cropTrackingInstance.logCropDetails("Alice", "Wheat", "2024-01-01", "2024-06-01", { from: accounts[0] });
    const cropDetails = await cropTrackingInstance.getCropDetails();
    assert(cropDetails.length === 1, "There should be one crop detail entry");
    assert(cropDetails[0].farmerName === "Alice", "The farmer name should be Alice");
    assert(cropDetails[0].cropName === "Wheat", "The crop name should be Wheat");
    assert(cropDetails[0].plantationDate === "2024-01-01", "The plantation date should be 2024-01-01");
    assert(cropDetails[0].harvestingDate === "2024-06-01", "The harvesting date should be 2024-06-01");
  });
});
