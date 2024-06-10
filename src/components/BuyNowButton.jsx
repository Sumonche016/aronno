"use client";

import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import useProductStore from "@/store/productSlice";
import { addProductToCart } from "@/hooks/addProductTocart";

const BuyNowButton = ({ product }) => {
  const { addToCart } = useProductStore((state) => ({
    addToCart: state.addToCart,
  }));

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    addToCart(product);
    addProductToCart(product._id, product.product_price);
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
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default BuyNowButton;
