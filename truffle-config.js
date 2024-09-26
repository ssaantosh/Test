module.exports = {
  networks: {
    development: {
    host: "127.0.0.1",
    port: 7545,
    network_id :"*",
    gas: 5000000
  }
},

compilers:{
  solc: {
    version: "0.8.13",
    settings: {
      optimizer: {
enabled: true,
runs: 200

      },
    }
  }
}
};
