'use client'


import { useGetAllBannerQuery } from "@/lib/ClientApi/ClientApi";
import Carousel from "./Caurosel";
import Image from "next/image";

const Slider = () => {
  const { data, error, isLoading } = useGetAllBannerQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading banners</div>;

  const bannerContent = data?.result.map((sData) => (
    <Image
      key={sData._id}
      className="min-w-full h-full"
      src={sData.url}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      alt="img"
    />
  ));

  return (
    <div className="w-full">
      <div className="max-w-full h-auto">
        {<Carousel>{bannerContent}</Carousel>}
      </div>
    </div>
  );
};

export default Slider;
