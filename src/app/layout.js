import { Baloo_Da_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import FooterNav from "@/components/FooterNav";
import StoreProvider from "./StoreProvider";

const inter = Baloo_Da_2({});

export const metadata = {
  title: "Aronno",
  description: "Stay Green Stay Trusted",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${inter.className} bg-[#F3F6F9]`}>
          <Header />
          <AntdRegistry>{children}</AntdRegistry>
          <FooterNav />
        </body>
      </StoreProvider>
    </html>
  );
}
