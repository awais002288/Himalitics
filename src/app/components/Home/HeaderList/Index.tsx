"use client";
import React from "react";
import { headerListData } from "../../../../../assets/constants/headerListData";
import DetailCard from "./DetailCard";

function HeaderList() {
  return (
    <div className="container mx-auto">
      <div className="px-5 grid  grid-cols-12 pt-5 gap-4">
        {headerListData?.map((item: any, index: any) => (
          <DetailCard key={index} item={item} />
        ))}
      </div>
      <h1 className="text-center font-[600] text-[24px] mx-5 leading-tight sm:leading-normal sm:text-[30px] mt-16 text-secondry">
        Himalayan Shilajit has been used for centuries as a traditional remedy
        for
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-center gap-4  lg:gap-20 mt-5">
        <div className="bg-white flex items-center justify-center w-[280px] md:w-[200px] h-[74px] text-primary text-[20px] font-[600]">
          Fatigue{" "}
        </div>
        <div className="bg-white flex items-center justify-center w-[280px] md:w-[200px] h-[74px] text-primary text-[20px] font-[600] px-10 text-center">
          Overall Good Health
        </div>
        <div className="bg-white flex items-center justify-center w-[280px] md:w-[200px] h-[74px] text-primary text-[20px] font-[600] ">
          Digestion
        </div>
      </div>
      <h1 className="text-center font-[600]  mx-5 leading-tight sm:leading-normal mt-2   text-secondry">
        Our natural shilajit is carefully extracted and purified, preserving its
        orignal trace minerals to provide support for:
      </h1>
    </div>
  );
}

export default HeaderList;
