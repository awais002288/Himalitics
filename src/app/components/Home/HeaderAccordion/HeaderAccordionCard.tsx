"use client";
import React, { useState } from "react";

function HeaderAccordionCard({ item, index1, setIndex1 }: any) {
  return (
    <div className="   ">
      <h2 className="mb-0" id="">
        <button
          className={`group  h-[65px]  relative flex gap-1 justify-between w-full items-center   ${
            index1 === item.id ? "bg-secondry" : "bg-white"
          } px-4 sm:px-6 text-left text-base text-neutral-800 transition `}
          type="button"
          onClick={() => {
            if (index1 === item.id) {
              setIndex1();
              return;
            }
            setIndex1(item.id);
          }}
        >
          <p className="text-primary text-[14px] sm:text-[17px] font-[600]  ">
            {item?.title}
          </p>

          <div className="flex items-center justify-center bg-primary h-[45px] w-[45px] rounded-full cursor-pointer">
            {!(index1 === item.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="white"
                className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                style={{ transitionTimingFunction: "ease-in-out" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="white"
                className="w-6 h-6 transition-transform duration-500 transform rotate-180"
                style={{ transitionTimingFunction: "ease-in-out" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            )}
          </div>
        </button>
      </h2>
      <div
        className={`  border   transition-all  duration-700  bg-white ${
          index1 === item.id
            ? "h-auto  opacity-1 "
            : " h-0 opacity-0 border-0   overflow-hidden"
        } `}
      >
        <div className="px-5 py-5 pb-10 text-black text-[16px]">
          <p>{item?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderAccordionCard;
