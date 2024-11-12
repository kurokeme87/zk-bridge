"use client";

import Web3 from "web3";

const useWallet = () => {
  const getBalance = async () => {
    try {
      // Check if window.ethereum is available
      if (typeof window.ethereum === "undefined") {
        console.log("Ethereum provider is not available");
        return;
      }

      // Initialize Web3 instance
      const web3 = new Web3(window.ethereum);

      // Request accounts
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        console.log(
          "No accounts found. Make sure the user is logged into their wallet."
        );
        return;
      }

      // Get balance in wei
      const weiBalance = await web3.eth.getBalance(accounts[0]);

      if (weiBalance === undefined) {
        console.error("Failed to fetch balance for the account:", accounts[0]);
        return;
      }

      // Convert to Ether
      const ethBalance = web3.utils.fromWei(weiBalance, "ether"); // Specify 'ether' as the unit

      // Set the wallet balance state
      return ethBalance;
    } catch (err) {
      console.log("Error fetching balance:", err);
    }
  };

  return { getBalance };
};

export default useWallet;
