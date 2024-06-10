export const addProductToCart = (id, price) => {
  const products = localStorage.getItem("products");

  const allProdcuts = products ? JSON.parse(products) : [];
  const existingProduct = allProdcuts.find((product) => product.id === id);

  if (existingProduct) {
    const restProduct = allProdcuts.filter((product) => product.id !== id);

    const newProduct = {
      ...existingProduct,
      quantity: existingProduct.quantity + 1,
    };

    const newSetProduct = [...restProduct, newProduct];

    localStorage.setItem("products", JSON.stringify(newSetProduct));
    return;
  }
  const newProduct = {
    id: id,
    price: price,
    quantity: 1,
  };
  const newSetProduct = [...allProdcuts, newProduct];
  localStorage.setItem("products", JSON.stringify(newSetProduct));
  return;
};
