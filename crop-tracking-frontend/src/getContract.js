import CropTracking from './contracts/CropTracking.json';

const getContract = async (web3) => {

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = CropTracking.networks[5777];
    console.log(deployedNetwork.address, "address here");
    
    
    const contract = new web3.eth.Contract(
        CropTracking.abi,
        deployedNetwork && deployedNetwork.address
    );
    return contract;
};

export default getContract;
