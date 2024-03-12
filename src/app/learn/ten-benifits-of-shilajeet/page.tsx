import React from "react";
// import desc1 from "../../assets/images/desc1.jpg";
import desc1 from "../../../../assets/images/desc1.jpg";
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
          <h2 className="text-[18px]">TEN BENEFITS OF SHILAJIT</h2>
          <h3 className="text-[16px] italic">December 6, 2023</h3>
          <h4 className="text-[14px] mt-2">In Learn 0 comment</h4>
        </div>
      </div>
      {/* body */}
      <div className="bg-[#e5fcf8] py-12">
        <div className="container mx-auto text-[14px] px-6 text-primary space-y-6">
          <h3>
            Shilajit, also known as mineral pitch, is a substance rich in fluvic
            acid and various minerals. Whether consumed as a powder or
            supplement, it may contribute to improved brain function, slowed
            aging, enhanced fertility, and more.
          </h3>
          <h3>
            Originating from the breakdown of plant matter and minerals,
            shilajit is a sticky, black, tar-like substance found in high
            mountain rocks. Traditionally harvested in India and Tibet, it is
            now sourced from various countries.
          </h3>
          <h3>
            Utilized in traditional Indian Ayurvedic medicine for centuries,
            shilajit&apos;s compounds show potential benefits for various
            conditions. This article explores the advantages and potential side
            effects of this naturally occurring substance.
          </h3>
          {/* top benifits section */}
          {/* first list */}
          <h1 className="text-[16px] font-[600]">
            Top 10 Potential Benefits of Shilajit:
          </h1>
          <h2 className="font-[600]">1: Brain Function:</h2>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Shilajit, derived from the slow decomposition of plant matter, may
              support brain function and could potentially aid in
              Alzheimer&apos;s therapy.
            </li>
            <li>
              Research in the International Journal of Alzheimer&apos;s Disease
              suggests its traditional use for longevity and aging control.
            </li>
          </ul>
          {/* Second list */}
          <h1 className="text-[16px] font-[600]">2: Aging:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              One study noted Fluvic acid, a key component in shilajit, acts as
              an antioxidant and anti-inflammatory, potentially reducing free
              radicals and cellular damage linked to aging.
            </li>
          </ul>
          {/* Third list */}
          <h1 className="text-[16px] font-[600]">3: Anemia:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Shilajit&apos;s high humic acid and iron content may be beneficial
              in treating iron deficiency anemia, but consultation with a doctor
              is advised.
            </li>
          </ul>
          {/* Fourth list */}
          <h1 className="text-[16px] font-[600]">4: Antiviral:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              A research study noted that Shilajit&apos;s diverse minerals and
              compounds may contribute to antiviral properties, potentially
              combating various viruses.
            </li>
          </ul>
          {/* Fifth list */}
          <h1 className="text-[16px] font-[600]">5: Chronic Fatigue::</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              A study in the Journal of Ethnopharmacology suggests
              shilajit&apos;s potential for reducing symptoms of chronic fatigue
              syndrome by improving cell functions and increasing energy
            </li>
          </ul>
          {/* Sixth list */}
          <h1 className="text-[16px] font-[600]">6: Altitude Sickness:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Traditional claims propose that shilajit may alleviate altitude
              sickness by improving cognitive processes, boosting the immune
              system, and reducing inflammation.
            </li>
          </ul>
          {/* Seventh list */}
          <h1 className="text-[16px] font-[600]">7: Liver Cancer:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Research indicates shilajit&apos;s potential in combating liver
              cancer cells, inhibiting their multiplication. Further studies are
              required.
            </li>
          </ul>
          {/* Eighth list */}
          <h1 className="text-[16px] font-[600]">8: Heart Health:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Shilajit may protect the heart and improve cardiovascular health,
              as observed in a study using rats. It may also reduce blood
              pressure. Caution is advised for individuals with heart conditions
              or hypotension.
            </li>
          </ul>
          {/* Ninth list */}
          <h1 className="text-[16px] font-[600]">9: Obesity:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              A study in the Journal of Medicinal Food suggests that obese
              individuals taking shilajit responded better to exercise,
              activating genes that aid skeletal muscle adaptation.
            </li>
          </ul>
          {/* Tenth list */}
          <h1 className="text-[16px] font-[600]">
            10: Male Fertility and Testosterone:
          </h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Studies indicate that shilajit may increase total sperm count and
              motility in infertile men, as well as elevate testosterone levels
              in healthy volunteers.
            </li>
          </ul>
          {/*  */}
          <h1 className="text-[16px] font-[600]">Usage:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Shilajit is available as a powder or supplement, dissolved in
              water or milk.
            </li>
            <li>
              The recommended dose is 300 to 500 milligrams per day, but
              consulting a doctor before taking any natural supplements is
              crucial.
            </li>
          </ul>
          {/*  */}
          <h1 className="text-[16px] font-[600]">Potential Side Effects:</h1>
          <ul className="space-y-2 list-disc ml-3">
            <li>
              Research suggests long-term use is generally safe, but caution is
              advised for individuals with high blood pressure or heart
              conditions.
            </li>
            <li>
              Quality matters, as low-quality shilajit may be contaminated with
              heavy metals and other harmful substances.
            </li>
          </ul>
          {/*  */}
          <h1 className="text-[16px] font-[600]">Takeaway:</h1>
          <h3>
            Shilajit offers several health benefits when used correctly, but
            it&apos;s essential to consult with a doctor regarding dosage and
            potential side effects. Monitoring the source of the supplement is
            crucial for safety and efficacy.
          </h3>
          <h3>
            What sets our shilajit resin apart is its purity and potency. We
            ensure that our product is sourced from the most pristine locations
            and undergoes rigorous testing to guarantee its quality. Our
            shilajit resin is rich in essential trace minerals, antioxidants,
            and Bio-active elements, making it a powerful supplement for overall
            well-being.
          </h3>
          <h3>
            At &quot;Sages of the Ages,&quot; we believe in the power of nature
            to support and enhance our health. Our mission is to provide you
            with a natural and sustainable product that can help you achieve
            optimal vitality and wellness.
          </h3>
          <h3>
            Experience the wisdom of the ages with &quot;Sages of the Ages&quot;
            and discover the transformative benefits of our pure organic
            Himalayan shilajit resin. Elevate your well-being and unlock your
            full potential with our Golden Grade Organic Shilajit.
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
                  index === 0 && "hidden"
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
