import { ReactQueryClientProvider } from "../components/global/ReactQueryClientProvider";
import WagmiRainbowKitProvider from "../components/Providers/WagmiRainbowKitProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AppProvider } from "../components/Providers/AppProviders";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "zkBridge",
  description:
    "zkBridge uses zkSNARKs to enable a prover to efficiently convince the receiver chain that a certain state transition happened on the sender chain",
  keywords: "zk bridge, zk bridge swap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <React.StrictMode>
        <WagmiRainbowKitProvider>
          <ReactQueryClientProvider>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              theme="colored"
            />
            <AppProvider>
              <body className={`${poppins.variable}`}>{children}</body>
            </AppProvider>
          </ReactQueryClientProvider>
        </WagmiRainbowKitProvider>
      </React.StrictMode>
    </html>
  );
}
