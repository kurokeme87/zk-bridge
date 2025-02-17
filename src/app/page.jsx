import Navbar from "@/components/global/Navbar";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const Page = () => {
  return (
    <main className="w-full font-poppins">
      <Navbar />
      <HeroSection />
      <section className="min-h-screen h-full relative flex flex-col bg-black py-14 md:py-20">
        <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Introducing zkBridge Protocol
        </h1>

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
          <div className="w-full">
            <p className="text-sm md:text-base text-[#ffffffb3] w-full">
              zkBridge uses zkSNARKs to enable a prover to efficiently convince
              the receiver chain that a certain state transition happened on the
              sender chain. zkBridge consists of a block header relay network
              and an updater contract.
              <br />
              <br />
              The block header relay network retrieves the block headers from
              the sender chain, generates proofs of the validity of the block
              headers, and sends the headers along with the proofs to the
              updater contract (set up on the receiver chain).
              <br />
              <br />
              The updater contract maintains a light-client state. It
              automatically adds block headers of the sender chain once the
              associated proofs are verified, and updates the current main chain
              of the sender chain.
              <br />
              <br />
            </p>

            <div className="w-full mt-7 flex justify-start items-center gap-4 text-white">
              <Link
                href="https://dl.acm.org/doi/10.1145/3548606.3560652"
                target="_blank"
                className="flex justify-start items-center gap-2 w-max text-base sm:text-lg"
              >
                <p>zkBridge Tech Paper</p>
                <HiOutlineExternalLink className="text-cyan" />
              </Link>

              <Link
                href="https://docs.zkbridge.com/"
                target="_blank"
                className="flex justify-start items-center gap-2 w-max text-base sm:text-lg"
              >
                <p>Read Docs</p>
                <HiOutlineExternalLink className="text-cyan" />
              </Link>
            </div>
          </div>
          <img
            className="border animate-img-bg"
            src="https://www.zkbridge.com/assets/protocol-img-b07583a2.gif"
            alt="block receiver"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
