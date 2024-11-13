"use client";

import Image from "next/image";
import logo from "../../images/zk-logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { developers, ecosystem, navbar } from "@/app/lib/data";
import NavMenu from "./NavMenu";
import ConnectWalletModal from "../modals/ConnectWalletModal";
import { CiMenuBurger } from "react-icons/ci";
import UserMenu from "./UserMenu";
import { ChainButton, ConnectorButton } from "./AccountButtons";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="md:pl-6 md:pr-4 md:pt-6 p-4 md:pb-0 bg-[#0F1110] border-b flex justify-between items-center font-poppins fixed top-0 right-0 left-0 z-20 border-borderLight backdrop-blur-sm">
      <div className="flex justify-start items-center gap-28 w-full font-poppins">
        <div className="md:pb-5">
          <Image
            src={logo}
            width={150}
            height={150}
            className="md:w-[150px] w-24"
            alt="zk broge logo"
          />
        </div>
        <div className="md:flex justify-start items-center gap-4 md:gap-7 lg:gap-10 xl:gap-14 hidden">
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
          <NavMenu label="Ecosystem" data={ecosystem} />
        </div>
      </div>

      <div className="md:pb-6 px-3">
        <ChainButton />
      </div>

      <div className="md:pb-6 px-3">
        <ConnectorButton />
      </div>

      <div className="md:pb-6">
        <ConnectWalletModal />
      </div>
      <UserMenu />

      <button className="md:hidden block text-white ml-3 hover:bg-cyan ease transition-all">
        <CiMenuBurger size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
