"use client";

import useProductStore from "@/store/productSlice";
import { BsBagFill } from "react-icons/bs";

const HeaderCart = () => {
  const { cart, addToCart } = useProductStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
  }));

  const products = JSON.parse(localStorage.getItem("products")) || [];

  let totalPrice = products?.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="w-[25%] flex justify-end">
      <div className="flex gap-8 items-center">
        <div className="flex gap-6 items-center">
          <div className="relative">
            <BsBagFill className="text-2xl text-cartColor" />
            <span className="cart_quantity">{products?.length}</span>
          </div>

          <div>
            <h1 className="text-dark text-xs">My Cart</h1>
            <span className="text-dark font-bold md:inline-block flex items-center ">
              BDT <span>{totalPrice}</span>
            </span>
          </div>
        </div>
        {/* <div>
          <BsHeartFill className="text-2xl text-cartColor" />
        </div> */}
      </div>
    </div>
  );
};

export default HeaderCart;
