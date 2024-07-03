import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";

const page = ({ searchParams }) => {
  console.log(searchParams, "need");
  return (
    <div>
      <HeroSection />
      {/* <FeatureCategory /> */}
      <ProductCard searchParams={searchParams} />
    </div>
  );
};

export default page;
