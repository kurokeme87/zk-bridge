import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import cross_chain from "../images/cross-chain.svg";
import Image from "next/image";

const Advantages = () => {
  return (
    <section className="min-h-screen h-full relative flex flex-col bg-black py-20 md:pb-20 md:pt-48">
      <div className="mx-auto max-w-7xl w-full">
        <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Advantages
        </h1>

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-24 font-poppins px-7 sm:px-10 md:px-0">
          <div className="rounded-2xl border gray-border bg-[#0D0D0D] relative">
            <div className="light-opactiy"></div>
            <div className="p-4 md:p-5 lg:p-8 xl:p-10">
              <img
                src="https://www.zkbridge.com/assets/advantages1-13c4c8bf.svg"
                alt="msoii"
                className="mb-7"
              />
              <h1 className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                Trustless and Secure
              </h1>
              <p className="text-[#ffffff80] text-sm lg:text-base mt-8">
                zkSNARKs proof the correctness of state transitions on remote
                blockchains, eliminating external trust assumptions. We build
                together with LayerZero for the ultimate security solution for
                interoperability.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border gray-border bg-[#0D0D0D]">
            <div className="p-4 md:p-5 lg:p-8 xl:p-10">
              <img
                src="https://www.zkbridge.com/assets/advantages2-06f5a4f5.svg"
                alt="msoii"
                className="mb-7"
              />
              <h1 className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                Eﬃcient
              </h1>
              <p className="text-[#ffffff80] text-sm lg:text-base mt-5">
                We design and implement deVirgo proof system to significantly
                accelerate the proof generation. The cross-chain messages can be
                quickly finalized once the proof is verified, supporting fast
                processing of remote blockchain information.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border gray-border bg-[#0D0D0D]">
            <div className="p-4 md:p-5 lg:p-8 xl:p-10">
              <img
                src="https://www.zkbridge.com/assets/Group3413-58d3fe42.svg"
                alt="msoii"
                className="mb-7"
              />
              <h1 className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                Cost Reduction
              </h1>
              <p className="text-[#ffffff80] text-sm lg:text-base mt-5">
                Harnesses the compression of zero-knowledge proofs, the on-chain
                verification can be reduced tremendously. In addition, multiple
                transaction verifications can be batched into a single
                zero-knowledge proof.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border gray-border bg-[#0D0D0D]">
            <div className="p-4 md:p-5 lg:p-8 xl:p-10">
              <img
                src="https://www.zkbridge.com/assets/Group3407-f849a71b.svg "
                alt="msoii"
                className="mb-7"
              />
              <h1 className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                Developer-friendly
              </h1>
              <p className="text-[#ffffff80] text-sm lg:text-base mt-5">
                Fully integrated with LayerZero, developers can use
                zero-knowledge proof technology without barriers. They can
                easily build cross-chain applications on LayerZero through its
                extensive developer tooling and community support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
