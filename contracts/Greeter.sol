//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private _greeting;

    constructor(string memory _greet) {
        console.log("Deploying a Greeter with greeting:", _greet);
        _greeting = _greet;
    }

    function setGreeting(string memory _greet) external {
        console.log("Changing greeting from '%s' to '%s'", _greeting, _greet);
        _greeting = _greet;
    }

    function greet() external view returns (string memory) {
        return _greeting;
    }
}
