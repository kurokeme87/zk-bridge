"use client";

import { useEffect, useRef, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import Image from "next/image";
import coinbase_icon from "../../images/coinbase.svg";
import wallet_icon from "../../images/walletconnect.svg";
import { FaRegTimesCircle } from "react-icons/fa";
import spinner from "../../images/rolling.svg";

const ConnectWalletModal = ({ button, actionBtn }) => {
  const { isConnected } = useAccount();
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { connectors } = useConnect();
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isConnected) {
    if (actionBtn) {
      return <div className="">{actionBtn}</div>;
    }
  } else {
    return (
      <div className="relative font-poppins">
        <button
          onClick={() => setOpen(true)}
          className="w-full font-bold py-2 px-4 md:px-7 rounded-3xl bg-white text-[#0d0f0e] hover:bg-cyan whitespace-nowrap md:text-base text-sm font-poppins"
        >
          Connect Wallet
        </button>

        {/* Drawer */}
        <div
          className={
            open
              ? "opacity-75 block fixed inset-0 bg-black z-50 h-screen"
              : "hidden -z-[999]"
          }
        ></div>

        <div
          ref={dropdownRef}
          className={`${
            open
              ? "scale-100 visible z-[9999] opacity-100"
              : "scale-50 opacity-0 invisible -z-[999]"
          } border border-borderGrayLight px-4 pt-7 pb-10 w-screen max-w-[695px] fixed right-[50%] top-[50%] translate-x-[50%] translate-y-[40%] ease-in-out transition-all duration-300  bg-darkLight overflow-y-hidden rounded-xl`}
        >
          <div className="w-full md:p-5 p-2">
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold text-white md:text-2xl text-xl">
                Connect wallet
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-[#999] hover:text-white ease transition-all"
              >
                <FaRegTimesCircle size={24} />
              </button>
            </div>
          </div>
          <div className="md:px-5 py-3 grid sm:grid-cols-2 gap-5 mt-5">
            {connectors
              .filter((itm) => itm.name !== "Injected")
              .map((item, index) => (
                <button
                  onClick={() => {
                    setLoading(true);
                    setLoadingIndex(index);
                    item
                      .connect({ chainId: item.id })
                      .then(() => setOpen(false))
                      .finally(() => {
                        setLoading(false);
                        setLoadingIndex(null);
                      });
                  }}
                  key={index}
                  className="w-full flex justify-start items-center gap-4 bg-[#1C1E1D] hover:bg-lightGray hover:border-borderGrayLight ease transition-colors rounded-lg p-3 border border-borderLight"
                >
                  {loading && loadingIndex === index ? (
                    <Image
                      width={20}
                      height={20}
                      src={spinner}
                      alt="loaing spinner"
                    />
                  ) : null}
                  <Image
                    src={
                      item.name.toLowerCase() === "walletconnect"
                        ? wallet_icon
                        : item.name.toLowerCase() === "coinbase wallet"
                        ? coinbase_icon
                        : item.icon
                    }
                    alt={item.name}
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <p className="font-medium text-white font-poppins">
                    {item.name}
                  </p>
                </button>
              ))}
          </div>

          <p className="text-[#666] mt-2 text-[14px] pl-2 md:pl-5">
            By connecting your wallet, you agree to our Terms of Service and our
            Privacy Policy.
          </p>
        </div>
      </div>
    );
  }
};

export default ConnectWalletModal;
