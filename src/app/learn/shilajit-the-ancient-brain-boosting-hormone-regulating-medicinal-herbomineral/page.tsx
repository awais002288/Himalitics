import React from "react";
// import desc1 from "../../assets/images/desc1.jpg";
import desc1 from "../../../../assets/images/desc2.jpeg";
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
          <h2 className="text-[18px]">
            SHILAJIT: THE ANCIENT BRAIN-BOOSTING, HORMONE-REGULATING MEDICINAL
            “HERBOMINERAL”
          </h2>
          <h3 className="text-[16px] italic">December 6, 2023</h3>
          <h4 className="text-[14px] mt-2">In Learn 0 comment</h4>
        </div>
      </div>
      {/* body */}
      <div className="bg-[#e5fcf8] py-12">
        <div className="container mx-auto text-[14px] px-6 text-primary space-y-6">
          {/* image */}
          <div className="flex justify-center items-center">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] h-[250px] sm:h-[300px] md:h-[350px]">
              <Image
                src={desc1}
                alt="image"
                height={100}
                width={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3>
            Considering a new supplement? Shilajit, a potent herbomineral from
            the Himalayas, packs a punch of health benefits. Ayurvedic medicine,
            dating back 5,000 years, touts its equilibrium-keeping prowess. This
            ancient remedy boasts high fulvic acid content, supporting gut
            health and radiant skin. Sourced at 18,000ft, it ensures potency.
          </h3>
          <h3>
            What is Shilajit? Also known as mineral pitch, it&apos;s a tar-like
            biomass found in the Himalayas, praised in ancient texts 3,000 years
            ago. Shilajit, a staple in traditional medicine, is recognized by
            various names globally.
          </h3>
          <h3>
            Nutrition Facts: This unique substance contains fulvic acid, humic
            acids, dibenzo alpha pyrones, and around 85 different vitamins and
            minerals. A mere half-teaspoon serving delivers essential nutrients
            like iron, selenium, and zinc.
          </h3>
          {/* top benifits section */}
          {/* first list */}
          <h1 className="text-[16px] font-[600]">Benefits:</h1>
          <ul className="space-y-2 list-decimal ml-3">
            <li>
              Energize and Revitalize: Boosts energy by enhancing mitochondrial
              function, aiding athletic performance, and combating chronic
              fatigue syndrome.
            </li>
            <li>
              Brain Health: Exhibits neuroprotective activity, potentially
              aiding conditions like Alzheimer&apos;s, epilepsy, and offering
              antipsychotic effects.
            </li>
            <li>
              Hormonal Balance: Regulates reproductive hormones, making it
              beneficial for both men and women.
            </li>
            <li>
              Pain Relief: Acts as a sedating agent, alleviating orofacial pain
              and displaying positive interactions with morphine.
            </li>
            <li>
              Diabetes Management: Reduces blood glucose and lipid profiles,
              offering potential pancreatic repair.
            </li>
            <li>
              Cancer Protection: Toxic to various cancer types, potentially
              serving as a natural treatment.
            </li>
            <li>
              Anti-Inflammatory and Antiviral: Effective against gastric ulcers,
              inflammation, and various herpes-related viruses.
            </li>
            <li>
              Skeletal Health: Improves skeletal muscle function and
              regeneration.
            </li>
            <li>
              Heart and Blood Support: Protects the heart from drug-induced
              damage and may help regulate heart rate.
            </li>
            <li>
              Addiction Aid: Assists in breaking addiction to opioids and
              alcohol, minimizing withdrawal symptoms.
            </li>
          </ul>
          {/*  */}
          <h3>
            <span className="font-[600]">Risks and Side Effects:</span> Caution
            is advised for heavy metal exposure and low blood pressure. Ensure
            sourcing from reputable distributors to avoid impurities.
          </h3>
          <h3>
            <span className="font-[600]">Final Thoughts:</span> Shilajit, a
            Himalayan treasure, offers a plethora of health benefits backed by
            both tradition and emerging scientific research. As studies
            progress, explore its potential alongside other Ayurvedic herbs for
            holistic well-being. Thoroughly research your source and consult a
            healthcare professional for the best results.
          </h3>
        </div>
        <div className="container mx-auto pl-4 my-12">
          <h1 className="text-[26px] font-[600] text-center">
            Related Articles
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-around">
            {LearnData?.map((ele: any, index: number) => (
              <div
                className={`w-[85%] sm:w-[47%] md:w-[30%] mt-6 ${
                  index === 1 && "hidden"
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
