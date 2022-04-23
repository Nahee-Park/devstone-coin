require("@nomiclabs/hardhat-waffle");

// 자신이 어떤 계정 쓸  지 명시
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  // 계정 여러 개를 한번에 들고 옴  
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    kovan: {
      url: "https://ethereum-kovan-rpc.allthatnode.com/F5p7YsVH6hsHeDvLEnFbUe22bYL5KQts",
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      url: "https://polygon-mainnet-rpc.allthatnode.com:8545/ljtc1WxgnbIHgfaqwMjCJZN3vz3nKoOG",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};
