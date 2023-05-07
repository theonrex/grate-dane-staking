import Moralis from "moralis";

export default async function nftData() {
  try {
    await Moralis.start({
      apiKey: "",
    });

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: "0x89",
      format: "decimal",
      tokenAddresses: ["0x421eF0d9679d1c24EF976B06638566a64aAC2780"],
      mediaItems: false,
      address: "0x80CD52607b7EbD0F9953989cFAb6b2d74e9dDEE7",
    });

    const data = await response.raw;

    return data;
  } catch (e) {
    console.error(e);
  }
}
