import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProvingEthereum = () => {
  return (
    <section className="min-h-screen h-full relative flex flex-col bg-black py-14 md:pb-20 md:pt-48">
      <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Proving Ethereum Full Consensus in ZK
      </h1>

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-24">
        <div className="w-full lg:w-[85%]">
          <p className="text-sm md:text-base text-[#ffffffb3] w-full">
            Proving Ethereum PoS full consensus is essential for building
            zkBridge and any interoperability protocols on Ethereum. Sync
            committee is insufficient because the crypto-economic security
            (~only $32 million USD ETH staked currently) of the sync committee
            is far from ideal.
            <br />
            <br />
            We have designed and implemented the zkBridge system to prove
            Ethereum full consensus (~$40 billion USD total ETH staked
            currently). All our ZK Clients on LayerZero for Ethereum and its
            rollups (e.g., Arbitrum, Linea, Optimism, zkSync, Mantle) will be
            equipped with this technology. Using our efficient proof system,
            deVirgo, the prover time is less than 8 seconds, which is enough to
            catch up with Ethereum block time (12 seconds).
          </p>

          <div className="w-full mt-10 flex justify-start items-center gap-4 text-white">
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

        <div className="relative">
          <div className="animate-img-bg-ethereum absolute inset-0"></div>
          <video
            playsInline
            autoPlay
            muted
            loop
            className="border animate-img-bg"
          >
            <source
              src="https://www.zkbridge.com/assets/zk-5e6b59bd.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ProvingEthereum;
