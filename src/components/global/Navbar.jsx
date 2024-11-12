"use client";

import Image from "next/image";
import logo from "../../images/zk-logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { developers, navbar } from "@/app/lib/data";
import NavMenu from "./NavMenu";
import ZkConnectButton from "../ZkConnectButton";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="pl-6 pr-4 pt-6 pb-0 bg-[#0F1110] border-b flex justify-between items-center font-poppins fixed top-0 right-0 left-0 z-20 border-borderLight">
      <div className="flex justify-start items-center gap-28 w-full font-poppins">
        <div className="pb-5">
          <Image src={logo} width={150} height={150} alt="zk broge logo" />
        </div>
        <div className="flex justify-start items-center gap-10">
          {navbar.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`${
                pathname.includes(item.link)
                  ? "border-cyan"
                  : "border-transparent"
              } flex justify-start items-center gap-1 text-lg border-b-2 pb-6 hover:border-cyan`}
            >
              <p className="text-[#CFCFCF] hover:text-white ease transition-all">
                {item.label}
              </p>
              {item.new ? (
                <span className="bg-cyan px-1 rounded-sm text-[#022000] text-[13px] font-medium font-poppins">
                  New
                </span>
              ) : null}
            </Link>
          ))}
          <NavMenu label="Developers" data={developers} />
          <NavMenu label="Ecosystem" data={developers} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
