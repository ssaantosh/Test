// src/components/CropForm.js
import React, { useState } from "react";

const CropForm = ({ contract, account }) => {
    const [farmerName, setFarmerName] = useState("");
    const [cropName, setCropName] = useState("");
    const [plantationDate, setPlantationDate] = useState("");
    const [harvestingDate, setHarvestingDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await contract.methods.logCropDetails(
            farmerName,
            cropName,
            plantationDate,
            harvestingDate
        ).send({ from: account });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Farmer Name:</label>
                <input
                    type="text"
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                />
            </div>
            <div>
                <label>Crop Name:</label>
                <input
                    type="text"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                />
            </div>
            <div>
                <label>Plantation Date:</label>
                <input
                    type="date"
                    value={plantationDate}
                    onChange={(e) => setPlantationDate(e.target.value)}
                />
            </div>
            <div>
                <label>Harvesting Date:</label>
                <input
                    type="date"
                    value={harvestingDate}
                    onChange={(e) => setHarvestingDate(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CropForm;
