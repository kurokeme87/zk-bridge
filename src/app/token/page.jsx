"use client";

import History from "@/components/token/History";
import Transfer from "@/components/token/Transfer";
import { useState } from "react";

const Page = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-primary_bg w-full p-5 flex flex-col justify-start items-center h-full font-poppins py-20 md:py-36 overflow-hidden">
      <section className="max-w-[640px] mx-auto w-full h-full">
        <div className="border border-borderLight rounded-2xl bg-darkLight w-max mx-auto p-2 flex justify-start items-center">
          <button
            onClick={() => setActive(1)}
            className={`${
              active === 1
                ? "border-cyan bg-cyanLight text-cyan2"
                : "border-transparent text-white"
            } md:w-40 w-28 py-3 rounded-xl border font-semibold text-base md:text-lg`}
          >
            Transfer
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${
              active === 2
                ? "border-cyan bg-cyanLight text-cyan2"
                : "border-transparent text-white"
            } md:w-40 w-28 py-3 rounded-xl border font-semibold text-base md:text-lg`}
          >
            History
          </button>
        </div>

        {/* Main content section */}
        <div className="mt-10 w-full rounded-2xl border border-borderLight bg-darkLight">
          {active === 1 ? <Transfer /> : null}
          {active === 2 ? <History /> : null}
        </div>
      </section>
    </div>
  );
};

export default Page;
