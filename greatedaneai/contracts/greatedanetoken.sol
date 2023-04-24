// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC20Base.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";

contract GreateDaneAiToken is ERC20Base {
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC20Base(_name, _symbol) {}

    function getOwner() public view returns (address) {
        return owner();
    }

    function _canSetOwner() internal view virtual override returns (bool) {
        return msg.sender == owner();
    }
}
