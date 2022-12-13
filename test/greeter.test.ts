import { ethers } from 'hardhat';
import { ContractFactory, Contract } from 'ethers';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('Greeter', async () => {
  // ----------------- MODIFIED FOR FETCHING HARDHAT SIGNERS ----------------- //

  let Greeter: ContractFactory, greeter: Contract;
  let owner: SignerWithAddress,
    user1: SignerWithAddress,
    user2: SignerWithAddress,
    user3: SignerWithAddress;

  /**
   * @summary Hardhat signers are used to deploy and test the contract.
   * @see {@link https://docs.ethers.io/v5/api/signer/}
   * Look into the .connect() method in line 33 below.
   */

  before(async () => {
    const accounts: SignerWithAddress[] = await ethers.getSigners();
    owner = accounts[0];
    user1 = accounts[1];
    user2 = accounts[2];
    user3 = accounts[2];
  });

  // -------------------------------------------------------------------------- //

  it("Should return the new greeting once it's changed", async () => {
    Greeter = await ethers.getContractFactory('Greeter');
    greeter = await Greeter.connect(owner).deploy('Hello, world!');

    await greeter.deployed();

    expect(await greeter.greet()).to.equal('Hello, world!');

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal('Hola, mundo!');
  });
});
