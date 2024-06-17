"use client";
import { BsBagFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useAppSelector } from "@/lib/hooks";
import UseFindWindowSize from "@/hooks/useWindowSize";

const HeaderCart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const refetch = useAppSelector((state) => state.productSlice.refetch);
  const windowSize = UseFindWindowSize();
  const [placement, setPlacement] = useState("right");

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

  const deleteCartItem = (id) => {
    const filterProduct = products.filter((product) => product.id !== id);
    setProducts(filterProduct);
    localStorage.setItem("products", JSON.stringify(filterProduct));
    updateTotalPrice(filterProduct);
  };

  const handleIncrementQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity + 1,
            totalPrice: (product.quantity + 1) * product.price,
          }
        : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    updateTotalPrice(updatedProducts);
  };

  const handleDecrementQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? {
            ...product,
            quantity: product.quantity - 1,
            totalPrice: (product.quantity - 1) * product.price,
          }
        : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    updateTotalPrice(updatedProducts);
  };

  const updateTotalPrice = (products) => {
    const newTotalPrice = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
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
          width={windowSize > 700 ? 300 : 500}
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
          <div className="space-y-6">
            {products?.map((item) => (
              <div key={item?.id} className="flex items-center justify-between">
                <div>
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="basis-[50%]">
                  <h1>{item?.name}</h1>
                  <p className="text-sm font-medium">
                    Unit Price: {item.price}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 mt-4">
                      <div
                        onClick={() => handleIncrementQuantity(item.id)}
                        className="bg-[#F5F5F5] p-2 rounded-md cursor-pointer"
                      >
                        <AiOutlinePlus />
                      </div>

                      <div className="font-semibold">{item.quantity}</div>
                      <div
                        onClick={() => handleDecrementQuantity(item.id)}
                        className="bg-[#F5F5F5] p-2 rounded-md cursor-pointer"
                      >
                        <AiOutlineMinus />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-semibold">{item.totalPrice}</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    onClick={() => deleteCartItem(item.id)}
                    className="bg-[#e3e2e2] p-2 rounded-md cursor-pointer"
                  >
                    <MdDelete className="text-xl text-red-500 " />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-md text-white absolute bottom-[1rem] p-3 w-[90%] mx-auto">
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
