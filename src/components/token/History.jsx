import Image from "next/image";
import no_data from "../../images/no-data-a0b706c6.svg";
import ConnectWalletModal from "../modals/ConnectWalletModal";
import { useAccount } from "wagmi";

const History = () => {
  const { isConnected } = useAccount();
  return (
    <div className="w-full flex justify-center items-center flex-col py-16">
      <Image src={no_data} width={220} height={220} alt="no data" />
      {isConnected ? null : (
        <div className="mt-7">
          <ConnectWalletModal />
        </div>
      )}
    </div>
  );
};

export default History;
