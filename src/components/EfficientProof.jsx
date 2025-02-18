import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const EfficientProof = () => {
  return (
    <section className="min-h-screen h-full relative flex flex-col bg-black py-14 md:py-20">
      <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Efficient Proof systems
      </h1>

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-24">
        <img
          className="border animate-img-bg"
          src="https://www.zkbridge.com/assets/home-proof-bg-a6b3ca46.svg"
          alt="block receiver"
        />
        <div className="w-full">
          <p className="text-sm md:text-base text-[#ffffffb3] w-full">
            We use a 2-layer recursive proof system to achieve fast proof
            generation and low on-chain proof verification cost to support
            cross-chain applications.
            <br />
            <br />
            n the first layer, we present deVirgo, a distributed version of the
            Virgo proof system. deVirgo combines distributed sumcheck and
            distributed polynomial commitment to achieve optimal parallelism,
            and is able to accelerate the proof generation by orders of
            magnitude when running on distributed machines.
            <br />
            <br />
            In the second layer, we use Groth16 to prove that the previously
            generated proof by deVirgo proves the corresponding block headers,
            which significantly reduces on-chain verification gas cost to about
            220K.
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
  );
};

export default EfficientProof;
