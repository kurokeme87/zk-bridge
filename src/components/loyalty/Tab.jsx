"use client";

const LoyaltyTab = ({ current, setCurrent }) => {
  return (
    <div className="w-full flex justify-start items-center gap-10 border-b border-borderLight">
      <div className="relative">
        <button
          onClick={() => setCurrent(1)}
          className={`${
            current === 1 ? "text-white" : "text-[#ffffff80]"
          } font-medium text-xl md:text-2xl lg:text-3xl xl:text-[32px] pb-6 ease transition-all duration-300`}
        >
          Gallery
        </button>
        <div
          className={`${
            current === 1
              ? "translate-x-[100%] visible"
              : "right-0 invisible translate-x-0"
          } bg-cyan w-10 h-1 absolute bottom-0`}
        ></div>
      </div>

      <div className="relative">
        <button
          onClick={() => setCurrent(2)}
          className={`${
            current === 2 ? "text-white" : "text-[#ffffff80]"
          } font-medium text-xl md:text-2xl lg:text-3xl xl:text-[32px] pb-6 ease transition-all duration-300`}
        >
          Loyalty Task
        </button>
        <div
          className={`${
            current === 2
              ? "visible translate-x-[150%]"
              : "left-0 invisible translate-x-0"
          } bg-cyan w-10 h-1 absolute bottom-0`}
        ></div>
      </div>
    </div>
  );
};

export default LoyaltyTab;
