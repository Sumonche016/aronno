export async function getProductsById(data) {
  let response = await fetch(
    `https://server.torulata.com/api/v1/product/findManyById/${data}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
