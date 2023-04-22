import React, { useState, useEffect } from "react";
import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  useNFTs,
  Web3Button,
  useContractMetadata,
} from "@thirdweb-dev/react";
import {
  nftDropContractAddress,
  stakingContractAddress,
  // NFT_ADDRESS,
  // NFT_ADDRESS_ABI,
} from "../../constants/contractAddresses";
import { Contract, providers, utils } from "ethers";
import axios from "axios";

interface NFTCardProps {
  tokenId: number;
}

export default function NFTGallery({ tokenId }: NFTCardProps) {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  // const { contract } = useContract(
  //   "0x23E4081CD2b218B18be74cC903bbd6579A863495"
  // );
  // const { data: nfts, isLoading } = useNFTs(contract);

  // const { data: metadata, isLoading: loadingMetadata } =
  //   useContractMetadata(contract);

  // console.log(metadata);

  // const [nfts, setNfts] = useState([]);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [nftData, setNftData] = useState(null);

  const [loadingState, setLoadingState] = useState("not-loaded");
  // console.log(contract);
  useEffect(() => {
    loadNFTs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new providers.JsonRpcProvider(
      "https://rpc.ankr.com/polygon"
    );

    // const nftContract = new Contract(NFT_ADDRESS, NFT_ADDRESS_ABI, provider);

    // const data = await nftContract.baseURI();

    // console.log(data);

    // const items = await Promise.all(
    //   data?.map(async (i) => {
    //     const tokenUri = await nftContract.tokenURI(i.tokenId);
    //     const meta = await axios.get(tokenUri);
    //     let price = utils.formatUnits(i.price.toString(), "ether");
    //     let item = {
    //       price,
    //       tokenId: i.tokenId.toNumber(),
    //       seller: i.seller,
    //       owner: i.owner,
    //       image: meta.data.image,
    //       name: meta.data.name,
    //       description: meta.data.description,
    //     };
    //     return item;
    //   })
    //);
    // setNfts(items);
    setLoadingState("loaded");
  }

  return (
    <div className="container gallery__mg">
      <section className="galley_header">
        <h2>
          Built on <span>Polygon</span>
        </h2>

        <button className="gallery_btn">Mint Now</button>
      </section>
      {/* 
        {!isLoading ?
      (<div className="gallery">
        {nfts?.map(e =>
          <div className="card">
            <ThirdwebNftMedia metadata={e.metadata} />
          </div>
        )}
      </div>)
      : (<p className="loading">Loading...</p>) } */}

      {nft ? (
        <div className="gallery ">
          {/* {nft.metadata && <ThirdwebNftMedia metadata={nft.metadata} />}
          <h3>{nft.metadata.name}</h3> */}
          <div className="grid grid-cols-1   md:grid-cols-2 gap-4 gallery_div">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                alt="rexo"
              />
              <h3></h3>
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                alt="rexo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                alt="rexo"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
