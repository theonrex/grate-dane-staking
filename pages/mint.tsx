import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../constants/contractAddresses";
import styles from "../styles/Home.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <ToastContainer />
      <div className="conatiner mint">
        <h1 className={styles.h1}>Mint An NFT!</h1>

        <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

        <Web3Button
          // theme="dark"
          contractAddress={nftDropContractAddress}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => {
            toast.success("NFT Claimed!");
            router.push("/stake");
          }}
          onError={(error) => {
            console.log(error);
            toast.error("Error claiming NFT. Please try again.");
          }}
        >
          Claim An NFT
        </Web3Button>
      </div>
    </>
  );
};

export default Mint;
