"use client";

import React from "react";
import Image from "next/image";
// The image import below isn't used
import image1 from "../assests/slides1.jpg";
import image2 from "../assests/slides2.jpg";
import image3 from "../assests/slides3.jpg";
import image4 from "../assests/slides4.jpg";
import image5 from "../assests/slides5.jpg";
import Image6 from "../assests/slides6.jpg";

const TrustedCompnay = () => {
  // Sample company logos - replace these with your actual company images/logos
  const companies = [
    { id: 1, name: "Company 1", logo: image1 },
    { id: 2, name: "Company 2", logo: image2 },
    { id: 3, name: "Company 3", logo: image3 },
    { id: 4, name: "Company 4", logo: image4 },
    { id: 5, name: "Company 5", logo: image5 },
    { id: 6, name: "Company 6", logo: Image6 },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Trusted By Leading Companies
        </h2>

        <div className="relative overflow-hidden">
          {/* Infinite scroll container */}
          <div
            className="flex animate-scroll"
            style={{
              width: "fit-content",
              animation: "scroll 10s linear infinite",
            }}
          >
            {/* First set of logos */}
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center mx-8 flex-shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={500}
                  height={200}
                  className="h-24 w-auto object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for infinite scroll effect */}
            {companies.map((company) => (
              <div
                key={`duplicate-${company.id}`}
                className="flex items-center justify-center mx-8 flex-shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={500}
                  height={200}
                  className="h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* We need to add the animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedCompnay;
