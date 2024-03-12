import React from "react";
import { LearnData } from "../../../assets/constants/learnData";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="bg-[#e5fcf9] py-10">
      <div className="flex flex-wrap justify-around container mx-auto">
        {LearnData?.map((ele, index) => (
          <div key={index} className="w-[95%] sm:w-[90%] md:w-[45%]">
            <Link href={ele.link}>
              <div className="w-full h-[300px] md:[400px] lg:h-[400px] mt-8 overflow-hidden">
                <Image
                  src={ele.image}
                  alt="image"
                  height={100}
                  width={100}
                  className="w-full h-full object-cover hover:scale-110 focus duration-500 ease-in-out transition-all"
                />
              </div>
            </Link>
            <div className="p-4 text-primary">
              <Link href={ele.link}>
                <h3 className="font-[600] hover:text-secondry duration-300 ease-in-out transition-all">
                  {ele.title}
                </h3>
              </Link>
              <h3 className="text-[14px]">{ele.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
