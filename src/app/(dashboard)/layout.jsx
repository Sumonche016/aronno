import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex bg-whiteBackground">
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
