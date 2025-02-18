"use client";

import React from "react";
import { motion } from "framer-motion";
// import { placements } from "../data";

const Marquee = ({ delay = 0.1, direction = "left", data = [] }) => {
  return (
    <div className="w-full overflow-hidden relative">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
          delay,
        }}
      >
        {[...data, ...data].map((item, index) => (
          <img
            key={index}
            src={item}
            alt={item}
            className="rounded-full h-12 w-12 md:w-20 md:h-20 lg:h-24 lg:w-24"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
