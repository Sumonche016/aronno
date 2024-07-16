"use client";
import loading from "./Plant.gif";
import Image from "next/image";
const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="mx-auto">
        <Image width={200} height={200} src={loading} alt="loading image" />
      </div>

      {/* <div>
        <Image width={200} height={200} src={loading} alt="loading image" />
      </div> */}
    </section>
  );
};

export default Loading;
