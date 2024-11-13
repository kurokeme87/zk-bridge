"use client";

import { developers } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const NavMenu = ({ label, data }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = (link) => {
    if (link) {
      router.push(`${link}`);
    }
    setOpen(false);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  useEffect(() => {
    const dropdown = dropdownRef.current;

    if (dropdown) {
      dropdown.addEventListener("mouseleave", handleClose);
    }

    return () => {
      if (dropdown) {
        dropdown.removeEventListener("mouseleave", handleClose);
      }
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onMouseEnter={handleOpen}
        onFocus={handleOpen}
        className="flex justify-start items-center gap-1.5 text-lg pb-6 text-[#CFCFCF] hover:text-white"
      >
        <p>{label}</p>
        <BsChevronDown
          size={12}
          className={`${open ? "rotate-180" : ""} ease transition-transform`}
        />
      </button>

      {/* dropdown content */}
      <div
        className={`${
          open
            ? "opacity-100 scale-100 z-20"
            : "opacity-0 scale-50 -z-50 invisible"
        } p-3.5 rounded-lg border border-borderLight ease transition-all duration-200 flex flex-col absolute top-12 -left-9 w-64 justify-center items-center bg-[#0F1110]`}
      >
        {data.map((item, index) => (
          <button
            onClick={handleClick}
            key={index}
            className="w-full hover:bg-[#1C1E1D] ease transition-all p-4 rounded-lg text-white flex justify-start items-center gap-3.5 text-base md:text-lg"
          >
            <item.icon size={24} />
            <p>{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
