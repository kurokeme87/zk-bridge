"use client";

import { config } from "@/Web3Config";
import { BsInfoCircle } from "react-icons/bs";
import { useAccount, useBalance } from "wagmi";

const TokenInput = ({ selectedChain, setAmount, amount }) => {
  const { address } = useAccount();

  const { data } = useBalance({
    config,
    chainId: selectedChain?.chainId,
    address,
    token: selectedChain?.address,
  });

  const handleMax = () => {
    if (data?.formatted > 0) {
      setAmount(data?.formatted);
    }
  };
  return (
    <div className="border border-borderLight bg-[#1C1E1D] rounded-xl p-4 w-full font-poppins">
      <div className="w-full flex justify-between items-center text-[#ffffff4d] text-sm">
        <div className="flex justify-start items-center gap-2">
          <p>Balance:{Number(data?.formatted || "0.000").toFixed(6)}</p>
          <BsInfoCircle />
        </div>
        <p>Maximum: 2.0 {selectedChain?.symbol}</p>
      </div>

      <div className="w-full flex justify-start items-center gap-2">
        <input
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-50 placeholder:text-[#ffffff4d] font-medium md:text-xl text-lg py-2"
        />
        <button
          onClick={handleMax}
          className="px-2 py-1 rounded-lg border border-borderLight text-cyan font-normal text-sm"
        >
          Max
        </button>
      </div>
    </div>
  );
};

export default TokenInput;
