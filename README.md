# Basic Hardhat Project Boilerplate

## Prerequisites

- Install truffle : `npm i -g truffle`
- The latest version of truffle has issues with installation on Windows.
- To resolve the errors, go to [this page](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false), download Microsoft Visual Studio 2022 and then install the Visual Studio Installer.
- Select Desktop Development with C++ and uncheck all the optional installation options.
- Once it is done, the truffle can be installed with `npm i -g truffle`

## Hardhat commands

- Install the boilerplate project dependencies

  ```shell
  npm i
  ```

- Instantiate the hardhat local node

  ```shell
  npx hardhat node
  ```

- Run the boilerplate project tests using the local node

  ```shell
  npx hardhat test --network localhost
  ```

- Generate the code coverage report

  ```shell
  npx hardhat coverage
  ```

- Instantiate the truffle dashboard

  ```shell
  truffle dashboard
  ```

- The browser will open up and then you have to connect with the MetaMask extension. Select the preferred network and the account to deploy the smart contract.

- Deploy the boilerplate project smart contracts using truffle dashboard network

  ```shell
  npx hardhat run .\scripts\deploy.js --network truffle
  ```

- Switch to the browser and sign the deployment transaction from the MetaMask extension.

- Verify the smart contract using the network on which it was deployed and the smart contract address, alongwith the constructor arguments.

  ```shell
  npx hardhat verify --network NETWORK_NAME DEPLOYED_CONTRACT_ADDRESS "Hello,
  Hardhat!"
  ```
