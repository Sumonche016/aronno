import { getAllProducts } from "@/lib/getAllProducts";
import AllFalGach from "../falgach/AllFalGach";

const page = async () => {
  let payload = {
    limit: "50",
    category: "টব ও জিও ব্যাগ",
  };
  let products = await getAllProducts(payload);

  return (
    <div className="md:w-[80%] w-[95%] mx-auto py-[10rem]">
      <h1 className=" text-center my-6 text-3xl text-primary-text font-semibold  text-[#212b36]">
        সর্বাধিক বিক্রিত টব ও জিও ব্যাগ
      </h1>

      <AllFalGach res={products} />
    </div>
  );
};

export default page;
