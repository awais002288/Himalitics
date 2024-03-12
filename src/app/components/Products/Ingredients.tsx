import React from "react";
import Image from "next/image";

function Ingredients(props: any) {
  const { singleProduct } = props;
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-around gap-16 sm:gap-0">
          <div className="w-[100%] sm:w-[45%] h-[300px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
            <Image
              alt="description"
              src={
                Object.keys(singleProduct)?.length !== 0 &&
                singleProduct?.ingredientImages[0]
              }
              height={100}
              width={100}
              className="w-full h-full"
            />
          </div>
          <div className="w-[100%] sm:w-[45%] h-[300px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
            <Image
              alt="description"
              src={
                Object.keys(singleProduct)?.length !== 0 &&
                singleProduct?.ingredientImages[1]
              }
              height={100}
              width={100}
              className="w-full h-full"
            />
          </div>
        </div>
        {/* ingredients component */}
        {Object.keys(singleProduct)?.length !== 0 && (
          <div className="my-16 flex flex-wrap justify-center">
            {singleProduct?.ingredientData?.map((ele: any, index: number) => (
              <div key={index} className="w-[45%] sm:w-[30%] mt-10">
                <div className="w-full h-[140px] sm:h-[200px] md:h-[200px] flex justify-center">
                  <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] rounded-full border border-primary">
                    <Image
                      src={ele.image}
                      alt="image"
                      width={200}
                      height={200}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full h-auto border">
                  <p className="bg-primary text-white px-4 py-1">{ele.title}</p>
                  <h3
                    className={`bg-secondry text-white p-4
                ${
                  index === 6 || index === 5 || index === 4
                    ? "h-[550px] sm:h-[370px] md:h-[280px] lg:h-[200px]"
                    : "h-[400px] sm:h-[370px] md:h-[280px] lg:h-[200px]"
                }
                `}
                  >
                    {ele.desc}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ingredients;
