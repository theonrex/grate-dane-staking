// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC20Base.sol";
// Import the Ownable contract from a third-party library
import "@thirdweb-dev/contracts/extension/Ownable.sol";

contract Token is Ownable, ERC20Base {
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC20Base(_name, _symbol) {}

    // Function to get the owner of the contract
    function getOwner() public view returns (address) {
        return owner();
    }

    // Function to check if the caller is the owner of the contract
    function _canSetOwner()
        internal
        view
        virtual
        override(Ownable, ERC20Base)
        returns (bool)
    {
        return msg.sender == owner();
    }
}
