async function main() {
  // deploying ERC20 token
  const [owner, addr1] = await ethers.getSigners();

  const DevStoneToken = await hre.ethers.getContractFactory("DevStone");
  console.log('Deploying DevStoneToken...');
  const token = await DevStoneToken.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);

  // // deploying storeToken
  // const StoreToken = await ethers.getContractFactory("StoreToken");
  // const store = await StoreToken.deploy(token.address, {value: hre.ethers.utils.parseEther("0.07")});
  // console.log("Store deployed to:", store.address);

  // await token.connect(owner).approve(store.address, 20000000);
  // console.log("APPROVED")

  // await store.connect(owner).depositISHTokens("0x01725BE700413D34bCC5e961de1d0C777d3A52F4", 10000000);

  // // await store.depositISHTokens("0x01725BE700413D34bCC5e961de1d0C777d3A52F4", 5);

  // console.log("DONE");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });