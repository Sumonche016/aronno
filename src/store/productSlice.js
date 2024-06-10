import { create } from "zustand";

const useProductStore = create((set) => ({
  cart: [],
  totalPrice: 0,

  addToCart: (product) =>
    set((state) => {
      console.log(product);
      const { _id, product_price } = product || {};
      const existingProduct = state.cart.find((p) => p.id === _id);
      if (existingProduct) {
        const updatedCart = state.cart.map((p) =>
          p.id === _id
            ? { ...p, quantity: p.quantity + 1, price: p.price + product_price }
            : p
        );
        return {
          cart: updatedCart,
          totalPrice: state.totalPrice + product_price,
        };
      }

      return {
        cart: [...state.cart, { id: _id, quantity: 1, price: product_price }],
        totalPrice: state.totalPrice + product_price,
      };
    }),
}));

export default useProductStore;
