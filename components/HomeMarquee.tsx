import React from "react";
import Marquee from "react-fast-marquee";
import CoinBase from "../public/media/Coinbase.svg.png";
import Metamask from "../public/media/Metamask_logo-aca547fe6081482085662b03e2235f98.png";
import Thirdweb from "../public/media/Thirdweb-Logo-Transparent-Black (1).png";
import WalletConnect from "../public/media/walletconnect-logo.e1cb8d21.png";
import Firebase from "../public/media/1280px-Firebase_Logo.svg.png";
import Image from "next/image";

export default function HomeMarquee() {
  return (
    <div className="HomeMarquee container">
      <Marquee gradientWidth={10}>
        <Image src={Metamask} alt="Metamask image" width={300} />
        <Image src={CoinBase} alt="CoinBase image" width={300} />
        <Image src={Thirdweb} alt="Thirdweb image" width={300} />
        <Image src={WalletConnect} alt="WalletConnect image" width={300} />
        <Image src={Firebase} alt="Firebase image" width={300} />
      </Marquee>
    </div>
  );
}
