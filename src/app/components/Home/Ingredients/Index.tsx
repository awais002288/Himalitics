"use client";
import React from "react";
import Image from "next/image";
import { ingredients } from "../../../../../assets/constants/ingredients";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Ingredients() {
  return (
    <div className=" w-full flex justify-center bg-[#e5fcf8]  min-h-screen  pb-16 ">
      <div className=" w-full max-w-6xl  ">
        <h1 className="text-center text-primary w-full text- text-[29px] font-[600] my-16">
          Ingredients you can pronounce.
        </h1>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 px-5">
          {ingredients?.map((item: any, index: any) => (
            <div
              className=" col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col items-center"
              key={index}
            >
              <LazyLoadImage
                src={item.image.src}
                effect="blur"
                alt="img"
                className="w-[200px] h-[200px]"
              />
              <h1 className="text-[20px] text-primary font-[600] mt-4">
                {item.title}
              </h1>
              <p className="text-center text-theme-text mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
