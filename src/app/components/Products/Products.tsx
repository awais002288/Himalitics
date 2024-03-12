"use client";
import React, { useEffect, useState } from "react";
import Breadcrums from "./Breadcrums";
import ProductInformation from "./ProductInformation";
import Description from "./Description";
import Ingredients from "./Ingredients";
import Reviews from "./Reviews";
import { productsData } from "../../../../assets/constants/productsData";

function Products() {
  const [tabValue, setTabValue] = useState("Description");
  const [isRender, setIsRender] = useState(false);
  const lookup: any = {
    Description: Description,
    Ingredients: Ingredients,
    Reviews: Reviews,
  };

  const Component = lookup[tabValue];
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const data: any = productsData.find((ele) => ele.id === 1);
    setSingleProduct(data);
  }, [productsData]);
  useEffect(() => {
    setIsRender(true);
  }, []);

  return (
    <>
      {!isRender ? (
        <div className="py-12 container mx-auto max-w-6xl flex  flex-col min-h-screen md:flex-row md:min-h-[470px] gap-8">
          <div className="md:w-[45%] animate-pulse h-[300px] md:h-[470px] bg-[#dad5d5] "></div>
          <div className="md:w-[75%] animate-pulse flex flex-col space-y-6 justify-center ">
            <div className="bg-[#dad5d5] h-[20px] rounded-full w-full md:w-[500px]"></div>
            <div className="bg-[#dad5d5] h-[20px] rounded-full md:w-[400px]"></div>
            <div className="bg-[#dad5d5] h-[10px] rounded-full w-[250px]"></div>
            <div className="bg-[#dad5d5] h-[10px] rounded-full w-[250px]"></div>
            <div className="bg-[#dad5d5] h-[10px] rounded-full w-[250px]"></div>
            <div className="bg-[#dad5d5] h-[20px] rounded-full w-[250px]"></div>
            <div className="bg-[#dad5d5] h-[20px] rounded-full w-[250px]"></div>
          </div>
        </div>
      ) : (
        <div className="">
          <Breadcrums />
          <div className="w-screen h-auto bg-[#e5fcf8]">
            <div className="py-12 container mx-auto">
              <ProductInformation singleProduct={singleProduct} />
            </div>
            <div className="pb-12 flex justify-center items-center gap-[2px] sm:gap-4">
              <div
                className={`text-[14px] sm:text-[16px] px-4 sm:px-10 font-[600] hover:text-primary py-1 rounded-3xl cursor-pointer
            ${
              tabValue === "Description"
                ? "border border-primary text-primary"
                : "border border-transparent text-gray-400"
            }
            `}
                onClick={() => setTabValue("Description")}
              >
                Description
              </div>
              <div
                className={`text-[14px] sm:text-[16px] px-4 sm:px-10 font-[600] hover:text-primary py-1 rounded-3xl cursor-pointer
            ${
              tabValue === "Ingredients"
                ? "border border-primary text-primary"
                : "border border-transparent text-gray-400"
            }
            `}
                onClick={() => setTabValue("Ingredients")}
              >
                Ingredients
              </div>
              <div
                className={`text-[14px] sm:text-[16px] px-4 sm:px-10 font-[600] hover:text-primary py-1 rounded-3xl cursor-pointer
            ${
              tabValue === "Reviews"
                ? "border border-primary text-primary"
                : "border border-transparent text-gray-400"
            }
            `}
                onClick={() => setTabValue("Reviews")}
              >
                Reviews
              </div>
            </div>
            <div className="pb-12 container mx-auto px-4 sm:px-0">
              <Component singleProduct={singleProduct} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
