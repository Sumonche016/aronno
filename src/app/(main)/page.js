import HeroSection from "@/components/HeroSection";
import LandScape from "@/components/LandScape";
import ProductCard from "@/components/ProductCard";
import Contact from "@/components/ui/contactUs";
import bkash from "../../assests/Images/bkash-nagad-rocket-1.png";
import Image from "next/image";
import RentalService from "@/components/ui/RentalService";
import TrustedCompnay from "@/components/TrustedCompnay";
const page = ({ searchParams }) => {
  return (
    <div>
      <HeroSection />
      <LandScape searchParams={searchParams} />
      <RentalService />
      <TrustedCompnay />
      <ProductCard searchParams={searchParams} />
      <div>
        <h1 className=" text-center mb-8  text-3xl text-primary-text font-semibold  text-[#212b36]">
          What We Accept
        </h1>
        <div className="flex justify-center">
          <Image src={bkash} alt="bkash" />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
