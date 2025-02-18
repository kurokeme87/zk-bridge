import Image from "next/image";
import logo from "../../images/zk-logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-2 md:px-5 lg:px-10 w-full bg-black font-poppins">
      <div className="flex justify-between items-center py-7 w-full">
        <div className="">
          <Image
            src={logo}
            width={150}
            height={150}
            className="md:w-[150px] w-24"
            alt="zk broge logo"
          />
        </div>

        <p className="font-medium text-white">support@zkbridge.com</p>

        <div className="flex justify-start items-center gap-4">
          <Link href="https://x.com/PolyhedraZK" target="_blank">
            <img
              width={24}
              src="https://www.zkbridge.com/assets/twitter-b134d0c2.svg"
              alt="twitter"
            />
          </Link>

          <Link
            href="https://discord.com/invite/polyhedra-network"
            target="_blank"
          >
            <img
              width={24}
              src="https://www.zkbridge.com/assets/discord-4eacd991.svg"
              alt="twitter"
            />
          </Link>

          <Link href="https://polyhedra.medium.com/" target="_blank">
            <img
              width={24}
              src="https://www.zkbridge.com/assets/medium-2e991ffc.svg"
              alt="twitter"
            />
          </Link>

          <Link href="https://docs.zkbridge.com/" target="_blank">
            <img
              width={24}
              src="https://www.zkbridge.com/assets/gitbook-c75221dc.svg"
              alt="twitter"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center py-7 w-full border-t border-gray-700">
        <Link href="https://www.polyhedra.network/" target="_blank">
          <Image
            src={
              "https://www.zkbridge.com/assets/polyhedra-long-logo-30ffba64.svg"
            }
            width={150}
            height={150}
            className="md:w-[170px] w-24"
            alt="zk broge logo"
          />
        </Link>

        <p className="font-medium text-[#8f8f8f] text-xs md:text-sm">
          © 2025 zkBridge.com. All rights reserved
        </p>

        <div className="flex justify-start items-center gap-4 font-medium text-[#8f8f8f] text-xs md:text-sm">
          <Link href="https://polyhedra.medium.com/" target="_blank">
            Temrs of Use
          </Link>

          <Link href="https://docs.zkbridge.com/" target="_blank" className="">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
