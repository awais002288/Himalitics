/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import riskWeb from "../../../../assets/images/risk-web.webp";
import riskMobile from "../../../../assets/images/risk_mobile.webp";

import "react-lazy-load-image-component/src/effects/blur.css";

function RiskFree() {
  return (
    <div className="bg-[#03443c]">
      <div className="max-w-6xl w-full px-5 mx-auto py-12 ">
        <div className="flex items-center  mb-5 ">
          <div className="w-full h-[1px] bg-white hidden sm:block"></div>

          <h1 className="text-[25px] font-[600] min-w-[259px] text-secondry w-full sm:w-auto text-center">
            Try it RISK-FREE!
          </h1>
          <div className="w-full h-[1px] bg-white hidden sm:block"></div>
        </div>

        <p className="text-white text-center text-[14px]">
          Our goal is to make you embrace your daily wellness routine with
          convenient and delightful products. If your Sages Of The Ages®
          purchase doesn't fully satisfy you, just reach out to us, and we'll
          provide you with a complete, 100% hassle-free refund!
        </p>
        <div className=" justify-center w-full hidden md:flex   mt-8">
          <LazyLoadImage
            src={riskWeb.src}
            alt="img"
            effect="blur"
            width="100%"
            className="w-full h-[300px] object-cover  "
          />
        </div>
        <div className=" flex justify-center w-full md:hidden   mt-8">
          <LazyLoadImage
            src={riskMobile.src}
            alt="img"
            effect="blur"
            width="100%"
            className="w-full    "
          />
        </div>
      </div>
    </div>
  );
}

export default RiskFree;
