import SideNav from "./SideNav";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <div className="container md:mt-4 mt-2 mx-auto  pt-[10rem]">
      <div className="flex">
        <SideNav />
        <Slider />
      </div>
    </div>
  );
};

export default HeroSection;
