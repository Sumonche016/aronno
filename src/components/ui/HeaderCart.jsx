"use client";
import { BsBagFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import { useAppSelector } from "@/lib/hooks";
import UseFindWindowSize from "@/hooks/useWindowSize";
import CartComponent from "../CartComponent";
import { useRouter } from "next/navigation";
const HeaderCart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const refetch = useAppSelector((state) => state.productSlice.refetch);
  const windowSize = UseFindWindowSize();
  const [placement] = useState("right");
  const router = useRouter();
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);

    const calculatedTotalPrice = storedProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [refetch]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-end">
      <div className="flex gap-8 items-center">
        <div className="flex gap-6 items-center">
          <div className="relative">
            <BsBagFill className="text-2xl text-cartColor" />
            <span className="cart_quantity">{products.length}</span>
          </div>

          <div className="cursor-pointer" onClick={showDrawer}>
            <h1 className="text-dark text-xs">My Cart</h1>
            <span className="text-dark font-bold md:inline-block flex items-center">
              BDT {""} <span>{totalPrice}</span>
            </span>
          </div>
        </div>

        <Drawer
          headerStyle={""}
          closeIcon={null}
          title="Shopping Cart"
          placement={placement}
          width={windowSize > 700 ? 400 : 500}
          onClose={onClose}
          open={open}
          className="relative my-drawer"
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <div className="div">{windowSize}</div>
            </Space>
          }
        >
          <CartComponent />
          <div
            onClick={() => {
              setOpen(false);
              router.push("/checkout");
            }}
            className="bg-primary cursor-pointer rounded-md text-white absolute bottom-[1rem] p-3 w-[90%] mx-auto"
          >
            <div className="flex justify-between items-center w-full">
              <p className="font-medium text-[1.1rem]">Proceed To Checkout</p>
              <div className="bg-white rounded-md py-2 px-3 text-black font-semibold text-[1.2rem]">
                ৳ {totalPrice}
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default HeaderCart;
