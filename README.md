# Basic Hardhat Project Boilerplate

## Prerequisites

- Install truffle : `npm i -g truffle`
- The latest version of truffle has issues with installation on Windows.
- To resolve the errors, go to [this page](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false), download Microsoft Visual Studio 2022 and then install the Visual Studio Installer.
- Select Desktop Development with C++ and uncheck all the optional installation options.
- Once it is done, the truffle can be installed with `npm i -g truffle`

## Instructions and hardhat commands

- Install the boilerplate project dependencies. \
  Do a check for the latest npm package versions. \
  This will update the versions inside the package.json.

  ```shell
  npx npm-check-updates -u
  ```

  ```shell
  yarn install
  ```

  This will install the packages mentioned inside the `package.json` file.

- Compile the smart contracts.

  ```shell
  yarn run clean-compile
  ```

- Check for linting and formatting errors in the code. This will display all the code errors and warnings in the terminal.

  ```shell
  npx hardhat check
  ```

- Compute the size of the smart contracts. This will display the size of the smart contracts in the terminal.

  ```shell
  yarn run size
  ```

- Instantiate the hardhat local node.

  ```shell
  npx hardhat node
  ```

- Split the terminal running the hardhat node, or, open another terminal and run the project test scripts using the local node.

  ```shell
  yarn run test
  ```

- Generate the code coverage report. \
  After generating the report, you can open the `coverage/index.html` file to see the results.

  ```shell
  npx hardhat coverage
  ```

- Generate the documentation for the smart contracts. This will create a `docs` folder comprising all the documentation related to the smart contracts, in the root directory of the project.

  ```shell
  npx hardhat dodoc
  ```

- Instantiate the truffle dashboard. \
  This lets you deploy the contracts without the need of pasting the private key anywhere in the project.

  ```shell
  truffle dashboard
  ```

- The browser will open up and then you have to connect with the MetaMask extension. Select the preferred network and the account to deploy the smart contract.

- Deploy the hardhat project smart contracts using your preferred network or the truffle dashboard, by specifying the `NETWORK`. If you are using any network other than `truffle` or `localhost`, then the private key of the account from which the smart contract is to be deployed, should be specified in the `.env` file.

  ```shell
  yarn run deploy {NETWORK}
  ```

- If `truffle` has been specified as the `NETWORK`, then switch to the browser and sign the deployment transaction from the MetaMask extension.

- After the succesful deployment of the smart contracts, a `build/deploy.json` file will be generated comprising the deployed addresse and the ABI of the smart contracts.

- Verify the smart contract using the `NETWORK` on which it was deployed and the smart contract address, alongwith the constructor arguments by modifiying the `verify.ts` file, and entering the network name in the CLI after running the following command.

  ```shell
  yarn run verify {NETWORK}
  ```

## A typical top-level directory layout

```shell
.
├── build                 # deployed addresses and the ABI of the smart contract (scripts/deploy.ts)
  └── artifacts           # hardhat deployment information [hardhat default]
  └── cache               # hardhat deployment information [hardhat default]
  └── deployments         # address and ABI of the smart contract [modified after hardhat default]
├── contracts             # smart contracts solidity files
├── coverage              # coverage report (index.html) [gitignored]
├── docs                  # smart contracts documentation
├── node_modules          # npm/yarn dependency files [gitignored]
├── scripts               # deployment scripts (deploy.ts) and other tasks [modified after hardhat default]
├── test                  # test scripts [modified after hardhat default]
├── typechain-types       # typechain types, generated after compilation [gitignored]
├── .env                  # API keys of block explorers for smart contract verification [should be gitignored]
├── .env.example          # format for structuring the .env file
├── .solhint.json         # solhint configuration
├── .solhintignore        # solhint ignore configuration
├── .yarnrc.yml           # https://yarnpkg.com/getting-started/migration#if-required-enable-the-node-modules-plugin
├── coverage.json         # gitignored
├── hardhat-config.ts     # hardhat configuration [modified after hardhat default]
├── package.json          # project details and dependencies
├── README.md             # project details and instructions
├── tsconfig.json         # typescript configuration [hardhat default]
├── yarn.lock             # yarn dependencies
└── .gitignore
```

## Notes

- All the files and folders that have been [modified after hardhat default], as mentioned in the above directory layout, consists of well-commented codes in the respective places, regarding the modifications.
