import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const CartComponent = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const refetch = useAppSelector((state) => state.productSlice.refetch);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);

    const calculatedTotalPrice = storedProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [refetch]);

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
            <p className="text-sm font-medium">Unit Price: {item.price}</p>
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
  );
};

export default CartComponent;
