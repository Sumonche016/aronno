import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { Baloo_Da_2 } from "next/font/google";
import { Toaster } from "react-hot-toast";
const inter = Baloo_Da_2({ subsets: ["bengali"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.className} bg-[#F3F6F9]`}>
        <div className="flex bg-whiteBackground">
          <Toaster />
          <Sidebar />
          <div
            className="w-full  ml-[90px]"
            style={{ minWidth: "calc(100vw - 90px)" }}
          >
            <Header />
            <div className="p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
