import Image from "next/image";
import landScpe1 from "../assests/Images/landScape.jpg";
import landScpe2 from "../assests/Images/land2.jpg";
import ContactUsButton from "./ui/ContactUsButton";
import CategoryTabs from "./CategoryTabs";

const LandScape = ({ searchParams }) => {
  const categories = [
    { name: "ছাদ বাগান", value: "ছাদ বাগান" },
    { name: "অফিস ইন্টেরিয়র", value: "অফিস ইন্টেরিয়র" },
    { name: "রেস্টুরেন্ট ইন্টেরিয়র", value: "রেস্টুরেন্ট ইন্টেরিয়র" },
    {
      name: "রিসোর্ট ল্যান্ডস্ক্যাপ ডিজাইন",
      value: "রিসোর্ট ল্যান্ডস্ক্যাপ ডিজাইন",
    },
    { name: "ফ্যাক্টরি গ্রীন প্রজেক্ট", value: "ফ্যাক্টরি গ্রীন প্রজেক্ট" },
    { name: "বেলকনি বাগান", value: "বেলকনি বাগান" },
    { name: "হোম গ্রীন ডেকোর", value: "হোম গ্রীন ডেকোর" },
  ];
  return (
    <div className="md:w-[80%] w-[95%] mx-auto py-[5rem]">
      <div className="   mb-6">
        <h1 className=" text-center mb-4  text-3xl text-primary-text font-semibold  text-[#212b36]">
          ল্যান্ডস্কেপিং প্রজেক্ট
        </h1>
        <CategoryTabs categories={categories} searchParams={searchParams} />
      </div>

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
