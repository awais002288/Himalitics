"use client";
import React, { useState } from "react";
import HeaderAccordionCard from "./HeaderAccordionCard";
import { headerAccordionData } from "../../../../../assets/constants/headerAccordionData";

function HeaderAccordion() {
  const [index1, setIndex1] = useState<any>();

  return (
    <div className=" container mx-auto px-5 lg:flex lg:gap-7 mt-24">
      <div className=" w-[100%] lg:w-[50%] space-y-3">
        {headerAccordionData.slice(0, 3)?.map((item: any, index: any) => (
          <HeaderAccordionCard
            key={index}
            item={item}
            index1={index1}
            setIndex1={setIndex1}
          />
        ))}
      </div>
      <div className="w-[100%] mt-3 lg:mt-0 lg:w-[50%] space-y-3">
        {headerAccordionData.slice(3, 6)?.map((item: any, index: any) => (
          <HeaderAccordionCard
            key={index}
            item={item}
            index1={index1}
            setIndex1={setIndex1}
          />
        ))}
      </div>
    </div>
  );
}

export default HeaderAccordion;
