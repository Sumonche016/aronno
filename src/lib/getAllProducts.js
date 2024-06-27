export async function getAllProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_API}/api/v1/product/findByProductCategory?category=&limit=20&skip=0`
  );
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
