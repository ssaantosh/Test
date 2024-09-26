// src/components/CropList.js
import React, { useState, useEffect } from "react";

const CropList = ({ contract }) => {
    const [crops, setCrops] = useState([]);

    useEffect(() => {
        const fetchCrops = async () => {
            const cropData = await contract.methods.getCropDetails().call();
            setCrops(cropData);
        };

        fetchCrops();
    }, [contract]);

    return (
        <div>
            <h2>Crop Details</h2>
            <ul>
                {crops.map((crop, index) => (
                    <li key={index}>
                        <p>Farmer: {crop.farmerName}</p>
                        <p>Crop: {crop.cropName}</p>
                        <p>Plantation Date: {crop.plantationDate}</p>
                        <p>Harvesting Date: {crop.harvestingDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CropList;
