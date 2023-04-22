import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";
import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress,
} from "../constants/contractAddresses";

const Stake: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(
    contract,
    "getStakeInfo",
    address
  );
  const [approved, setApproved] = useState(false);

  // console.log(stakedTokens);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", address);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  // async function stakeNft(id: string) {
  //   if (!address) return;

  //   const isApproved = await nftDropContract?.isApproved(
  //     address,
  //     stakingContractAddress
  //   );
  //   if (!isApproved) {
  //     await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
  //   }
  //   await contract?.call("stake", [id]);
  // }

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
      setApproved(true);
    }
    await contract?.call("stake", id);
  }
  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container mx-auto stake">
      <h1 className=""> Stake Your NFTs</h1>
      <hr className="" />

      {!address ? (
        <ConnectWallet />
      ) : (
        <>
          <h1>Your Tokens</h1>
          <div className="rowx rewards">
            <div className="effect col50 Claimable_Rewards">
              <h3 className="">Claimable Rewards</h3>
              <p className="">
                <b className="">
                  {!claimableRewards ? (
                    <span className="center"> Loading...</span>
                  ) : (
                    ethers.utils.formatUnits(claimableRewards, 18)
                  )}
                  <span> {tokenBalance?.symbol}</span>{" "}
                </b>
              </p>
            </div>
            <div className="effect col50 Current_Balance">
              <h3 className="">Current Balance</h3>
              <p className="">
                <b>
                  {tokenBalance?.displayValue}{" "}
                  <span>{tokenBalance?.symbol}</span>{" "}
                </b>
              </p>
            </div>
          </div>

          <Web3Button
            action={(contract) => contract.call("claimRewards")}
            contractAddress={stakingContractAddress}
          >
            Claim Rewards
          </Web3Button>

          <hr className="" />
          <div className="your_stake_nfts_div">
            <h2 className="your_stake_nfts">Your Staked NFTs</h2>
            <div className="">
              {stakedTokens &&
                stakedTokens[0]?.map((stakedToken: BigNumber) => (
                  <NFTCard
                    tokenId={stakedToken.toNumber()}
                    key={stakedToken.toString()}
                  />
                ))}
            </div>
          </div>

          <hr className="" />
          <h1>Your Unstaked NFTs</h1>
          <div className="rowx">
            {ownedNfts?.map((nft) => (
              <div
                className="col30 nftBoxGrid"
                key={nft.metadata.id.toString()}
              >
                <ThirdwebNftMedia metadata={nft.metadata} className="" />

                <h4>#{nft.metadata.id}</h4>
                <h3>{nft.metadata.name}</h3>
                <p>{nft.metadata.description}</p>
                <Web3Button
                  contractAddress={stakingContractAddress}
                  action={() => stakeNft(nft.metadata.id)}
                  className="Web3Button_stake"
                >
                  {approved === true ? "Stake" : "Approve"}
                </Web3Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Stake;

// // Check if user has any ERC721 Tokens Staked and if they tried to withdraw,
// // calculate the rewards and store them in the unclaimedRewards
// // decrement the amountStaked of the user and transfer the ERC721 token back to them
// function withdraw(uint256 _tokenId) external nonReentrant {
//     // Make sure the user has at least one token staked before withdrawing
//     require(
//         stakers[msg.sender].amountStaked > 0,
//         "You have no tokens staked"
//     );

//     // Wallet must own the token they are trying to withdraw
//     require(
//         stakerAddress[_tokenId] == msg.sender,
//         "You don't own this token!"
//     );

//     // Update the rewards for this user, as the amount of rewards decreases with less tokens.
//     uint256 rewards = calculateRewards(msg.sender);
//     stakers[msg.sender].unclaimedRewards += rewards;

//     // Find the index of this token id in the stakedTokens array
//     uint256 index = 0;
//     for (uint256 i = 0; i < stakers[msg.sender].stakedTokens.length; i++) {
//         if (
//             stakers[msg.sender].stakedTokens[i].tokenId == _tokenId &&
//             stakers[msg.sender].stakedTokens[i].staker != address(0)
//         ) {
//             index = i;
//             break;
//         }
//     }

//     // Set this token's .staker to be address 0 to mark it as no longer staked
//     stakers[msg.sender].stakedTokens[index].staker = address(0);

//     // Decrement the amount staked for this wallet
//     stakers[msg.sender].amountStaked--;

//     // Update the mapping of the tokenId to the be address(0) to indicate that the token is no longer staked
//     stakerAddress[_tokenId] = address(0);

//     // Transfer the token back to the withdrawer
//     nftCollection.transferFrom(address(this), msg.sender, _tokenId);

//     // Update the timeOfLastUpdate for the withdrawer
//     stakers[msg.sender].timeOfLastUpdate = block.timestamp;
// }

////////////////////
