"use client";
import { BsBagFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import { useAppSelector } from "@/lib/hooks";
import Drawer from "react-modern-drawer";
import { FaShoppingBag } from "react-icons/fa";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import CartComponent from "../CartComponent";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import "simplebar-react/dist/simplebar.min.css";
const HeaderCart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const refetch = useAppSelector((state) => state.productSlice.refetch);

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);

    const calculatedTotalPrice = storedProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [refetch]);

  return (
    <div className="flex justify-end">
      <div className="flex gap-8 items-center">
        <div className="flex gap-6 items-center">
          <div className="relative">
            <BsBagFill className="text-2xl text-cartColor" />
            <span className="cart_quantity">{products.length}</span>
          </div>

          <div className="cursor-pointer" onClick={toggleDrawer}>
            <h1 className="text-dark text-xs">My Cart</h1>
            <span className="text-dark font-bold md:inline-block flex items-center">
              BDT {""} <span>{totalPrice}</span>
            </span>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="relative my-drawer"
        >
          <div className="drawer-header bg-[#F3F6F9]  flex justify-between items-center mb-6 p-6">
            <div className="flex  items-center gap-4">
              <FaShoppingBag />
              <h1 className="font-semibold">Shopping Cart</h1>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleDrawer}
            >
              <RxCross2 />
              <h1>Close</h1>
            </div>
          </div>

          <CartComponent />

          <div className="flex justify-center ">
            <div
              onClick={() => {
                router.push("/checkout");
                setIsOpen(false);
              }}
              className="md:bg-primary bg-[#059669]   cursor-pointer rounded-md text-white absolute bottom-[5rem] md:bottom-[1rem] p-3 w-[90%] mx-auto"
            >
              <div className="flex justify-between items-center w-full">
                <p className="font-medium text-[1.1rem]">Proceed To Checkout</p>
                <div className="bg-white rounded-md py-2 px-3 text-black font-semibold text-[1.2rem]">
                  ৳ {totalPrice}
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default HeaderCart;
