"use client";
import Link from "next/link";
import CategoryTabs from "./CategoryTabs";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import SuspanseLoader from "@/app/(dashboard)/banner/SuspanseLoader";
import { useGetAllProductsQuery } from "@/lib/ClientApi/ClientApi";

const AllProducts = dynamic(() => import("./AllProducts"), {
  loading: () => <h1>Loading Through Server Component...</h1>,
});

const ProductCard = ({ searchParams }) => {
  const limit = Number(searchParams?.limit) || 20;
  const category = searchParams?.category || "";

  const {
    data: res,
    isLoading,
    error,
  } = useGetAllProductsQuery({ limit, category });

  const categories = [
    { name: "সকল পণ্য", value: "" },
    { name: "ফল গাছ", value: "ফল গাছ" },
    { name: "ফুল গাছ", value: "ফুল গাছ" },
    { name: "শোভাময়-গাছ", value: "শোভাময় গাছ" },
  ];

  if (isLoading) return <SuspanseLoader />;
  if (error) return <div>Error loading products</div>;

  return (
    <div id="category" className="md:w-[80%] w-[95%] mx-auto py-[5rem]">
      <div className="md:flex justify-between items-center mb-6">
        <h1 className=" text-center mb-4  text-3xl text-primary-text font-semibold  text-[#212b36]">
          আমাদের পণ্যসমূহ
        </h1>
        <CategoryTabs categories={categories} searchParams={searchParams} />
      </div>
      <Suspense fallback={<SuspanseLoader />}>
        <AllProducts res={res} />
      </Suspense>

      {Math.round(res.totalProductLength / 20) >= limit / 20 && (
        <div className="flex justify-center items-center mt-12">
          <Link
            scroll={false}
            href={`/?category=${category}&limit=${
              limit ? limit + 20 : 40
            }&skipFrom=0`}
          >
            <button className="px-8 py-3 bg-[#059669] text-white font-medium  rounded-md shadow-sm">
              See More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
