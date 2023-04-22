import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/stake.css";
// import "flowbite";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Navbar from "../components/Navbar";
// This is the chain your dApp will work on.
const activeChain = ChainId.Mumbai;

const { chains, provider } = configureChains(
  [polygonMumbai], // Use the Polygon Mumbai test network
  // [publicProvider()] // Use a public provider to connect to the network
  [
    // Use a JSON-RPC provider to connect to the network
    jsonRpcProvider({
      // Check if the chain ID matches the Polygon Mumbai test network
      rpc: (chain) => {
        if (chain.id !== polygonMumbai.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

// Get the default wallets for the specified chains
const { connectors } = getDefaultWallets({
  appName: "Wagmi Tutorial", // Specify the name of the app
  chains, // Use the configured chains
});

// Create a Wagmi client to interact with the blockchain
const wagmiClient = createClient({
  autoConnect: true, // Automatically connect to the provider
  connectors, // Use the specified connectors to connect to the chains
  provider, // Use the specified provider to connect to the network
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      authConfig={{
        domain: "https://web3-authentication-neon.vercel.app/",
      }}
    >
      <WagmiConfig client={wagmiClient}>
        {/* Set up the RainbowKit provider for the app */}
        <RainbowKitProvider chains={chains}>
          {/* Render the specified component with its page props */}
          <Navbar />
          <Component {...pageProps} />{" "}
        </RainbowKitProvider>
      </WagmiConfig>
    </ThirdwebProvider>
  );
}

export default MyApp;
