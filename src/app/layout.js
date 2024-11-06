import { Baloo_Da_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import FooterNav from "@/components/FooterNav";
const inter = Baloo_Da_2({ subsets: ["bengali"] });

export const metadata = {
  title: "Oroonno",
  description: "Stay Green Stay Trusted",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Oroonno</title>
        <meta property="og:title" content="Oroonno" key="title" />
      </Head>
      <StoreProvider>
        <GoogleTagManager gtmId="GTM-K6DBNQ7R" />
        <body className={`${inter.className} bg-[#F3F6F9]`}>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K6DBNQ7R"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}

          <Toaster />
          <Header />
          <NextTopLoader
            color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))"
            height={5}
          />
          <AntdRegistry>{children}</AntdRegistry>
          <FooterNav />
        </body>
      </StoreProvider>
    </html>
  );
}
