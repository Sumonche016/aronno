import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import FooterNav from "@/components/FooterNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aronno",
  description: "Stay Green Stay Trusted",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F3F6F9]`}>
        <Header />

        <AntdRegistry>{children}</AntdRegistry>
        <FooterNav />
      </body>
    </html>
  );
}
