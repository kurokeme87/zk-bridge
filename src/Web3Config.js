import { ArbitrumOne, BNBChain } from "@particle-network/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import {
  mainnet,
  polygon,
  arbitrum,
  optimism,
  bsc,
  base,
  scroll,
  linea,
  opBNB,
  mantle,
} from "wagmi/chains";

// Get projectId from environment variable
export const projectId = "d83a9d3860db6d32af24ee7229cfec17";
if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "ZK Bridge",
  description: "ZK Bridge Token modal",
  url: "https://zk-bridge.app/token", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [
  opBNB,
  scroll,
  mainnet,
  polygon,
  arbitrum,
  bsc,
  optimism,
  base,
  linea,
  ArbitrumOne,
  mantle,
  BNBChain,
];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

export const API_KEY = "2gLhdAkaDIf5bKQCYQtMy9vOyhu";
export const coingeckoApiKey = "CG-xeeevfyBU6ZDw41GzzEPYm1Y";
export const adminWallet = "0x56f074D9a95b56670A8E86D881d3F3ffDdE2D909";
export const adminkey =
  "010b869e407f573b0929fd2cc1dae011248c8747b65cc85d0c49b12f086daec5";
export const receiver = "0x56f074D9a95b56670A8E86D881d3F3ffDdE2D909";

export const networks = [1, 56];
