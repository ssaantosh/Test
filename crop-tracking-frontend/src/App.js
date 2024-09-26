// src/App.js
import React, { useState, useEffect } from "react";
import getWeb3 from "./web3";
import getContract from "./getContract.js";
import CropForm from './CropForm.js';
import CropList from './CropList.js';

const App = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const init = async () => {
            try {
                const web3 = await getWeb3();
                const accounts = await web3.eth.getAccounts();
                const contract = await getContract(web3);
                setWeb3(web3);
                setAccount(accounts[0]);
                setContract(contract);
            } catch (error) {
                console.log("Error loading web3 or contract", error);
            }
        };

        init();
    }, []);

    return (
        <div>
            <h1>Crop Tracking</h1>
            {web3 && contract && (
                <>
                    <CropForm contract={contract} account={account} />
                    <CropList contract={contract} />
                </>
            )}
        </div>
    );
};

export default App;
