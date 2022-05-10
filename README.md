# Basic Hardhat Project Boilerplate

## Prerequisites

- Install truffle : `npm i -g truffle`
- The latest version of truffle has issues with installation on Windows.
- To resolve the errors, go to [this page](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false), download Microsoft Visual Studio 2022 and then install the Visual Studio Installer.
- Select Desktop Development with C++ and uncheck all the optional installation options.
- Once it is done, the truffle can be installed with `npm i -g truffle`

## Hardhat commands

```shell
npm i
```

```shell
npx hardhat node
```

```shell
npx hardhat test --network localhost
```

```shell
npx hardhat coverage
```

```shell
npx hardhat run .\scripts\deploy.js --network truffle
```

```shell
npx hardhat verify --network NETWORK_NAME DEPLOYED_CONTRACT_ADDRESS "Hello,
Hardhat!"
```
