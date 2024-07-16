import { Baloo_Da_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const inter = Baloo_Da_2({ subsets: ["bengali"] });

const FooterNav = dynamic(() => import("../components/FooterNav.jsx"), {
  ssr: false,
});

export const metadata = {
  title: "Aroonno",
  description: "Stay Green Stay Trusted",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${inter.className} bg-[#F3F6F9]`}>
          <Toaster />
          <Header />
          <AntdRegistry>{children}</AntdRegistry>
          <FooterNav />
        </body>
      </StoreProvider>
    </html>
  );
}
