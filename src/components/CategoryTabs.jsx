import Link from "next/link";

const CategoryTabs = ({ searchParams }) => {
  const categories = [
    { name: "সকল পণ্য", value: "" },
    { name: "ফল গাছ", value: "ফল গাছ" },
    { name: "ফুল গাছ", value: "ফুল গাছ" },
    { name: "শোভাময়-গাছ", value: "শোভাময় গাছ" },
  ];

  return (
    <div className="flex items-center justify-between md:justify-end md:gap-4 gap-2">
      {categories.map((category) => (
        <Link
          scroll={false}
          key={category.value}
          href={`/?category=${category.value}&limit=${
            searchParams.limit ? searchParams.limit : 20
          }&skip=0`}
        >
          <button
            className={`rounded-lg text-[13px] md:text-[1.1rem] px-[18px] md:px-[27px] py-[8px] font-medium ${
              searchParams.category === category.value ||
              (!searchParams.category && category.value === "")
                ? "bg-[#059669] text-white"
                : "bg-white"
            }`}
          >
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryTabs;
