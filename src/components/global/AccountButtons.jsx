import Image from "next/image";
import { useAccount } from "wagmi";
import { shortenAddressSmall } from "../utils";
import { tokens } from "@/app/lib/tokens";
import { GoDotFill } from "react-icons/go";

export const ConnectorButton = () => {
  const { address, connector, chain, isConnected } = useAccount();

  if (!isConnected) return null;
  return (
    <div className="rounded-3xl border border-borderGrayLight flex justify-between relative gap-2 items-center px-3 py-2 text-white font-poppins">
      <GoDotFill className=" text-cyan" size={13} />
      {connector?.icon ? (
        <Image
          src={connector?.icon}
          width={15}
          height={15}
          alt={connector?.name}
        />
      ) : null}
      <p className="font-medium">{shortenAddressSmall(address)}</p>
    </div>
  );
};

export const ChainButton = () => {
  const { address, chain, isConnected, chainId } = useAccount();

  if (!isConnected) return null;
  return (
    <div className="rounded-3xl border border-borderGrayLight font-poppins flex justify-between relative gap-2 items-center px-3 py-2 text-white min-w-max">
      {chainId ? (
        <Image
          src={
            tokens.find((item) => item.chainId === chainId)?.metadata.logoURI
          }
          width={20}
          height={20}
          alt={chain?.name}
        />
      ) : null}
      <p className="font-medium text-base">{chain?.name}</p>
    </div>
  );
};
