"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

function ZkConnectButton({ styles, title, icon }) {
  return (
    <div>
      <button
        className={`${styles} text-white text-sm ease-in transition-all border border-gray-700 flex justify-start items-center gap-4 w-max`}
      >
        <ConnectButton
          style={{ color: "white" }}
          label={title ? title : "Connect Wallet"}
          className="p-0 bg-purple"
        />
        {icon ? <icon /> : null}
      </button>
    </div>
  );
}

export default ZkConnectButton;
