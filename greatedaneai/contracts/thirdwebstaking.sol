// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

// Import the Staking721Base contract from a third-party library
import "@thirdweb-dev/contracts/base/Staking721Base.sol";
// Import the Ownable contract from a third-party library
import "@thirdweb-dev/contracts/extension/Ownable.sol";

// Define the MyContract contract and inherit from Staking721Base
contract ThirdwebStaking is Ownable, Staking721Base {
    // Constructor function with parameters
    constructor(
        uint256 _timeUnit, // Parameter for the time unit used for rewards
        uint256 _rewardsPerUnitTime, // Parameter for the rewards amount per time unit
        address _stakingToken, // Address of the token being staked
        address _rewardToken, // Address of the token being used as a reward
        address _nativeTokenWrapper // Address of the contract used to wrap native tokens
    )
        // Call the constructor of Staking721Base with the given parameters
        Staking721Base(
            _timeUnit,
            _rewardsPerUnitTime,
            _stakingToken,
            _rewardToken,
            _nativeTokenWrapper
        )
    {}

    function _canSetContractURI()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return msg.sender == owner();
    }

    // Function to get the owner of the contract
    function getOwner() public view returns (address) {
        return owner();
    }

    // Function to check if the caller is the owner of the contract
    function _canSetOwner()
        internal
        view
        virtual
        override(Ownable, Staking721Base)
        returns (bool)
    {
        return msg.sender == owner();
    }
}
