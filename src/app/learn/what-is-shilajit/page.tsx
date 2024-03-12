/* eslint-disable react/no-unescaped-entities */
import React from "react";
import desc1 from "../../../../assets/images/desc4.jpg";
import Image from "next/image";
import { LearnData } from "../../../../assets/constants/learnData";
import Link from "next/link";

function page() {
  return (
    <div className="">
      <div className="w-[screen] h-[180px] relative">
        <Image
          src={desc1}
          alt="image"
          height={100}
          width={100}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-[600]">
          <h2 className="text-[18px]">WHAT IS SHILAJIT?</h2>
          <h3 className="text-[16px] italic">November 30, 2023</h3>
          <h4 className="text-[14px] mt-2">In Learn 0 comment</h4>
        </div>
      </div>
      {/* body */}
      <div className="bg-[#e5fcf8] py-12">
        <div className="container mx-auto text-[14px] px-6 text-primary space-y-6">
          <h3>
            Himalayan Shilajit is a sticky, tar-like substance that is found in
            the rocks of the Himalayas, Altai, Caucasus, and other mountain
            ranges. It is formed over centuries by the decomposition of plant
            and microbial matter. The word "Shilajit" is Sanskrit, meaning
            "conqueror of mountains" or "destroyer of weakness."
          </h3>
          <h3>
            This resinous substance is rich in minerals, fluvic acid, and other
            organic compounds. It has been used in traditional Ayurvedic
            medicine for centuries and is believed to have various health
            benefits. Some of the reported benefits include increased energy,
            improved stamina, and enhanced cognitive function.
          </h3>
          <h3>
            Shilajit is commonly consumed in a diluted form, often mixed with
            water or milk. It's important to note that while some traditional
            use and anecdotal evidence is supporting its potential health
            benefits, scientific research on Shilajit is still limited, and more
            studies are needed to fully understand its efficacy and safety.
          </h3>
          If you are considering using Himalayan Shilajit or any other
          supplement, it's advisable to consult with a healthcare professional
          to ensure it's safe and suitable for your individual health needs.
        </div>
        {/*  */}
        <div className="container mx-auto pl-4 my-12">
          <h1 className="text-[26px] font-[600] text-center">
            Related Articles
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-around">
            {LearnData?.map((ele: any, index: number) => (
              <div
                className={`w-[85%] sm:w-[47%] md:w-[30%] mt-6 ${
                  index === 3 && "hidden"
                }`}
                key={index}
              >
                <Link href={ele.link}>
                  <div className="w-full h-[200px] overflow-hidden">
                    <Image
                      src={ele.image}
                      alt="image"
                      height={100}
                      width={100}
                      className="w-full h-full hover:scale-110 duration-300 ease-in-out transition-all"
                    />
                  </div>
                </Link>
                <div className="p-2 space-y-4 text-[14px]">
                  <Link href={ele.link}>
                    <h3 className="font-[600]">{ele.title}</h3>
                  </Link>
                  <h3 className="italic">
                    {ele.desc.split(" ").splice(3, 3).join(" ")}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
