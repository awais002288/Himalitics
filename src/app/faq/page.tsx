import React from "react";
import Faq from "../components/Faq";

function page() {
  return (
    <div className="bg-[#e5fcf8]">
      {/* Faq Banner */}

      <div className="h-[150px] bg-[#374241]">
        <div className="w-full h-full bg-white text-white text-[22px]  bg-opacity-30 flex items-center justify-center">
          FAQ
        </div>
      </div>

      <div className="flex justify-center">
        <Faq />
      </div>
    </div>
  );
}

export default page;
