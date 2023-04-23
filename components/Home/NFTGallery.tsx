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
import Link from "next/link";
import Image from "next/image";
import NftArt from "../../public/media/Amy  Seven Riches_ Four Churches 4 of 19.png";
import NftArt1 from "../../public/media/dogggnft.jpeg";
import NftArt2 from "../../public/media/Sargeant at arms_ Four Wakes  5 of 10-1.png";
import NftArt3 from "../../public/media/Sir Wild Mason_ Reluctant Hero to eighty-eight 4 of 17.png";

interface NFTCardProps {
  tokenId: number;
}

export default function NFTGallery() {
  return (
    <div className="container gallery__mg">
      <section className="galley_header">
        <h2>
          Built on <span className="text_gradient">Polygon</span>
        </h2>

        <button className="gallery_btn">
          <Link target="_blank" href="http://Greatdaneai.com">
            {" "}
            Mint Now
          </Link>
        </button>
      </section>

      <div className="gallery " data-aos="fade-up">
        <div className="grid grid-cols-1   md:grid-cols-2 gap-6 gallery_div">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={NftArt}
              alt="nft art"
              width={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={NftArt1}
              alt="nft art"
              width={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={NftArt2}
              alt="nft art"
              width={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={NftArt3}
              alt="nft art"
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
