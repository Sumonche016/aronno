export async function getAllProducts() {
  const res = await fetch(
    `https://server.torulata.com/api/v1/product/findByProductCategory?category=&limit=20&skip=0`
  );
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
