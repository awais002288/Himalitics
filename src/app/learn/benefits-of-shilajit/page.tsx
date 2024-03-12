/* eslint-disable react/no-unescaped-entities */
import React from "react";
import desc1 from "../../../../assets/images/desc3.jpg";
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
          <h2 className="text-[18px]">BENEFITS OF SHILAJIT</h2>
          <h3 className="text-[16px] italic">November 30, 2023</h3>
          <h4 className="text-[14px] mt-2">In Learn 0 comment</h4>
        </div>
      </div>
      {/* body */}
      <div className="bg-[#e5fcf8] py-12">
        <div className="container mx-auto text-[14px] px-6 text-primary space-y-6">
          <h3>
            Shilajit is believed to offer various health benefits, although
            scientific research is still limited and ongoing. Some reported
            potential benefits of Shilajit include:
          </h3>

          {/*  */}
          <h3 className="pt-6">
            <span className="font-[600]">1: Rich in Minerals:</span>
            &nbsp;Shilajit contains a variety of minerals and trace elements,
            such as fulvic acid, which may contribute to overall mineral intake.
          </h3>
          <h3 className="">
            <span className="font-[600]">2: Energy and Stamina:</span>
            &nbsp;Traditional use suggests that Shilajit may help boost energy
            levels and improve stamina, making it popular among those seeking
            increased physical performance.
          </h3>
          <h3 className="">
            <span className="font-[600]">3: Cognitive Function:</span>
            &nbsp;Some users claim that Shilajit can enhance cognitive function
            and mental clarity, potentially supporting brain health.
          </h3>
          <h3 className="">
            <span className="font-[600]">4: Antioxidant Properties</span>
            &nbsp;Shilajit is thought to possess antioxidant properties, which
            could help combat oxidative stress and reduce cellular damage.
          </h3>
          <h3 className="">
            <span className="font-[600]">5: Anti-Inflammatory Effects:</span>
            &nbsp;There is some evidence to suggest that Shilajit may have
            anti-inflammatory properties, potentially aiding in the management
            of inflammatory conditions.
          </h3>
          <h3 className="">
            <span className="font-[600]">6: Anti-Aging Potential:</span>
            &nbsp;Due to its antioxidant content, Shilajit is sometimes
            associated with anti-aging benefits, although more research is
            needed to substantiate these claims.
          </h3>
          {/*  */}
          <h3 className="mt-6">
            It's important to note that while Shilajit has a history of
            traditional use and there is some preliminary scientific evidence
            supporting certain benefits, more rigorous research is needed to
            fully understand its mechanisms and confirm its efficacy.
            Individuals considering Shilajit supplementation should consult with
            a healthcare professional, especially if they have underlying health
            conditions or are taking medications.
          </h3>
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
                  index === 2 && "hidden"
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
