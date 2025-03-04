import BuildWithZkBridge from "@/components/BuildWithZkBridge";
import EcosystemSwiper from "@/components/EcosystemSwiper";
import EfficientProof from "@/components/EfficientProof";
import Footer from "@/components/global/Footer";
import HeroSection from "@/components/HeroSection";
import ProvingEthereum from "@/components/ProvingEthereum";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { supported_chains_img } from "./lib/data";
import ApplicationUseCases from "@/components/ApplicationUseCases";
import Advantages from "@/components/Advantages";
import AnimatedNav from "@/components/global/AnimatedNav";

const Page = () => {
  return (
    <main className="w-full font-poppins">
      <AnimatedNav />
      <HeroSection />
      <section className="min-h-screen h-full relative flex flex-col bg-black py-14 md:py-20">
        <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
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
      <section className="min-h-screen h-full relative flex flex-col bg-black py-14 md:py-20">
        <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          zkLightClient on LayerZero
        </h1>

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-24 px-7 sm:px-10 md:px-0">
          <img
            className="border animate-img-bg"
            src="https://www.zkbridge.com/assets/home_layerzero-bg-e8b84d4c.gif"
            alt="block receiver"
          />
          <div className="w-full">
            <p className="text-sm md:text-base text-[#ffffffb3] w-full">
              zkLightClient is fully integrated with LayerZero's messaging
              protocol. Application developers can easily build cross-chain
              applications on top of LayerZero through its extensive developer
              tooling and community support.
              <br />
              <br />
              zklightClient uses zkSNARKs to convince the receiver chain that a
              certain state transition happened on the sender chain. In
              conjunction with LayerZero’s libraries, zkLightClient add layer of
              security on top of the LayerZero messaging protocol.
              <br />
              <br />
              zkLightClient, build on LayerZero, reduces the on-chain
              verification with lower latency through efficient ZKP protocols.
              In addition, multiple transaction verifications can be batched
              into a single zero-knowledge proof.
              <br />
              <br />
            </p>

            <div className="w-full mt-7 flex justify-start items-center gap-4 text-white">
              <Link
                href="https://dl.acm.org/doi/10.1145/3548606.3560652"
                target="_blank"
                className="flex justify-start items-center gap-2 w-max text-base sm:text-lg"
              >
                <p>Learn more</p>
                <HiOutlineExternalLink className="text-cyan" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Advantages />
      <section className="min-h-screen h-full bg-black py-14 md:py-20 w-full flex flex-col items-center">
        <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Current Supported Networks
        </h1>

        <div className="mt-12 w-full grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-11 mx-auto self-center gap-4 gap-y-3 md:gap-x-8 max-w-6xl h-full">
          {supported_chains_img.map((item, index) => (
            <img
              src={item}
              key={index}
              alt={item}
              className="rounded-full h-12 w-12 lg:h-20 lg:w-20 xl:w-28 xl:h-28 object-contain"
            />
          ))}
        </div>
      </section>
      <EcosystemSwiper />
      <ProvingEthereum />
      <EfficientProof />
      <ApplicationUseCases />
      <BuildWithZkBridge />
      <Footer />
    </main>
  );
};

export default Page;
