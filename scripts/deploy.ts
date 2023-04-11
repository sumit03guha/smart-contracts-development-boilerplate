import fs from 'fs';
import hre, { ethers } from 'hardhat';
import { ContractFactory, Contract } from 'ethers';

const main = async () => {
  await hre.run('compile');

  const Greeter: ContractFactory = await ethers.getContractFactory('Greeter');
  const greeter: Contract = await Greeter.deploy('Hello, Hardhat!');

  await greeter.deployed();

  console.log(`Greeter deployed to: ${greeter.address}`);
  console.log(`Transaction hash: ${greeter.deployTransaction.hash}`);

  // ----------------- MODIFIED FOR SAVING DEPLOYMENT DATA ----------------- //

  /**
   * @summary A build folder will be created in the root directory of the project
   * where the ABI, network name, chainId and the deployed address will be saved inside a JSON file.
   */

  try {
    fs.mkdirSync('./build/deployments', { recursive: true });
  } catch (err) {
    console.error(err);
  }

  const name: string = `Greeter`;
  const address: string = greeter.address;
  const res = await greeter.provider.getNetwork();
  const network: {} = {
    chainId: res.chainId,
    name: res.name,
  };
  const abi: [] = JSON.parse(String(greeter.interface.format('json')));
  const deployTransactionHash: string = greeter.deployTransaction.hash;

  const output = {
    name,
    address,
    network,
    deployTransactionHash,
    abi,
  };

  try {
    fs.writeFileSync(
      `./build/deployments/Greeter.json`,
      JSON.stringify(output, null, 2)
    );
  } catch (err) {
    console.log(err);
  }

  // ----------------------------------------------------------------------- //
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
