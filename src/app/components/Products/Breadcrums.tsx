import React from "react";
import Link from "next/link";

function Breadcrums() {
  return (
    <div className="bg-[#f9fafa] w-screen p-3 flex justify-center items-center gap-2 container mx-auto">
      <div className="flex justify-start items-center gap-2 w-[70%] font-[500]">
        <Link href="/">
          <h3 className="flex gap-2 text-[14px] hover:text-[#d8bfa9] cursor-pointer">
            Home
          </h3>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-[14px] h-[14px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <h3 className="flex gap-2 text-[14px] cursor-default">
          Pure Himalayan Shilajit Resin - 30 Grams
        </h3>
      </div>
    </div>
  );
}

export default Breadcrums;
