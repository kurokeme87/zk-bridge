const HeroSection = () => {
  return (
    <section className="min-h-screen h-full relative flex flex-col justify-center sm:items-center">
      <div>
        <video
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-full h-full absolute inset-0 z-0"
        >
          <source
            src="https://www.zkbridge.com/video-pc-homepage.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="w-full relative z-10 flex flex-col sm:justify-center items-center mx-auto max-w-4xl">
        <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
          Trustless Cross-chain Bridges Made Practical
        </h1>

        <p className="font-semibold text-lg sm:text-xl md:text-2xl w-full text-center mt-10 text-[#ffffffb3]">
          The first trustless, efficient, and secure cross-chain
          interoperability protocol with zero-knowledge proofs
        </p>

        <div className="w-full mt-16 flex justify-center items-center gap-4">
          <button className="rounded-full py-3 w-full font-medium linear-cyan text-sm sm:text-base md:text-lg">
            Start integrating
          </button>
          <button className="rounded-full py-3 w-full font-medium border hover:border-cyan text-white text-sm sm:text-base md:text-lg">
            Explore the ecosystem
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
