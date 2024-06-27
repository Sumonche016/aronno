export async function getAllbanner() {
  const res = await fetch(`https://aronno.onrender.com/banner`);
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
