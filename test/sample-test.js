const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, world!");
    // greeter deploy
    // await greeter.deployed();
    const greeter = await Greeter.attach("0x51408c81aE25aC019d3F65731Eb7A63208771e0F");

    expect(await greeter.greet()).to.equal("Hello, Hardhat!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
