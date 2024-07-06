import Image from "next/image";
import landScpe1 from "../assests/Images/landScape.jpg";
import landScpe2 from "../assests/Images/land2.jpg";
import ContactUsButton from "./ui/ContactUsButton";

const LandScape = () => {
  return (
    <div className="md:w-[80%] w-[95%] mx-auto py-[5rem]">
      <h1 className=" text-center mb-8  text-3xl text-primary-text font-semibold  text-[#212b36]">
        ল্যান্ডস্কেপিং প্রজেক্ট
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1  gap-6">
        <div className="bg-white shadow-md p-3 rounded-[5px]">
          <Image
            className="rounded-md"
            sizes="50vw"
            src={landScpe1}
            alt="land"
          />
          <ContactUsButton />
        </div>

        <div className="bg-white shadow-md p-3 rounded-[5px]">
          <Image
            className="rounded-md"
            sizes="50vw"
            src={landScpe2}
            alt="land2"
          />
          <ContactUsButton />
        </div>
      </div>
    </div>
  );
};

export default LandScape;
