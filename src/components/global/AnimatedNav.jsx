import Link from "next/link";

const AnimatedNav = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.zkbridge.com/assets/header_bg4-212514df.png",
      }}
      className="bg-no-repeat group fixed top-[89px] right-2 left-2 sm:right-[20%] sm:left-[20%] z-40 bg-[#060807] gray-border rounded-xl px-4 py-3 gray-border ease transition-all duration-300 hover:border-cyan"
    >
      <Link href="/tokens">
        <div className="w-full flex justify-between">
          <h2 className="font-medium text-base md:text-lg group-hover:text-cyan ease transition text-white">
            Token zkBridge is live
          </h2>

          <img
            height={40}
            width={40}
            src="data:image/png;base64,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"
            alt="sjkhid"
          />
        </div>
      </Link>
    </div>
  );
};

export default AnimatedNav;
