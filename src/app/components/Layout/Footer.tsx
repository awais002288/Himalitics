import React from "react";
import logoImg from "../../../../assets/images/logoImg.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-primary relative">
      <div className="container mx-auto">
        <div className="flex justify-center sm:px-6 text-white text-[14px] font-400">
          <div className="w-[90%] sm:w-[100%] sm:flex sm:flex-wrap">
            <div className="mt-8 hidden sm:flex sm:w-[50%] md:w-[40%] lg:w-[25%] py-2">
              <Link href="/">
                <div
                  className="h-[100px] w-[100px] md:h-[130px] md: md:w-[130px] lg:h-[150px] md: lg:w-[150px]
                 bg-white rounded-full flex items-center justify-center"
                >
                  <img
                    src={logoImg.src}
                    alt="logo"
                    className="min-h-full max-h-full"
                  />
                </div>
              </Link>
            </div>
            <div className="mt-8 sm:mt-[60px] lg:mt-[80px] w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] flex flex-col sm:items-center md:items-start space-y-2">
              <div className="hover:underline underline-offset-2">
                <Link href="/products">Products</Link>
              </div>
              <div className="hover:underline underline-offset-2">
                <Link href="/about-us">About Us</Link>
              </div>
              <div className="hover:underline underline-offset-2">
                <Link href="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="mt-8 md:sm:mt-[60px] lg:mt-[80px] w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] flex flex-col space-y-2">
              <div className="hover:underline underline-offset-2">
                <Link href="/faq">FAQs</Link>
              </div>
              <div className="hover:underline underline-offset-2">
                <Link href="/learn">Learn</Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-[80px] w-[100%] sm:w-[50%] md:w-[33%] lg:w-[25%] flex flex-col sm:items-center md:items-start text-[12px] space-y-2">
              <div className="flex gap-2 items-center sm:items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <div>
                  Sages Of The Ages Nutrition
                  <br />
                  Dallas, Texas
                </div>
              </div>
              <div className="flex gap-2 items-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <span>himalatics@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-8 w-screen py-4 flex justify-center items-center">
        <div className="tracking-[1px] text-gray-600 text-[14px]">
          Copyright © 2024{" "}
          <span className="text-primary font-[600]">Himalatics</span> all rights
          reserved.
        </div>
      </div>
    </div>
  );
}
