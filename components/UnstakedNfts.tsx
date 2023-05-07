import React from "react";
import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
  useNFT,
  useNFTs,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../constants/contractAddresses";
// The token ID of the NFT you want to fetch

export default function UnstakedNfts() {
  const address = useAddress();

  const { contract } = useContract(nftDropContractAddress);
  const { data, isLoading, error } = useNFTs(contract);

  console.log("UnstakedNfts", data);
  return (
    <div>
      UnstakedNfts
      {data ? (
        <div>
          {data
            .filter((nft) => nft.owner === address)
            .map((unstakedData, index) => (
              <div>{unstakedData.owner}</div>
            ))}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}
