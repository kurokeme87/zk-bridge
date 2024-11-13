export const tokens = [
  {
    chainId: 42161,
    address: "0x0000000000000000000000000000000000000000", // Replace with specific Arbitrum token address if applicable
    symbol: "ARB",
    isHot: true,
    name: "Arbitrum",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://icons-ckg.pages.dev/stargate-light/networks/arbitrum.svg",
      verified: true,
      isNative: true,
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      blockExplorerUrls: ["https://arbiscan.io"],
      usdPrice: "0.92",
    },
    addresses: {
      1: "", // No native Arbitrum token on Ethereum Mainnet
      10: "", // No native Arbitrum token on Optimism
      137: "", // No native Arbitrum token on Polygon Mainnet
      80001: "", // No native Arbitrum token on Mumbai Testnet
      42161: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1", // Replace with native ETH address on Arbitrum
    },
  },

  {
    chainId: 1,
    address: "",
    symbol: "ETH",
    name: "Ethereum",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png", // Ethereum logo
      verified: true,
      isNative: true,
      usdPrice: "1.00", // Example placeholder, update with live ETH/USD price
    },
    addresses: {
      1: "", // Ethereum Mainnet
      10: "0x4200000000000000000000000000000000000006", // Optimism
      137: "0x0000000000000000000000000000000000001010", // Polygon
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // Mumbai Testnet
      42161: "0x0000000000000000000000000000000000000000", // Arbitrum
      8453: "0x4200000000000000000000000000000000000006", // Base Mainnet
      59144: "0x0000000000000000000000000000000000001010", // Linea
      // "DAI": "0x6B175474E89094C44Da98b954EedeAC495271d0F" // DAI on Ethereum Mainnet
    },
  },

  // Optimism
  {
    chainId: 10,
    address: "0xb2EA9527bF05bC3b73320a1ec18bd4F2Fe88d952",
    symbol: "OP",
    name: "Optimism Token",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://icons-ckg.pages.dev/stargate-light/networks/optimism.svg",
      verified: true,
      isNative: true,
      rpcUrls: ["https://teloscan.io"],
      blockExplorerUrls: ["https://mainnet.optimism.io"],
      usdPrice: "0.83",
    },
    addresses: {
      1: "", // No native Optimism token on Ethereum Mainnet
      10: "", // Optimism (Native ETH)
      137: "", // No native Optimism token on Polygon Mainnet
      80001: "", // No native Optimism token on Mumbai Testnet
      42161: "", // No native Optimism token on Arbitrum
    },
  },

  {
    chainId: 137,
    address: "0x455e53cbb86018ac2b8092fdcd39d8444affc3f6",
    symbol: "POL",
    name: "Polygon",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
      verified: true,
      isNative: true,
      usdPrice: "1.14",
    },
    addresses: {
      1: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0", // Ethereum Mainnet
      10: "0x3e5c6bf06ef92fcfd9718bb6f3cf122f2eaff57b", // Optimism
      137: "0x0000000000000000000000000000000000001010", // Polygon Mainnet
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // Mumbai Testnet
      42161: "0x3a4aE3F51be57C30b1D188C8f19cbF07dF3D4A41", // Arbitrum
    },
  },
  {
    chainId: 10,
    address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // DAI on Optimism
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg",
      verified: true,
      isNative: false,
      rpcUrls: ["https://mainnet.optimism.io"],
      blockExplorerUrls: ["https://optimistic.etherscan.io"],
      usdPrice: "1",
    },
    addresses: {
      1: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // Ethereum Mainnet
      10: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // Optimism
      137: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // Polygon Mainnet
      80001: "", // No DAI on Mumbai Testnet
      42161: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // Arbitrum
    },
  },
];

export const zkTokens = [
  {
    chainId: 1,
    address: "",
    symbol: "ETH",
    name: "Ethereum",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png", // Ethereum logo
      verified: true,
      isNative: true,
      usdPrice: "1.00", // Example placeholder, update with live ETH/USD price
    },
    addresses: {
      1: "", // Ethereum Mainnet
      10: "0x4200000000000000000000000000000000000006", // Optimism
      137: "0x0000000000000000000000000000000000001010", // Polygon
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // Mumbai Testnet
      42161: "0x0000000000000000000000000000000000000000", // Arbitrum
      8453: "0x4200000000000000000000000000000000000006", // Base Mainnet
      59144: "0x0000000000000000000000000000000000001010", // Linea
    },
  },
  {
    chainId: 56,
    symbol: "BNB",
    name: "Binance Coin",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      verified: true,
      isNative: true,
      usdPrice: "1.00",
    },
    addresses: {
      1: "", // BNB is not native on Ethereum
      56: "", // Native on Binance Smart Chain
      137: "", // No BNB addresses for Polygon
      42161: "", // No BNB addresses for Arbitrum
    },
  },
  {
    chainId: 1,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      verified: true,
      isNative: false,
      usdPrice: "1.00",
    },
    contract: {
      1: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // Ethereum Mainnet
      56: "0x55d398326f99059fF775485246999027B3197955", // Binance Smart Chain
      137: "0x3813e82e6f7098b9583FC0F33a962D02018B6803", // Polygon Mainnet
      42161: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", // Arbitrum
    },
  },
];

const bnbChains = [
  {
    chainId: 56,
    symbol: "BNB",
    name: "Binance Chain",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png", // BNB logo
      verified: true,
      isNative: true,
      usdPrice: "1.00", // Example placeholder
    },
    addresses: {
      56: "", // Native BNB
      97: "0x0000000000000000000000000000000000000000", // Testnet address (Placeholder)
    },
  },
  {
    chainId: 204,
    symbol: "opBNB",
    name: "opBNB",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://opbnb.bnbchain.org/img/opBNB_logo.png", // opBNB logo (placeholder URL)
      verified: true,
      isNative: true,
      usdPrice: "1.00", // Example placeholder
    },
    addresses: {
      204: "", // Native opBNB
      97: "0x0000000000000000000000000000000000000000", // Testnet address (Placeholder)
    },
  },
  {
    chainId: 918,
    symbol: "COMBO",
    name: "Combo",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11056.png", // Combo logo
      verified: true,
      isNative: true,
      usdPrice: "1.00", // Example placeholder
    },
    addresses: {
      918: "", // Native Combo
      91801: "0x0000000000000000000000000000000000000000", // Testnet address (Placeholder)
    },
  },
];

export const brigeTokens = {
  1: tokens,
  56: bnbChains,
  137: tokens,
};
