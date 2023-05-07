// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract GreatEveryday is ReentrancyGuard {
    using SafeERC20 for IERC20;

    // Interfaces for ERC20 and ERC721
    IERC20 public immutable rewardsToken;
    IERC721 public immutable nftCollection;
    struct StakedToken {
        address staker;
        uint256 tokenId;
    }

    // Only the owner can update rewardsPerHour and rewardTokenPerTime
    address private owner;
    // Staker info
    struct Staker {
        // Amount of tokens staked by the staker
        uint256 amountStaked;
        // Staked token ids
        StakedToken[] stakedTokens;
        // Last time of the rewards were calculated for this user
        uint256 timeOfLastUpdate;
        // Calculated, but unclaimed rewards for the User. The rewards are
        // calculated each time the user writes to the Smart Contract
        uint256 unclaimedRewards;
    }

    // Rewards per hour per token deposited in wei.
    uint256 private rewardsPerHour = 250000000000000000;

    // Reward token per time in seconds
    uint256 private rewardTokenPerTime = 60;

    // Event that is emitted when the owner updates the rewardsPerHour and rewardTokenPerTime
    event RewardsPerHourUpdated(uint256 newRewardsPerHour);

    event eRewardTokenPerTime(uint256 newRewardTokenPerTime);

    // Mapping of User Address to Staker info
    mapping(address => Staker) public stakers;

    // Mapping of Token Id to staker. Made for the SC to remeber
    // who to send back the ERC721 Token to.
    mapping(uint256 => address) public stakerAddress;
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    // Modifier to check if the caller is the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // Constructor function to set the rewards token and the NFT collection addresses
    constructor(IERC721 _nftCollection, IERC20 _rewardsToken) {
        nftCollection = _nftCollection;
        rewardsToken = _rewardsToken;
        owner = msg.sender;
    }

    // If address already has ERC721 Token/s staked, calculate the rewards.
    // Increment the amountStaked and map msg.sender to the Token Id of the staked
    // Token to later send back on withdrawal. Finally give timeOfLastUpdate the
    // value of now.
    function stake(uint256 _tokenId) external nonReentrant {
        if (stakers[msg.sender].amountStaked > 0) {
            uint256 rewards = calculateRewards(msg.sender);
            stakers[msg.sender].unclaimedRewards += rewards;
        }

        require(
            nftCollection.ownerOf(_tokenId) == msg.sender,
            "You don't own this token!"
        );

        nftCollection.transferFrom(msg.sender, address(this), _tokenId);

        StakedToken memory stakedToken = StakedToken(msg.sender, _tokenId);

        stakers[msg.sender].stakedTokens.push(stakedToken);

        stakers[msg.sender].amountStaked++;

        stakerAddress[_tokenId] = msg.sender;

        stakers[msg.sender].timeOfLastUpdate = block.timestamp;
    }

    // Calculate rewards for the msg.sender, check if there are any rewards
    // claim, set unclaimedRewards to 0 and transfer the ERC20 Reward token
    // to the user.
    function claimRewards() external nonReentrant {
        uint256 rewards = calculateRewards(msg.sender) +
            stakers[msg.sender].unclaimedRewards;
        require(rewards > 0, "You have no rewards to claim");
        stakers[msg.sender].timeOfLastUpdate = block.timestamp;
        stakers[msg.sender].unclaimedRewards = 0;
        rewardsToken.safeTransfer(msg.sender, rewards);
    }

    ////

    function availableRewards(address _staker) public view returns (uint256) {
        uint256 rewards = calculateRewards(_staker) +
            stakers[_staker].unclaimedRewards;
        return rewards;
    }

    function getStakeInfo(
        address staker
    ) external view returns (uint256[] memory _tokensStaked, uint256 _rewards) {
        Staker storage stakerInfo = stakers[staker];
        uint256[] memory tokenIds = new uint256[](
            stakerInfo.stakedTokens.length
        );

        for (uint256 i = 0; i < stakerInfo.stakedTokens.length; i++) {
            tokenIds[i] = stakerInfo.stakedTokens[i].tokenId;
        }

        return (tokenIds, stakerInfo.unclaimedRewards);
    }

    function getStakedTokens(
        address _user
    ) public view returns (StakedToken[] memory) {
        // Check if we know this user
        if (stakers[_user].amountStaked > 0) {
            // Return all the tokens in the stakedToken Array for this user that are not -1
            StakedToken[] memory _stakedTokens = new StakedToken[](
                stakers[_user].amountStaked
            );
            uint256 _index = 0;

            for (uint256 j = 0; j < stakers[_user].stakedTokens.length; j++) {
                if (stakers[_user].stakedTokens[j].staker != (address(0))) {
                    _stakedTokens[_index] = stakers[_user].stakedTokens[j];
                    _index++;
                }
            }

            return _stakedTokens;
        }
        // Otherwise, return empty array
        else {
            return new StakedToken[](0);
        }
    }

    /////

    function getRewardsPerHour() external view returns (uint256) {
        return rewardsPerHour;
    }

    function getRewardTokenPerTime() external view returns (uint256) {
        return rewardTokenPerTime;
    }

    // Only the owner can call this function to update the rewards per hour
    function updateRewardsPerHour(
        uint256 _newRewardsPerHour
    ) external onlyOwner {
        rewardsPerHour = _newRewardsPerHour;
        emit RewardsPerHourUpdated(_newRewardsPerHour);
    }

    // Only the owner can call this function to update the reward token per time
    function updateRewardTokenPerTime(
        uint256 _newRewardTokenPerTime
    ) external onlyOwner {
        rewardTokenPerTime = _newRewardTokenPerTime;
        emit RewardsPerHourUpdated(_newRewardTokenPerTime);
    }

    // Function to calculate rewards
    function calculateRewards(
        address _staker
    ) internal view returns (uint256 _rewards) {
        return (((
            ((block.timestamp - stakers[_staker].timeOfLastUpdate) *
                stakers[_staker].amountStaked)
        ) * rewardsPerHour) / rewardTokenPerTime);
    }

    // Check if user has any ERC721 Tokens Staked and if they tried to withdraw,
    // calculate the rewards and store them in the unclaimedRewards
    // decrement the amountStaked of the user and transfer the ERC721 token back to them
    function withdraw(uint256 _tokenId) external nonReentrant {
        // Make sure the user has at least one token staked before withdrawing
        require(
            stakers[msg.sender].amountStaked > 0,
            "You have no tokens staked"
        );

        // Wallet must own the token they are trying to withdraw
        require(
            stakerAddress[_tokenId] == msg.sender,
            "You don't own this token!"
        );

        // Update the rewards for this user, as the amount of rewards decreases with less tokens.
        uint256 rewards = calculateRewards(msg.sender);
        stakers[msg.sender].unclaimedRewards += rewards;

        // Find the index of this token id in the stakedTokens array
        uint256 index = 0;
        for (uint256 i = 0; i < stakers[msg.sender].stakedTokens.length; i++) {
            if (
                stakers[msg.sender].stakedTokens[i].tokenId == _tokenId &&
                stakers[msg.sender].stakedTokens[i].staker != address(0)
            ) {
                index = i;
                break;
            }
        }

        // Remove the staked token from the array by moving the last element to the index of the element to be removed
        uint256 lastIndex = stakers[msg.sender].stakedTokens.length - 1;
        stakers[msg.sender].stakedTokens[index] = stakers[msg.sender]
            .stakedTokens[lastIndex];
        stakers[msg.sender].stakedTokens.pop();

        // Decrement the amount staked for this wallet
        stakers[msg.sender].amountStaked--;

        // Update the mapping of the tokenId to the be address(0) to indicate that the token is no longer staked
        stakerAddress[_tokenId] = address(0);

        // Transfer the token back to the withdrawer
        nftCollection.transferFrom(address(this), msg.sender, _tokenId);

        // Update the timeOfLastUpdate for the withdrawer
        stakers[msg.sender].timeOfLastUpdate = block.timestamp;
    }

    //transfer
    function getOwner() public view returns (address) {
        return owner;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(
            newOwner != address(0),
            "New owner address cannot be zero address"
        );
        address previousOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(previousOwner, newOwner);
    }
}
