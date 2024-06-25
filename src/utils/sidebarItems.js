import { BsBarChartSteps, BsPeopleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
// import { MdDashboard } from "react-icons/Md";
import { MdDashboardCustomize } from "react-icons/md";
export const sideBarItems = [
  {
    to: "/",
    icon: <MdDashboardCustomize className="text-[20px]  " />,
    tooltip: "Dashboard",
    posthogEvent: "Enter Dashboard Page",
    buttonName: "Dashboard in Sidebar",
  },
  {
    to: "/sequence",
    icon: <BsBarChartSteps className=" text-[20px]" />,
    tooltip: "Sequence",
    posthogEvent: "Enter Sequence Page",
    buttonName: "Sequence in Sidebar",
  },
  {
    to: "/prospects",
    icon: <BsPeopleFill className=" text-[20px]" />,
    tooltip: "Prospects",
    posthogEvent: "Enter Prospect Page",
    buttonName: "Prospect in Sidebar",
  },
  {
    to: "/template",
    icon: <BsBarChartSteps className=" text-[20px]" />,
    tooltip: "Template",
  },
  {
    to: "/people-database",
    icon: <BsBarChartSteps className=" text-[20px]" />,
    tooltip: "People Database",
  },
  {
    to: "/setting",
    icon: <FiSettings className=" text-[20px]" />,
    tooltip: "Settings",
  },
];
