import hre from 'hardhat';
import deployment from '../build/deployments/deploy.json';

const main = async () => {
  await hre.run('verify:verify', {
    address: deployment.address,
    constructorArguments: [`Hello, Hardhat!`],
  });
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
