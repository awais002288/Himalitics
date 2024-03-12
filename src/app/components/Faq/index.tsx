"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

function Faq() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = (accordionNumber: any) => {
    if (accordionNumber === 1) {
      setIsOpen1(!isOpen1);
      setIsOpen2(false);
      setIsOpen3(false);
    } else if (accordionNumber === 2) {
      setIsOpen2(!isOpen2); // Corrected isOpen2
      setIsOpen1(false); // Also, reset isOpen1
      setIsOpen3(false);
    } else if (accordionNumber === 3) {
      setIsOpen3(!isOpen3); // Corrected isOpen3
      setIsOpen1(false); // Also, reset isOpen1
      setIsOpen2(false); // Also, reset isOpen2
    }
  };

  return (
    <div className="w-full max-w-6xl py-24 px-5 lg:px-0">
      {/* Faq Accordion */}

      <div id="accordionExample5" className="space-y-2 ">
        <div className="   ">
          <h2 className="mb-0" id="">
            <button
              className="group  relative flex justify-between w-full items-center   bg-white pl-5 text-left text-base text-neutral-800 transition "
              type="button"
              onClick={() => toggleAccordion(1)}
            >
              <p className="text-black font-semibold text-[14px] group-hover:text-secondry">
                What is Shilajit?
              </p>

              <div className="flex items-center justify-center bg-black h-[45px] w-[45px] cursor-pointer">
                {!isOpen1 ? (
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
            className={`  border   transition-all  duration-700  ${
              isOpen1
                ? "h-auto  opacity-1 "
                : " h-0 opacity-0 border-0   overflow-hidden"
            } `}
          >
            <div className="px-5 py-4 text-[14px] text-[#878787]">
              <p>
                Shilajit is a natural substance that is formed over centuries by
                the decomposition of plant and microbial matter in the rocks of
                mountainous regions, especially in the Himalayas, Altai,
                Caucasus, and other mountain ranges. It is a sticky, tar-like
                resin that is dark brown to black in color. Shilajit has been
                used for centuries in traditional systems of medicine, including
                Ayurveda in India, Traditional Chinese Medicine, and Unani Tibb.
              </p>
              <p className="my-5">
                Key characteristics and components of Shilajit include:
              </p>
              <ol className="list-decimal list-inside">
                <li>
                  <span className="font-bold"> Minerals:</span> Shilajit
                  contains a rich array of minerals, including fulvic acid,
                  humic acid, selenium, zinc, iron, and others.
                </li>
                <li>
                  <span className="font-bold">Fulvic Acid:</span> Fulvic acid is
                  a component of Shilajit that is believed to play a role in
                  nutrient absorption and transportation.
                </li>
                <li>
                  <span className="font-bold"> Anti-oxidants: </span>Shilajit
                  possesses antioxidant properties, which may help combat
                  oxidative stress in the body.
                </li>
                <li>
                  <span className="font-bold"> Amino Acids:</span> It contains
                  various amino acids, the building blocks of proteins.{" "}
                </li>
                <li>
                  <span className="font-bold"> Bioactive Compounds: </span>
                  Shilajit is known to contain various bioactive compounds that
                  contribute to its medicinal properties.
                </li>
              </ol>
              <p>
                In traditional medicine, Shilajit is valued for its potential
                health benefits, and it is often used to enhance vitality,
                promote energy, and support overall well-being. It has been
                employed in various forms, including resin, powder, or capsules,
                and is typically consumed orally.
              </p>
              <p className="mt-5">
                It&apos;s important to note that while Shilajit has a long
                history of traditional use and is considered safe for many,
                individual responses may vary. Before incorporating Shilajit or
                any other supplement into your routine, it&apos;s advisable to
                consult with a healthcare professional, especially if you have
                any underlying health conditions or concerns.
              </p>
            </div>
          </div>
        </div>
        <div className="   ">
          <h2 className="mb-0" id="">
            <button
              className="group  relative flex justify-between w-full items-center
                 bg-white pl-5 text-left text-base text-neutral-800 transition
                  "
              type="button"
              onClick={() => toggleAccordion(2)}
            >
              <p className="text-black font-semibold text-[14px] group-hover:text-secondry">
                How do you consume Shilajit?
              </p>

              <div className="flex items-center justify-center bg-black h-[45px] w-[45px] cursor-pointer">
                {!isOpen2 ? (
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
            className={`  border   transition-all  duration-700  ${
              isOpen2
                ? "h-auto  opacity-1 "
                : " h-0 opacity-0 border-0   overflow-hidden"
            } `}
          >
            <div className="px-5 py-4 text-[14px] text-[#878787]">
              <p>
                Shilajit is commonly consumed in various forms, and the method
                of consumption can depend on the specific product you have. Here
                are some common ways people consume Shilajit:
              </p>

              <ol className="list-decimal list-inside mt-5">
                <li>
                  <span className="font-bold"> Raw Resin:</span>
                </li>
                When using Shilajit, it&apos;s crucial to follow the recommended
                dosage guidelines provided by the product manufacturer.
                Additionally:
                <li>
                  <span className="font-bold"> Shilajit Powder: </span>
                </li>
                <li>
                  <span className="font-bold"> Combined with Honey:</span>
                </li>
              </ol>
              <p>
                When using Shilajit, it&apos;s crucial to follow the recommended
                dosage guidelines provided by the product manufacturer.
                Additionally:
              </p>
              <ul className="list-disc list-inside mt-5">
                <li>
                  <span className="font-bold"> Consultation:</span> Before
                  incorporating Shilajit into your routine, especially if you
                  have underlying health conditions or concerns, it&apos;s
                  advisable to consult with a healthcare professional.
                </li>
                <li>
                  <span className="font-bold">Quality:</span> Ensure that you
                  are using a high-quality and purified form of Shilajit from a
                  reputable source.
                </li>
                <li>
                  <span className="font-bold"> Hydration:</span> It&apos;s often
                  recommended to consume Shilajit with adequate water to help
                  with absorption.
                </li>
              </ul>
              <p className="">
                Remember that individual responses to supplements can vary, and
                it&apos;s essential to pay attention to how your body reacts. If
                you experience any adverse effects or have specific health
                concerns, seek guidance from a healthcare professional.
              </p>
            </div>
          </div>
        </div>
        <div className="   ">
          <h2 className="mb-0" id="headingThree5">
            <button
              className="group  relative flex justify-between w-full items-center   bg-white pl-5 text-left text-base text-neutral-800 transition "
              type="button"
              onClick={() => toggleAccordion(3)}
            >
              <p className="text-black font-semibold text-[14px] group-hover:text-secondry">
                Are there any side effects?
              </p>
              <div className="flex items-center justify-center bg-black h-[45px] w-[45px] cursor-pointer">
                {!isOpen3 ? (
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
            className={`  border   transition-all  duration-700  ${
              isOpen3
                ? "h-auto  opacity-1 "
                : " h-0 opacity-0 border-0   overflow-hidden"
            } `}
          >
            <div className="px-5 py-4 text-[14px] text-[#878787]">
              <p>
                Shilajit is generally considered safe for many people when used
                appropriately and in recommended amounts. However, individual
                responses can vary, and some individuals may experience side
                effects or adverse reactions. It&apos;s important to be aware of
                potential considerations:
              </p>

              <ol className="list-decimal list-inside">
                <li>
                  <span className="font-bold"> Purity of the Product:</span> The
                  source and purity of the Shilajit product are crucial. Ensure
                  you are obtaining it from a reputable and trustworthy supplier
                  to minimize the risk of contaminants. Sages Of The Ages
                  Shilajit is 3rd party lab tested to ensure you receive Gold
                  Grade A Shilajit without any toxic or harmful heavy metals
                  such as arsenic or lead.
                </li>
                <li>
                  <span className="font-bold">Dosage:</span> Excessive intake of
                  Shilajit may lead to side effects. It&apos;s important to
                  adhere to the recommended dosage provided by the product
                  manufacturer or as advised by a healthcare professional.
                </li>
                <li>
                  <span className="font-bold"> Individual Sensitivity: </span>
                  Some individuals may be more sensitive to certain substances
                  in Shilajit, leading to digestive issues or allergic
                  reactions. If you have known allergies to certain compounds,
                  exercise caution.
                </li>
                <li>
                  <span className="font-bold">Media Conditions:</span>{" "}
                  Individuals with specific medical conditions or those taking
                  prescription medications should consult with a healthcare
                  professional before using Shilajit. It may interact with
                  certain medications or exacerbate pre-existing health
                  conditions.
                </li>
              </ol>
              <p>
                Common side effects reported by some individuals include
                digestive discomfort, nausea, or diarrhea. These effects are
                generally mild and temporary.
              </p>
              <p className="mt-5">
                As with any supplement, it&apos;s crucial to approach its use
                with caution and be mindful of your body&apos;s response. If you
                experience persistent or severe side effects, discontinue use
                and seek advice from a healthcare professional.
              </p>
              <p className="mt-5">
                Pregnant or breastfeeding individuals and those with underlying
                health conditions should consult with their healthcare provider
                before using Shilajit or any other supplement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
