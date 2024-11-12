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
    isHot: true,
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
    isHot: true,
    chainId: 10,
    address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", // USDC on Optimism
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    vmType: "evm",
    metadata: {
      logoURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
      verified: true,
      isNative: false,
      rpcUrls: ["https://mainnet.optimism.io"],
      blockExplorerUrls: ["https://optimistic.etherscan.io"],
      usdPrice: "1",
    },
    addresses: {
      1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // Ethereum Mainnet
      10: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", // Optimism
      137: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // Polygon Mainnet
      80001: "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4", // Mumbai Testnet
      42161: "0xFF970A61A04b1Ca14834A43f5de4533ebDDB5CC8", // Arbitrum
    },
  },

  {
    chainId: 59144,
    address: "0x0000000000000000000000000000000000001010",
    symbol: "ETH",
    name: "Linea",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/25000.png", // Replace with actual logo URI for Linea
      verified: true,
      isNative: true,
      usdPrice: "1.00", // Example value, update with live data
    },
    addresses: {
      1: "0x0000000000000000000000000000000000000000", // Ethereum Mainnet native token equivalent
      10: "", // Optimism
      137: "", // Polygon Mainnet
      80001: "", // Mumbai Testnet
      42161: "", // Arbitrum
      59144: "0x0000000000000000000000000000000000001010", // Linea Mainnet
    },
  },

  {
    chainId: 137,
    address: "0x455e53cbb86018ac2b8092fdcd39d8444affc3f6",
    symbol: "MATIC",
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
  {
    chainId: 10,
    address: "", // No native AVAX on Optimism
    symbol: "AVAX",
    name: "Avalanche",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://cryptologos.cc/logos/avalanche-avax-logo.svg",
      verified: true,
      isNative: false,
      rpcUrls: ["https://mainnet.optimism.io"],
      blockExplorerUrls: ["https://optimistic.etherscan.io"],
      usdPrice: "0.11",
    },
    addresses: {
      1: "", // No native AVAX on Ethereum Mainnet
      10: "", // No native AVAX on Optimism
      137: "", // No native AVAX on Polygon Mainnet
      80001: "", // No native AVAX on Mumbai Testnet
      43114: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", // Avalanche Mainnet
    },
  },
  {
    chainId: 42161,
    address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png",
      verified: true,
      isNative: false,
      usdPrice: "1812.35",
    },
    addresses: {
      1: "0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2", // Ethereum Mainnet
      10: "0x4200000000000000000000000000000000000006", // Optimism
      137: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // Polygon Mainnet
      80001: "", // Mumbai Testnet
      42161: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1", // Arbitrum
    },
  },
  {
    chainId: 42161,
    address: "0x2f2a2543b76a4166549f7aab2e75bef0f6a5f1a8",
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    decimals: 8,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
      verified: true,
      isNative: false,
      usdPrice: "34921.45",
    },
    addresses: {
      1: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // Ethereum Mainnet
      10: "", // Optimism
      137: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", // Polygon Mainnet
      80001: "", // Mumbai Testnet
      42161: "0x2f2a2543b76a4166549f7aab2e75bef0f6a5f1a8", // Arbitrum
    },
  },
  {
    chainId: 42161,
    address: "0x15c33e4ee52a594a2da4c597bf3e8d79e116db6e",
    symbol: "BIT",
    name: "BitDAO",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12349.png",
      verified: true,
      isNative: false,
      usdPrice: "0.25",
    },
    addresses: {
      1: "0x1A7e4e63778B4f12a199C062f3eFdD288afCBce8", // Ethereum Mainnet
      10: "", // Optimism
      137: "", // Polygon Mainnet
      80001: "", // Mumbai Testnet
      42161: "0x15c33e4ee52a594a2da4c597bf3e8d79e116db6e", // Arbitrum
    },
  },
  {
    chainId: 42161,
    address: "0xe845b2f4b9b1d780db47f70b86993871ef29e26a",
    symbol: "CYBER",
    name: "CyberConnect",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/24778.png",
      verified: true,
      isNative: false,
    },
    addresses: {
      1: "0x14778860E937f5096de55C8074233E8a8eD9cC5b", // Ethereum Mainnet
      10: "", // Optimism
      137: "", // Polygon Mainnet
      80001: "", // Mumbai Testnet
      42161: "0xe845b2f4b9b1d780db47f70b86993871ef29e26a", // Arbitrum
    },
  },
  {
    chainId: 42161,
    address: "0x5fd712348a5826f068e9f667bd7687b2645a978e",
    symbol: "iZi",
    name: "iZUMi Token",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18959.png",
      verified: true,
      isNative: false,
      usdPrice: "0.017",
    },
    addresses: {
      1: "0x60d01ec2d5e98ac51c8b4cf84ef5a0c7a8e335f6", // Ethereum Mainnet
      10: "", // Optimism
      137: "", // Polygon Mainnet
      80001: "", // Mumbai Testnet
      42161: "0x5fd712348a5826f068e9f667bd7687b2645a978e", // Arbitrum
    },
  },

  {
    isHot: true,
    chainId: 8453,
    address: "0xabc123f0f9f9c0e12345678901234567890abcdef",
    symbol: "FOXY",
    name: "Foxy",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/foxy.png",
      verified: true,
      isNative: false,
      usdPrice: "2.50",
    },
    addresses: {
      1: "0x123abc456def7890abcdef1234567890abcdef12", // Ethereum Mainnet
      10: "0xabcdef1234567890abcdef1234567890abcdef12", // Optimism
      137: "0xabcdef1234567890abcdef1234567890abcdef12", // Polygon Mainnet
      42161: "0xabcdef1234567890abcdef1234567890abcdef12", // Arbitrum
      8453: "0xabc123f0f9f9c0e12345678901234567890abcdef", // Base Mainnet
    },
  },
  {
    chainId: 8453,
    address: "0xdef456f0f9f9c0e2345678901234567890abcdef",
    symbol: "LAB",
    name: "LAB",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/lab.png",
      verified: true,
      isNative: false,
      usdPrice: "5.10",
    },
    addresses: {
      1: "0x123abc456def7890abcdef1234567890abcdef12", // Ethereum Mainnet
      10: "0xabcdef1234567890abcdef1234567890abcdef12", // Optimism
      137: "0xabcdef1234567890abcdef1234567890abcdef12", // Polygon Mainnet
      42161: "0xabcdef1234567890abcdef1234567890abcdef12", // Arbitrum
      8453: "0xdef456f0f9f9c0e2345678901234567890abcdef", // Base Mainnet
    },
  },
  {
    chainId: 8453,
    address: "0xjkl012f0f9f9c0e45678901234567890abcdef",
    symbol: "USDT",
    name: "Tether",
    decimals: 6,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png",
      verified: true,
      isNative: false,
      usdPrice: "1.00",
    },
    addresses: {
      1: "0xdac17f958d2ee523a2206206994597c13d831ec7", // Ethereum Mainnet
      10: "0x3F3836BfdC48b53350eae16eC8b20a98D165c2ad", // Optimism
      137: "0x1E05cD61a35c90D33c13aA72a78cfd51b4D7C8E6", // Polygon Mainnet
      42161: "0x076FF6E5b9bfe87F86C2ddB5B34F49729506b405", // Arbitrum
      8453: "0x1dC78a50b52a8b39d8f1f676070F16a7B4b0B013", // Base Mainnet
    },
  },
  {
    chainId: 8453,
    address: "0xlmn123f0f9f9c0e5678901234567890abcdef",
    symbol: "ZERO",
    name: "ZERO",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/zero.png",
      verified: true,
      isNative: false,
      usdPrice: "0.99",
    },
    addresses: {
      1: "0x0a9ab1c91f773b17d6ab5ab81920a82f58b3ef99", // Ethereum Mainnet
      10: "0xabcdef1234567890abcdef1234567890abcdef12", // Optimism
      137: "0xabcdef1234567890abcdef1234567890abcdef12", // Polygon Mainnet
      42161: "0xabcdef1234567890abcdef1234567890abcdef12", // Arbitrum
      8453: "0xlmn123f0f9f9c0e5678901234567890abcdef", // Base Mainnet
    },
  },

  {
    chainId: 8453,
    address: "0xuhi789f0f9f9c0e8901234567890abcdef123",
    symbol: "ezETH",
    name: "ezETH",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/ezeth.png",
      verified: true,
      isNative: false,
      usdPrice: "1.00",
    },
  },
  {
    chainId: 8453,
    address: "0xabc123f0f9f9c0e12345678901234567890abcdef",
    symbol: "FOXY",
    name: "Foxy",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/foxy.png",
      verified: true,
      isNative: false,
      usdPrice: "2.50",
    },
    addresses: {
      1: "0x123abc456def7890abcdef1234567890abcdef12",
      10: "0xabcdef1234567890abcdef1234567890abcdef12",
      137: "0xabcdef1234567890abcdef1234567890abcdef12",
      42161: "0xabcdef1234567890abcdef1234567890abcdef12",
      8453: "0xabc123f0f9f9c0e12345678901234567890abcdef",
    },
  },
  {
    chainId: 8453,
    address: "0xdef456f0f9f9c0e2345678901234567890abcdef",
    symbol: "LAB",
    name: "LAB",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/lab.png",
      verified: true,
      isNative: false,
      usdPrice: "5.10",
    },
    addresses: {
      1: "0x123abc456def7890abcdef1234567890abcdef12",
      10: "0xabcdef1234567890abcdef1234567890abcdef12",
      137: "0xabcdef1234567890abcdef1234567890abcdef12",
      42161: "0xabcdef1234567890abcdef1234567890abcdef12",
      8453: "0xdef456f0f9f9c0e2345678901234567890abcdef",
    },
  },
  {
    chainId: 8453,
    address: "0xghi789f0f9f9c0e345678901234567890abcdef",
    symbol: "LINE",
    name: "LINE",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/ezeth.png",
      verified: true,
      isNative: false,
      usdPrice: "3.40",
    },
    addresses: {
      1: "0x123abc456def7890abcdef1234567890abcdef12",
      10: "0xabcdef1234567890abcdef1234567890abcdef12",
      137: "0xabcdef1234567890abcdef1234567890abcdef12",
      42161: "0xabcdef1234567890abcdef1234567890abcdef12",
      8453: "0xghi789f0f9f9c0e345678901234567890abcdef",
    },
  },

  {
    chainId: 8453,
    address: "0xopq123f0f9f9c0e678901234567890abcdef123",
    symbol: "LYU",
    name: "LYU",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/lyu.png",
      verified: true,
      isNative: false,
      usdPrice: "7.30",
    },
    addresses: {
      1: "0x123abc456def7890abcdef1234567890abcdef12",
      10: "0xabcdef1234567890abcdef1234567890abcdef12",
      137: "0xabcdef1234567890abcdef1234567890abcdef12",
      42161: "0xabcdef1234567890abcdef1234567890abcdef12",
      8453: "0xopq123f0f9f9c0e678901234567890abcdef123",
    },
  },
  {
    chainId: 8453,
    address: "0xrst456f0f9f9c0e78901234567890abcdef1234",
    symbol: "ZkUSD",
    name: "zkUSD",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/ezeth.png",
      verified: true,
      isNative: false,
      usdPrice: "1.00",
    },
    addresses: {
      1: "0xabcdef1234567890abcdef1234567890abcdef12",
      10: "0xabcdef1234567890abcdef1234567890abcdef12",
      137: "0xabcdef1234567890abcdef1234567890abcdef12",
      42161: "0xabcdef1234567890abcdef1234567890abcdef12",
      8453: "0xrst456f0f9f9c0e78901234567890abcdef1234",
    },
  },
  {
    chainId: 8453,
    address: "0xuhi789f0f9f9c0e8901234567890abcdef123",
    symbol: "ezETH",
    name: "ezETH",
    decimals: 18,
    vmType: "evm",
    metadata: {
      logoURI:
        "https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/ezeth.png",
      verified: true,
      isNative: false,
      usdPrice: "1.00",
    },
    addresses: {
      1: "0xabcdef1234567890abcdef1234567890abcdef12",
      10: "0xabcdef1234567890abcdef1234567890abcdef12",
      137: "0xabcdef1234567890abcdef1234567890abcdef12",
      42161: "0xabcdef1234567890abcdef1234567890abcdef12",
      8453: "0xuhi789f0f9f9c0e8901234567890abcdef123",
    },
  },
];
