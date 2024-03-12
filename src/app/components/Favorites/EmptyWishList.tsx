"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { productsData } from "../../../../assets/constants/productsData";

function EmptyWishList() {
  const [productData, setProductData] = useState<any>({
    id: "",
    title: "",
    description: "",
    price: 0,
    quantity: 1,
    image: "",
  });
  const [wishlist, setWishlist] = useState<any>([]);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const cartData: any = localStorage.getItem("wishlist");
    const data: any = {
      id: productData[0]?.id,
    };

    let finalData = !cartData ? [] : JSON.parse(cartData);
    if (!cartData) {
      finalData.push(data);
    } else {
      const existData = finalData.find((ele: any) => {
        return ele.id === data.id;
      });
      if (existData) {
        const neww = finalData.filter((val: any) => {
          return val.id !== existData.id;
        });
        finalData = neww;
      } else if (!existData) {
        finalData.push(data);
      }
    }

    localStorage.setItem("wishlist", JSON.stringify(finalData));
    setWishlist(finalData);
  }, []);

  const wishListHandler = () => {
    const data: any = [];

    localStorage.setItem("wishlist", JSON.stringify(data));
    setWishlist(data);
  };

  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center">
      {productsData?.map((ele: any, index: any) => (
        <div className="relative" key={index}>
          {wishlist?.length > 0 ? (
            <div className="bg-transarent rounded-sm p-4 gap-4  w-[340px] md:w-[500px] lg:w-[700px] flex items-center">
              <div className="h-full w-[45%] relativ">
                {message && (
                  <div
                    className={` ${
                      !message && "hidden"
                    } p-2 bg-primary text-white text-[10px] absolute bottom-[105%] right-0`}
                  >
                    Click to remove from wishlist
                  </div>
                )}
                <div
                  className="absolute z-50 top-0 right-0 rounded-full flex
                justify-center items-center"
                  onClick={wishListHandler}
                  onMouseEnter={() => setMessage(true)}
                  onMouseLeave={() => setMessage(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 p-[3px] cursor-pointer text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
                <div className="h-full w-full relative group ">
                  <div className="h-full w-full bg-opacity-30 z-50 absolute hidden top-0 right-0 group-hover:flex items-center justify-center bg-white ">
                    <Link href="/products">
                      <button className="rounded-full h-[40px] hover:text-secondry hover:duration-500  hover:scale-110   w-[120px]   text-white bg-primary">
                        Quick View
                      </button>
                    </Link>
                  </div>
                  <div className="w-full h-[150px]">
                    <LazyLoadImage
                      src={productsData[0].image}
                      alt="img"
                      effect="blur"
                      height={"100%"}
                      width={"100%"}
                      className=" h-full object-cover"
                    ></LazyLoadImage>
                  </div>
                </div>
              </div>
              <div className="h-full w-[55%] space-y-3  m-auto flex flex-col justify-center">
                <p className="text-primary text-[14px] font-[300]">
                  Sages Of The Ages® Pure Himalayan Shilajit Resin - 30 Grams
                  {ele.title1} {ele.title2}
                </p>
                <h3 className="text-secondry font-[500]">
                  ${ele.oldPrice} ${ele.price}
                </h3>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[90px] h-[90px] stroke-theme-text"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <h1 className="text-primary font-[600] text-[26px] sm:text-[30px] leading-none my-6">
                WISHLIST IS EMPTY.
              </h1>
              <p className="text-theme-text text-center">
                You don't have any products in the wishlist yet.
              </p>
              <p className="text-theme-text text-center">
                You will find a lot of interesting products on our "Shop" page.
              </p>
            </div>
          )}
        </div>
      ))}

      <Link
        href="/products"
        className="h-[40px] flex items-center justify-center w-[180px] rounded-full bg-secondry hover:bg-[#bcb5a9] text-white text-[14px] font-[600] mt-6"
      >
        RETURN TO SHOP
      </Link>
    </div>
  );
}

export default EmptyWishList;
