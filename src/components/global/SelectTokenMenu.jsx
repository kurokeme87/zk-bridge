"use client";

import { zkTokens } from "@/app/lib/tokens";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { useAccount } from "wagmi";

const SelectTokenMenu = ({ selectedToken, setSelectedToken, setVmType }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { chainId } = useAccount();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelectToken = (item) => {
    if (!item) return; // Ensure item is not undefined/null

    // console.log(item);
    const addr =
      item.addresses?.[item?.chainId || chainId] ||
      "0x0000000000000000000000000000000000000000";

    console.log("selectedToken", selectedToken);

    setSelectedToken({
      name: item.name,
      symbol: item.symbol,
      chainId: item.chainId,
      address: addr,
      icon: item.metadata?.logoURI || "", // Ensure metadata and logoURI exist
    });

    setOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleOpen}
        className="flex justify-start items-center gap-2 text-[#CFCFCF] border border-borderGrayLight bg-[#1C1E1D] rounded-lg p-2"
      >
        <Image
          src={selectedToken?.icon}
          alt={selectedToken?.name || "ethereum"}
          width={25}
          height={25}
        />
        <p className="font-semibold">{selectedToken?.symbol}</p>
        <BsChevronDown
          className={`${
            open ? "-rotate-180" : "-rotate-90"
          } ease transition-transform duration-300 text-cyan`}
        />
      </button>

      {/* dropdown content */}
      <div
        className={`${
          open
            ? "opacity-100 scale-100 z-50"
            : "opacity-0 scale-0 -z-50 invisible h-0"
        } rounded-lg divide-y-[1px] divide-borderGrayLight border border-borderLight ease-in-out transition-all duration-200 flex flex-col absolute top-12 -left-9 w-56 justify-center items-center bg-[#222423] overflow-hidden`}
      >
        {zkTokens.map((item, index) => (
          <button
            onClick={() => {
              handleSelectToken(item);
              setVmType(item.vmType);
            }}
            key={index}
            className="w-full hover:bg-lightGray ease transition-all p-4 text-white flex justify-start items-center gap-3.5 text-base"
          >
            <Image
              src={item.metadata.logoURI}
              alt={item.name}
              width={24}
              height={24}
            />
            <p>{item.symbol}</p>
            {selectedToken?.chainId === item.chainId &&
            selectedToken?.symbol === item.symbol ? (
              <FaCheck className="ml-auto text-cyan" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectTokenMenu;
