import Image from "next/image";
import Link from "next/link";
import BuyNowButton from "./BuyNowButton";

const AllProducts = ({ res }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  w-full">
        {res.data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-card border border-card rounded-[8px]"
          >
            <Link href={`/product/${item._id}`}>
              <div className="relative md:h-[18rem]  w-full ">
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
    </div>
  );
};

export default AllProducts;
