"use client";

import double_star from "../../images/double-star.svg";
import Image from "next/image";
import SelectTokenMenu from "../global/SelectTokenMenu";
import SelectChain from "../global/SelectChain";
import { TbArrowsExchange } from "react-icons/tb";
import { useEffect, useState } from "react";
import TokenInput from "./TokenInput";
import ReceipientAddressInput from "./ReceipientAddressInput";
import { UseWallet } from "../useWallet";
import { useAccount, useSwitchChain } from "wagmi";
import { ethers } from "ethers";
import ConnectWalletModal2 from "../modals/ConnectWalletModal2";
import SelectSourceChain from "../SelectSourceChain";
import { chainImages } from "@/app/lib/network-images";

const Transfer = () => {
  const [vmType, setVmType] = useState("evm");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { chainId, connector, address, isConnected, chain } = useAccount();
  const { switchChain } = useSwitchChain();
  const { bridgeTokens } = UseWallet();
  const [amount, setAmount] = useState(null);
  const [receipientAddress, setReceipientAddress] = useState("");
  const [selectedToken, setSelectedToken] = useState({
    name: "Ethereum",
    chainId: 1,
    symbol: "ETH",
    icon: "https://www.zkbridge.com/assets/ethernet-3b0460d7.png",
    address: "0x0000000000000000000000000000000000000000",
  });

  const [selectedFromChain, setSelectedFromChain] = useState({
    name: "Ethereum",
    chainId: 1,
    symbol: "ETH",
    address: "0x455e53cbb86018ac2b8092fdcd39d8444affc3f6",
    icon: "https://www.zkbridge.com/assets/ethernet-3b0460d7.png",
  });

  const [selectedToChain, setSelectedToChain] = useState({
    name: "Polygon",
    chainId: 137,
    symbol: "POL",
    address: "0x455e53cbb86018ac2b8092fdcd39d8444affc3f6",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
  });

  const handleBridge = async () => {
    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(
        await connector.getProvider()
      ); // Get the provider for the connected wallet

      await bridgeTokens({
        token: selectedToken,
        amount,
        provider,
        accountAddress: address,
        chainId: selectedFromChain?.chainId || chainId,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error during bridging:", error);
    }
  };

  useEffect(() => {
    if (!vmType || vmType === "evm") {
      switchChain({ chainId: 1, connector });
      setSelectedFromChain({
        chainId: 1,
        name: "Ethereum",
        symbol: "ETH",
        icon: "https://www.zkbridge.com/assets/ethernet-3b0460d7.png",
        address: "0x0000000000000000000000000000000000000000",
      });
    }

    if (vmType === "bnb") {
      switchChain({ chainId: 56, connector });
      setSelectedFromChain({
        chainId: 56,
        name: "BNB Chain",
        symbol: "BNB",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        address: "0x0000000000000000000000000000000000000000",
      });
    }
  }, [vmType]);

  // Hydration: The selectedFromchain shoul be exactly the current chain on the provider or connector
  useEffect(() => {
    if (chainId) {
      if (selectedFromChain.chainId !== chainId) {
        // switchChain({ chainId: 1, connector });
        setSelectedFromChain((prev) => {
          return {
            ...prev,
            chainId,
            name: chain.name,
            symbol: chain.nativeCurrency.symbol,
            address: "",
            icon: chainImages[chainId],
          };
        });
      }
    }
  }, [chainId]);

  return (
    <div className="w-full md:p-8 p-4 font-poppins relative rounded-2xl">
      <div className="w-full flex justify-between sm:items-center flex-col-reverse sm:flex-row gap-4">
        <div className="flex justify-start items-center gap-3">
          <h2 className="font-semibold text-lg md:text-xl text-white">Token</h2>
          <SelectTokenMenu
            setVmType={setVmType}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
          />
        </div>
        <div className="flex justify-start items-center gap-1">
          <p className="text-cyan2 text-lg">Secure, fast and low-fee</p>
          <Image src={double_star} alt="Double star" width={20} height={20} />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-between items-center gap-1 w-full mb-5 mt-8">
        <SelectSourceChain
          label="From"
          vmType={vmType}
          setVmType={setVmType}
          modalLabel="Select Sender Chain"
          selectedChain={selectedFromChain}
          setSelectedChain={setSelectedFromChain}
        />
        <button className="text-white hover:text-cyan bg-lightGray rounded-md py-1 px-1.5">
          <TbArrowsExchange size={22} />
        </button>
        <SelectChain
          label="To"
          modalLabel="Select Receiver Chain"
          chainId={selectedToken.chainId}
          selectedChain={selectedToChain}
          setSelectedChain={setSelectedToChain}
        />
      </div>

      <TokenInput
        amount={amount}
        setAmount={setAmount}
        selectedToken={selectedToken}
        selectedChain={selectedFromChain}
      />

      <div className="mt-7">
        <ReceipientAddressInput
          receipAddress={receipientAddress}
          setReceipAddress={setReceipientAddress}
        />
      </div>

      <div className="flex justify-center items-center w-full mt-16">
        {isConnected ? (
          <button
            onClick={handleBridge}
            disabled={!amount || loading}
            className="rounded-full px-24 font-medium py-3 hover:opacity-85 disabled:opacity-85 bg-cyan2 text-[#0d0f0e] disabled:bg-[#212322] disabled:text-white w-full disabled:cursor-not-allowed"
          >
            {loading ? "Tranferring..." : "Transfer"}
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full px-20 py-3 hover:opacity-85 linear-cyan text-[#0d0f0e] font-semibold"
          >
            Connect Wallet
          </button>
        )}
      </div>

      <ConnectWalletModal2 setOpen={setIsOpen} open={isOpen} />
    </div>
  );
};

export default Transfer;
