// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract CropTracking {

    struct Crop {
        string farmerName;
        string cropName;
        string plantationDate;
        string harvestingDate;
        uint timestamp;
        address farmerAddress;
    }

    Crop[] public crops;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Farmer logs crop details
    function logCropDetails(
        string calldata farmerName, 
        string calldata cropName, 
        string calldata plantationDate, 
        string calldata harvestingDate
    ) external {
        // Push the new crop details to the array
        crops.push(Crop({
            farmerName: farmerName,
            cropName: cropName,
            plantationDate: plantationDate,
            harvestingDate: harvestingDate,
            timestamp: block.timestamp,
            farmerAddress: msg.sender
        }));
    }

    // Customer views all crop details provided by farmers
    function getCropDetails() public view returns (Crop[] memory) {
        return crops;
    }
}
