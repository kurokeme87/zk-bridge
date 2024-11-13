"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import user_icon from "../../images/user-3759fd97.png";
// import { toast } from "react-toastify";
import { IoExitOutline } from "react-icons/io5";
import { usr_menu } from "@/app/lib/data";
import { useAccount, useDisconnect } from "wagmi";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const { isConnected } = useAccount(false);
  const { disconnectAsync } = useDisconnect();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDisconnect = async () => {
    await disconnectAsync().then(() => {
      setOpen(false);
    });
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

  if (!isConnected) return;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onMouseEnter={handleOpen}
        onFocus={handleOpen}
        className="flex justify-start items-center gap-1.5 text-lg pb-6 text-[#CFCFCF] hover:text-white"
      >
        <Image
          src={user_icon}
          alt="user"
          width={34}
          height={34}
          className="rounded-full"
        />
      </button>

      {/* dropdown content */}
      <div
        className={`${
          open
            ? "opacity-100 scale-100 z-20"
            : "opacity-0 scale-50 -z-50 invisible"
        } rounded-xl border border-borderLight ease transition-all duration-200 flex flex-col absolute top-12 right-0 w-64 justify-center items-center bg-[#0F1110]`}
      >
        <div className="p-3.5 mr-auto border-b border-borderLight w-full">
          <Image
            src={user_icon}
            alt="user"
            width={54}
            height={54}
            className="rounded-full"
          />
        </div>

        <div className="px-4 w-full">
          {usr_menu.map((item, index) => (
            <button
              onClick={() => handleClick(item.link)}
              key={index}
              className="w-full font-semibold border-b border-borderLight ease transition-all p-4 hover:text-gray-400 text-gray-300 flex justify-start items-center gap-3.5 text-base md:text-lg"
            >
              <item.icon size={24} />
              <p>{item.label}</p>
            </button>
          ))}
          <button
            onClick={handleDisconnect}
            className="w-full ease transition-all px-4 py-6 text-gray-300 hover:text-gray-400 flex justify-start items-center gap-3.5 text-base md:text-lg font-semibold"
          >
            <IoExitOutline size={24} />
            <p>Log out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
