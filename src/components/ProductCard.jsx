import { getAllProducts } from "@/lib/getAllProducts";
import Image from "next/image";
import BuyNowButton from "./BuyNowButton";
import Link from "next/link";
import CategoryTabs from "./CategoryTabs";

const ProductCard = async ({ searchParams }) => {
  let limit = Number(searchParams.limit) || 20;
  let category = searchParams.category || "";

  let res = await getAllProducts(searchParams);
  const categories = [
    { name: "সকল পণ্য", value: "" },
    { name: "ফল গাছ", value: "ফল গাছ" },
    { name: "ফুল গাছ", value: "ফুল গাছ" },
    { name: "শোভাময়-গাছ", value: "শোভাময় গাছ" },
  ];
  return (
    <div className="md:w-[80%] w-[95%] mx-auto py-[5rem]">
      <div className="md:flex justify-between items-center mb-6">
        <h1 className=" text-center mb-4  text-3xl text-primary-text font-semibold  text-[#212b36]">
          আমাদের পণ্যসমূহ
        </h1>
        <CategoryTabs categories={categories} searchParams={searchParams} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
        {res.data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-card border border-card rounded-[8px]"
          >
            <Link href={`/product/${item._id}`}>
              <div className="relative md:h-[15rem] h-[12rem] w-full ">
                <Image
                  fill
                  alt={item.product_title}
                  className="p-2 rounded-sm"
                  src={item.product_images}
                />
              </div>

              <div className="text-center p-3">
                <div>
                  <div className=" text-sm sm:text-lg md:text-[1rem] ">
                    <h3 className="truncate font-medium text-[#212b36]">
                      {item.product_title}
                    </h3>
                  </div>

                  <div className=" flex justify-between items-center w-full">
                    <div className="w-full">
                      <div className="flex items-center justify-center">
                        <p className="text-sm sm:text-lg font-medium text-center">
                          &#2547; {item.product_price}{" "}
                        </p>
                        <del className="text-xs hidden sm:text-sm   font-bold ml-1">
                          &#2547;800
                        </del>
                      </div>
                      <div className="mt-2 flex  items-center w-full">
                        <BuyNowButton product={item} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {Math.round(res.totalProductLength / 20) >= limit / 20 && (
        <div className="flex justify-center items-center mt-6">
          <Link
            href={`/?category=${category}&limit=${
              limit ? limit + 20 : 40
            }&skipFrom=0`}
          >
            <button className="px-8 py-3 bg-[#059669] text-white font-medium  rounded-md shadow-sm">
              See More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
