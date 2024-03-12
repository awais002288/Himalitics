/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import logoImg from "../../../../assets/images/logoImg.jpeg";
import check from "../../../../assets/images/check.jpg";
import { navData } from "../../../../assets/constants/navData";
import Link from "next/link";
import { FaSearch, FaHeart } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CartMenu from "../Products/CartMenu";

export default function Header() {
  let favorites;
  const [cartCount, setCartCount] = useState(0);
  const [cartData, setCartData] = useState([]);
  try {
    favorites = JSON.parse(localStorage.getItem("wishlist")!);
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    const cart: any = localStorage.getItem("cart");
    const data = cart ? JSON.parse(cart) : [];

    const value = data?.map((ele: any, index: number) => {
      return ele.quantity;
    });
    const sum = value.reduce(
      (accumulator: any, currentValue: any) => accumulator + currentValue,
      0
    );

    setCartCount(sum);
  }, []);

  useEffect(() => {
    const cart: any = localStorage.getItem("cart");
    const data = cart ? JSON.parse(cart) : [];

    setCartData(data);
  }, []);
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full relative h-full">
      <CartMenu open={open} setOpen={setOpen} />
      {/* Top Banner  */}
      {/* Header */}
      <div className="bg-[white] relative ">
        {/* Menu  */}
        <div
          className="flex justify-between items-center h-[74px] px-5 py-1 overflow-hidden
         "
        >
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          {/* Logo Image */}{" "}
          <div className="h-[70px] w-20 flex items-center justify-center hover:cursor-pointer">
            {/* <a href="/home"> */}
            <Link href="/" className="">
              <img src={logoImg.src} alt="logo" />
            </Link>
            {/* </a> */}
          </div>
          {/* Navigation Bar */}
          <div className=" hidden lg:flex flex-wrap  ">
            {navData?.map((item: any, index: any) => (
              <div
                key={index}
                className="px-[15px] text-[14px] py-4 font-[400] text-primary "
                onMouseLeave={() => {
                  if (item.title === "Products") {
                    setShowProduct(false);
                  }
                  return;
                }}
              >
                <Link
                  href={item?.link}
                  className=" hover:text-secondry"
                  onMouseEnter={() => {
                    if (item.title === "Products") {
                      setShowProduct(true);
                    }
                    return;
                  }}
                >
                  {" "}
                  {item?.title}{" "}
                </Link>
              </div>
            ))}
          </div>
          {/* Icons */}
          <div className="flex gap-3  ">
            {/* Search Icon */}

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              className="w-[26px] h-[26px] stroke-primary hover:stroke-secondry hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg> */}

            {/* Heart Icon */}

            <Link href="/favorites" className="relative hidden lg:block ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                className="w-[26px] h-[26px] stroke-primary hover:stroke-secondry hover:cursor-pointer "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <div className="absolute -top-1 -right-1 rounded-full bg-primary leading-none px-1 py-1 text-[9px] min-w-[16px] flex justify-center  items-center text-white">
                {favorites?.length}
              </div>
            </Link>

            {/* Cart Icon */}

            <div className="relative" onClick={() => setOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                className="w-[26px] h-[26px] stroke-primary hover:stroke-secondry hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="absolute -top-1 -right-1 rounded-full bg-primary leading-none px-1 py-1 text-[9px] min-w-[16px] flex justify-center  items-center text-white">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            showProduct ? "h-[300px]" : "h-0 overflow-hidden"
          } flex justify-center   transition-all ease-in-out  w-full absolute -mt-3  `}
        >
          <div
            className="bg-[white] rounded-sm p-4 gap-4 shadow-custom max-h-[250px] w-[500px] flex items-center"
            onMouseLeave={() => {
              setShowProduct(false);
            }}
            onMouseEnter={() => {
              setShowProduct(true);
            }}
          >
            <div className="h-full w-[45%] relative group ">
              <div className="h-full w-full bg-opacity-30 z-50 absolute hidden top-0 right-0 group-hover:flex items-center justify-center bg-white ">
                <Link href="/products">
                  <button className="rounded-full h-[40px]  hover:text-secondry hover:duration-500  hover:scale-110   w-[120px]   text-white bg-primary">
                    {" "}
                    Quick View
                  </button>
                </Link>
              </div>
              <LazyLoadImage
                src={check.src}
                alt="img"
                effect="blur"
                height={"100%"}
                width={"100%"}
                className=" h-full object-cover"
              ></LazyLoadImage>
            </div>
            <div className="h-full w-[55%]  m-auto flex flex-col justify-center">
              <Link href="/products">
                <p className="text-primary font-[600] hover:text-secondry cursor-pointer">
                  Sages Of The Ages® Pure Himalayan Shilajit Resin - 30 Grams
                </p>
              </Link>
              <h3 className="text-secondry font-[500]">$69.99 $49.97</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
