import HeroSection from "@/components/HeroSection";
import LandScape from "@/components/LandScape";
import ProductCard from "@/components/ProductCard";

const page = ({ searchParams }) => {
  console.log(searchParams, "need");
  return (
    <div>
      <HeroSection />
      <LandScape />
      <ProductCard searchParams={searchParams} />
    </div>
  );
};

export default page;
