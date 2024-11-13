"use client";

import { brigeTokens, zkTokens } from "@/app/lib/tokens";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const SelectTokenMenu = ({
  selectedChain,
  setSelectedChain,
  label,
  chainId,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
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
    <div className="w-full" ref={dropdownRef}>
      <div className="border border-borderLight bg-[#1C1E1D] rounded-xl p-4 w-full">
        <p className="mb-4 text-[#fffc] text-sm">{label}</p>
        <button
          onClick={handleOpen}
          className="flex justify-between items-center w-full"
        >
          <div className="flex justify-start items-center gap-2 pb-3">
            <Image
              src={selectedChain?.icon}
              alt={selectedChain?.name || "ethereum"}
              width={25}
              height={25}
            />
            <p className="font-semibold text-[#fffc]">{selectedChain?.name}</p>
          </div>

          <BsChevronDown
            className={`${
              open ? "-rotate-180" : "-rotate-90"
            } ease transition-transform duration-300 text-cyan`}
          />
        </button>
      </div>

      <div
        className={`${
          open
            ? "block absolute right-0 bottom-0 top-0 left-0 h-full bg-black opacity-35 z-50 p-1 rounded-xl"
            : "opacity-0 -z-[100] hidden"
        }`}
      ></div>

      {/* dropdown content */}
      <div
        className={`${
          open
            ? "translate-y-0 z-[90] top-[10%]"
            : "translate-y-[1000px] -z-50 invisible"
        } flex flex-col justify-start rounded-t-3xl divide-y-[1px] left-0 right-0 top-0 bottom-0 divide-borderGrayLight border border-borderLight ease transition-all duration-300  absolute bg-[#151716] px-6 pt-10`}
      >
        <div className="w-full flex justify-between items-center text-white">
          <h2 className="text-2xl font-semibold">Select Sender Chain</h2>
          <button onClick={() => setOpen(false)}>
            <BsChevronDown />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-7 gap-y-4 mt-10">
          {brigeTokens?.[chainId].map((item, index) => (
            <button
              onClick={() => {
                setOpen(false);
                setSelectedChain({
                  name: item.name,
                  icon: item.metadata.logoURI,
                  symbol: item.symbol,
                  chainId: item.chainId,
                });
              }}
              key={index}
              className="w-full hover:bg-lightGray ease transition-all p-4 text-white flex justify-start items-center gap-3.5 text-base bg-[#222423] rounded-lg"
            >
              <Image
                src={item.metadata.logoURI}
                alt={item.name}
                width={24}
                height={24}
              />
              <p>{item.symbol}</p>
              {!selectedChain?.chainId === item.chainId ? (
                <FaCheck className="ml-auto text-cyan" />
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTokenMenu;
