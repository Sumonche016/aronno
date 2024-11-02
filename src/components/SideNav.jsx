import Link from "next/link";

import { RiArrowRightSLine } from "react-icons/ri";
import { FaAlignLeft } from "react-icons/fa";
export const sideNavRoutes = [
  { name: "সকল পণ্য", value: "/sokol-ponno" },
  { name: "ল্যান্ডস্কেপিং প্রজেক্ট", value: "/#landscape" },
  { name: "ফল গাছ", value: "/falgach" },
  { name: "ফুল গাছ", value: "/fulgach" },
  { name: "শোভাময়-গাছ", value: "/sovamoy" },
  { name: "গার্ডেনিং টুলস", value: "/gardening" },
  { name: "জৈব সার ও কীটনাশক", value: "/kit" },
  { name: "টব ও জিও ব্যাগ ", value: "/jiyobag" },
];

const SideNav = () => {
  return (
    <div
      className={`w-[15rem] mr-3 shrink-0 rounded-[10px] bg-white hidden md:inline-block`}
    >
      <ul className="w-full relative duration-200 ease-out text-[14px]">
        <div className="bg-primary text-white flex gap-2 px-[20px] py-[12px] items-center  rounded-md">
          <div>
            <FaAlignLeft />
          </div>
          <h1>Shop By Category</h1>
        </div>
        {sideNavRoutes.map((route, key) => (
          <Link key={key} href={route.value} className="group/link">
            <div className="flex text-[#333] justify-between items-center border-b border-[#e8e8e8] text-sm px-[20px] py-[12px] font-medium hover:bg-primary-gray duration-100 ease-out cursor-pointer">
              <li className="text-[#555]">{route.name}</li>
              {route.children && (
                <span className="text-xl text-[#909090]">
                  <RiArrowRightSLine />
                </span>
              )}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
