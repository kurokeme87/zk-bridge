"use client";

import Image from "next/image";
import NotFound from "../images/404.png";

export default function Custom404() {
  return (
    <div className="p-10 lg:p-20 bg-[#FBFBFB] w-full flex justify-center items-center flex-col">
      <Image src={NotFound} width={200} height={200} alt="404" />
      <h1>404</h1>
      <h2>Oops, page not found...</h2>
    </div>
  );
}
