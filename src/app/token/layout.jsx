import Navbar from "@/components/global/Navbar";

export const metadata = {
  title: "ZKbridge",
  description:
    "zkBridge uses zkSNARKs to enable a prover to efficiently convince the receiver chain that a certain state transition happened on the sender chain",
  keywords: "zk bridge, zk bridge swap",
};

export default function RootLayout({ children }) {
  return (
    <div className="w-full bg-primary_bg">
      <Navbar />
      {children}
    </div>
  );
}
