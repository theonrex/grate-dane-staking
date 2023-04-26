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
import Link from "next/link";
import { Spinner } from "flowbite-react";

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

  const [approved, setApproved] = useState(true);

  // console.log("claimableRewards", claimableRewards?.toString());

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("availableRewards", address);
      setClaimableRewards(stakeInfo);
      console.log("claimableRewards", stakeInfo);
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
      setApproved(false);
    }
    await contract?.call("stake", id);
  }
  if (isLoading) {
    return (
      <div className="center ">
        Loading{" "}
        <span className="ml-3">
          {" "}
          <Spinner />
        </span>{" "}
      </div>
    );
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
            <h1 className="your_stake_nfts">Your Staked NFTs</h1>
            <div className="">
              {stakedTokens && stakedTokens !== 0 ? (
                <div>
                  {stakedTokens &&
                    stakedTokens[0]?.map((stakedToken: BigNumber) => (
                      <NFTCard
                        tokenId={stakedToken.toNumber()}
                        key={stakedToken.toString()}
                      />
                    ))}
                </div>
              ) : (
                "No Nfts Staked"
              )}
            </div>
          </div>

          <hr className="" />
          <h1>Your Unstaked NFTs</h1>
          <div className="rowx">
            {ownedNfts ? (
              <div>
                {ownedNfts &&
                  ownedNfts?.map((nft) => (
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
            ) : (
              <div>
                <p>No Nfts to Stake</p>
                <button className="mining_btn">
                  <Link href="http://Greatdaneai.com" target="_blank">
                    {" "}
                    Start Minting
                  </Link>
                </button>{" "}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Stake;
