import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
const FooterNav = () => {
  return (
    <div className="bg-primary text-white md:hidden  py-[10px]  fixed bottom-0 left w-full z-[999] shadow-deep  ">
      <div className="w-[95%] mx-auto">
        <ul className="flex justify-between items-center">
          <li className="flex flex-col  justify-center items-center cursor-pointer">
            <FaHome />
            <h1 className="mt-2">Home</h1>
          </li>

          <>
            <li className="flex flex-col justify-center items-center">
              <BiSolidCategory />
              <h1 className="mt-2">Category</h1>
            </li>
            <li className="flex flex-col justify-center items-center cursor-pointer">
              <FaBagShopping />
              <h1 className="mt-2">Cart</h1>
            </li>
            <li className="flex flex-col justify-center items-center cursor-pointer">
              <FaPhoneSquareAlt />
              <h1 className="mt-2">Call now</h1>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default FooterNav;
