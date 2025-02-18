const {
  ecosystems_img_url_1,
  ecosystems_img_url_2,
  ecosystems_img_url_3,
} = require("@/app/lib/data");
const { default: Marquee } = require("./Marquee");

const EcosystemSwiper = () => {
  return (
    <section className="bg-black w-full">
      <div className="mx-auto max-w-6xl w-full">
        <div className="w-full flex justify-between items-center gap-3">
          <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left">
            Ecosystem
          </h1>

          <button className="gray-btn border py-1.5 px-4 rounded-full text-white font-medium">
            View more
          </button>
        </div>

        <div className="w-full space-y-9 border animate-img-bg mt-14">
          <Marquee direction="left" data={ecosystems_img_url_1} />
          <Marquee delay={0.8} data={ecosystems_img_url_2} />
          <Marquee delay={0.3} direction="left" data={ecosystems_img_url_3} />
        </div>
      </div>
    </section>
  );
};

export default EcosystemSwiper;
