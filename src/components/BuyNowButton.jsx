"use client";
import { addProductToCart } from "@/hooks/cartFunctions";
import { useAppDispatch } from "@/lib/hooks";
import { updateRefetch } from "@/lib/ProductSlice/productSlice";

const BuyNowButton = ({ product }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addProductToCart(product);
    dispatch(updateRefetch());
  };

  return (
    <>
      <div className="w-full">
        <button
          onClick={handleAddToCart}
          className="px-3  py-1.5 border border-input rounded-[5px] w-full text-xs sm:text-sm font-medium  hover:bg-primary hover:text-white duration-100 ease-in-out"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};
export default BuyNowButton;
