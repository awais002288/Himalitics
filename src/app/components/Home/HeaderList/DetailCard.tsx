import React, { useState } from "react";

function DetailCard({ item }: any) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className=" col-span-12 md:col-span-6 lg:col-span-3 flex gap-5 group">
      <div className="h-[65px] min-h-[65px] p-1   md:w-[85px] min-w-[65px] border-[1px]  items-center justify-center border-secondry rounded-full flex ">
        <div className="group-hover:bg-white h-full w-full rounded-full flex items-center justify-center duration-1000">
          <div dangerouslySetInnerHTML={{ __html: item?.icon }} />
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[14px] sm:text-[18px] font-[600] text-secondry">
          {item.title}
        </h1>
        <p className="text-white text-[15px]">
          {!readMore ? item.description.slice(0, 50) + "..." : item.description}
        </p>
        <button
          className="text-white  underline px-5 py-2 font-[600] text-[14px] cursor-pointer mt-5 hover:bg-secondry hover:duration-500 rounded-full"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default DetailCard;
