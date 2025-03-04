"use client";

import Gallery from "@/components/loyalty/Gallery";
import LoyaltyTask from "@/components/loyalty/LoyaltyTask";
import LoyaltyTab from "@/components/loyalty/Tab";
import { useState } from "react";

const Page = () => {
  const [current, setCurrent] = useState(1);

  return (
    <main className="w-full font-poppins relative">
      <section className="min-h-screen h-max relative flex flex-col  py-14 md:py-20 mt-10 bg-black">
        <div className="mx-auto max-w-7xl w-full sm:pt-12 pb-20 px-3">
          <LoyaltyTab current={current} setCurrent={setCurrent} />
          <div className="w-full mt-16">{current === 1 && <Gallery />}</div>
          <div className="w-full mt-16">{current === 2 && <LoyaltyTask />}</div>
        </div>
      </section>
    </main>
  );
};

export default Page;
