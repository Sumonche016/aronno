import Image from "next/image";
import logo from "../assests/Images/logo.jpg";
import Miniheader from "./Miniheader";
import HeaderCart from "./ui/HeaderCart";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <nav className="bg-white nav fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center container py-3 ">
        <div className="md:hidden">
          <RxHamburgerMenu className="text-[2rem]" />
        </div>
        <div className="">
          <Image src={logo} alt="logo" width={70} height={70} />
        </div>

        <div className=" items-center w-[60%] relative hidden md:flex">
          <input
            className="search-input  w-full h-12 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:shadow-inner"
            type="text"
            id="searchbox"
            placeholder="What are you looking for?"
            name="search"
            autoComplete="off"
          />
          <button
            className="search-button h-12 px-4 bg-[#095723] text-white rounded-r-md uppercase text-xs tracking-wide"
            type="submit"
          >
            <span>Search</span>
          </button>
        </div>

        <HeaderCart />
      </div>
      <div className=" items-center w-[95%] mb-2 md:hidden mx-auto relative flex">
        <input
          className="search-input  w-full h-12 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:shadow-inner"
          type="text"
          id="searchbox"
          placeholder="What are you looking for?"
          name="search"
          autoComplete="off"
        />
        <button
          className="search-button h-12 px-4 bg-[#095723] text-white rounded-r-md uppercase text-xs tracking-wide"
          type="submit"
        >
          <span>Search</span>
        </button>
      </div>
      <Miniheader />
    </nav>
  );
};

export default Header;
