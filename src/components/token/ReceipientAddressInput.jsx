"use client";

import { ethers } from "ethers";
import { FaRegClock } from "react-icons/fa6";
import { useAccount, useBalance } from "wagmi";

const ReceipientAddressInput = ({ receipAddress, setReceipAddress }) => {
  const { address } = useAccount();

  const validateAddress = (value) => {
    if (value) {
      return ethers.utils.isAddress(value);
    }
  };
  return (
    <div className="border border-borderLight bg-[#1C1E1D] rounded-xl p-4 w-full font-poppins">
      <div className="w-full flex justify-between items-center text-[#ffffff4d] text-sm">
        <p>Recipient Address</p>
        <div className="flex justify-start items-center gap-1">
          <FaRegClock />
          <p>Estimated Finality: 2 mins</p>
        </div>
      </div>

      <input
        type="text"
        value={receipAddress}
        defaultValue={address}
        placeholder="Enter the receiver adress"
        onChange={(e) => setReceipAddress(e.target.value)}
        className="bg-transparent outline-none w-full text-gray-50 placeholder:text-[#ffffff4d] font-medium md:text-lg text-base py-2 mt-3"
      />

      {validateAddress(receipAddress) ? null : (
        <p className="text-red-600 text-sm">The address is invalid</p>
      )}
    </div>
  );
};

export default ReceipientAddressInput;
