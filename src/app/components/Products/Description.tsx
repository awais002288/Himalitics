import Image from "next/image";
import React, { useEffect, useState } from "react";
import { productsData } from "../../../../assets/constants/productsData";

function Description(props: any) {
  const { singleProduct } = props;
  return (
    <div className="">
      {Object.keys(singleProduct)?.length !== 0 && (
        <div>
          <h1 className="text-[#348472] font-[600] text-[28px] mb-6">
            Product Description
          </h1>
          <div className="my-12 space-y-16">
            {/* first section */}
            <div className="flex justify-center">
              <div className="w-[100%] sm:w-[95%] md:w-[80%] lg:w-[70%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                <Image
                  alt="description"
                  src={
                    Object.keys(singleProduct)?.length !== 0 &&
                    singleProduct?.descriptionImages[0]
                  }
                  height={100}
                  width={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* second section */}
            <div className="flex justify-center">
              <div className="w-[100%] sm:w-[95%] md:w-[80%] lg:w-[70%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                <Image
                  alt="description"
                  src={
                    Object.keys(singleProduct)?.length !== 0 &&
                    singleProduct?.descriptionImages[1]
                  }
                  height={100}
                  width={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* third section */}
            <div className="flex flex-col sm:flex-row sm:justify-around gap-16 sm:gap-0">
              <div className="w-[100%] sm:w-[45%] h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <Image
                  alt="description"
                  src={
                    Object.keys(singleProduct)?.length !== 0 &&
                    singleProduct?.descriptionImages[2]
                  }
                  height={100}
                  width={100}
                  className="w-full h-full"
                />
              </div>
              <div className="w-[100%] sm:w-[45%] h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <Image
                  alt="description"
                  src={
                    Object.keys(singleProduct)?.length !== 0 &&
                    singleProduct?.descriptionImages[3]
                  }
                  height={100}
                  width={100}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div>
            {Object.keys(singleProduct)?.length !== 0 &&
              singleProduct.descriptionData?.map((ele: any, index: number) => (
                <div key={index} className="">
                  <div className="py-2 bg-[#348472] text-white px-4 text-[14px] font-[600]">
                    {ele.title}
                  </div>
                  <div className="py-2 bg-[#e6ceba] px-4 text-theme-text text-[14px]">
                    {ele.desc}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Description;
