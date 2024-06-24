export async function getSingleproduct(id) {
  let response = await fetch(
    `https://server.torulata.com/api/v1/product/singleProduct/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
