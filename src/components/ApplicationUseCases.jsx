import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import cross_chain from "../images/cross-chain.svg";
import Image from "next/image";

const ApplicationUseCases = () => {
  return (
    <section className="min-h-screen h-full relative flex flex-col bg-black py-20 md:pb-20 md:pt-48">
      <div className="mx-auto max-w-6xl w-full">
        <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Application Use Cases
        </h1>

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-24 font-poppins">
          <div className="rounded-2xl border gray-border bg-[#0D0D0D]">
            <div
              className="h-52 w-full"
              style={{
                backgroundImage: `url(/cross-chain.svg)`,
              }}
            ></div>

            <div className="p-4 md:p-5 lg:p-7">
              <h1 className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                Cross-chain data availability
              </h1>
              <p className="text-[#ffffff80] text-sm lg:text-base mt-5">
                Allow multiple blockchain networks to access, share, and verify
                data in a secure and efficient manner. This interoperability
                enhances the overall functionality and efficiency of the
                blockchain ecosystem with seamless communication, data
                transfers, and collaboration among the systems.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border gray-border bg-[#0D0D0D]">
            <div
              className="h-52 w-full"
              style={{
                backgroundImage: `url(/cross-chain-defi.svg)`,
              }}
            ></div>

            <div className="p-4 md:p-5 lg:p-7">
              <h1 className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                Cross-chain Defi protocols
              </h1>
              <p className="text-[#ffffff80] text-sm lg:text-base mt-5">
                Enable seamless multi-chain interoperability to increase
                liquidity, attract users, and improve collaborations between
                various blockchain ecosystems. Examples of cross-chain DeFi
                protocols include multi-chain decentralized exchanges,
                cross-chain lending platforms, and multi-chain asset management
                tools.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border gray-border bg-[#0D0D0D]">
            <div
              className="h-52 w-full"
              style={{
                backgroundImage: `url(/cross-chain-gamefi.svg)`,
              }}
            ></div>

            <div className="p-4 md:p-5 lg:p-7">
              <h1 className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                Cross-chain NFT and GameFi
              </h1>
              <p className="text-[#ffffff80] text-sm lg:text-base mt-5">
                Empower creators, developers, and gamers to interact with
                diverse blockchain networks, unleashing unparalleled
                opportunities for virtual asset creation, ownership, and in-game
                economies, fostering a thriving and interoperable digital
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationUseCases;
