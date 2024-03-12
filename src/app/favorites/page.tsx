import React from "react";
import Faq from "../components/Faq";
import Favorites from "../components/Favorites/Index";

export default function page() {
  return (
    <div className="bg-[#e5fcf8]">
      {/* Faq Banner */}

      <div className="h-[140px] bg-[#374241]">
        <div className="w-full h-full bg-white text-white text-[14px]  bg-opacity-30 flex items-center justify-center">
          View your wishlist products
        </div>
      </div>

      <div className="flex justify-center">
        <Favorites />
      </div>
    </div>
  );
}
