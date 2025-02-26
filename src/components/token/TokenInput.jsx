"use client";

import { config } from "@/Web3Config";
import { BsInfoCircle } from "react-icons/bs";
import { useAccount, useBalance, useSwitchChain } from "wagmi";
import ConnectWalletModal2 from "../modals/ConnectWalletModal2";
import { useEffect, useState } from "react";
import { supportedChains } from "@/app/lib/network-images";

const TokenInput = ({ selectedChain, setAmount, amount, selectedToken }) => {
  const { address, isConnected, chainId, connector } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const { switchChain } = useSwitchChain();

  // console.log("selectedToken?.address", selectedToken?.address);
  const { data } = useBalance({
    config,
    chainId: selectedChain?.chainId || chainId,
    address,
    ...(selectedToken?.address &&
      selectedToken?.address !==
        "0x0000000000000000000000000000000000000000" && {
        token: selectedToken?.address,
      }),
  });

  const handleMax = () => {
    if (data?.formatted > 0) {
      setAmount(data?.formatted);
    }
  };

  const handleChange = (e) => {
    if (!isConnected) {
      setIsOpen(true);
    } else {
      setAmount(e.target.value);
    }
  };

  useEffect(() => {
    if (chainId) {
      if (supportedChains.some((item) => item === chainId)) {
      } else {
        switchChain({ chainId: 1, connector });
      }
    }
  }, [chainId]);

  return (
    <>
      <ConnectWalletModal2 setOpen={setIsOpen} open={isOpen} />
      <div className="border border-borderLight bg-[#1C1E1D] rounded-xl p-4 w-full font-poppins">
        <div className="w-full flex justify-between items-center text-[#ffffff4d] text-sm">
          <div className="flex justify-start items-center gap-2">
            <p>Balance:{Number(data?.formatted || "0.000").toFixed(6)}</p>
            <BsInfoCircle />
          </div>
          <p>
            Maximum: {isConnected ? "2.0" : ""} {selectedChain?.symbol}
          </p>
        </div>

        <div className="w-full flex justify-start items-center gap-2">
          <input
            type="text"
            inputMode="decimal"
            placeholder="0.00"
            value={amount}
            onChange={handleChange}
            className="bg-transparent outline-none w-full text-gray-50 placeholder:text-[#ffffff4d] font-medium md:text-xl text-lg py-2"
          />
          <button
            onClick={handleMax}
            className="px-3.5 py-2 rounded-lg border border-borderLight text-cyan font-normal text-sm mt-2"
          >
            Max
          </button>
        </div>
      </div>
    </>
  );
};

export default TokenInput;
