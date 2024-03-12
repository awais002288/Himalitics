import React from "react";
import Image from "next/image";
import failed from "../../../assets/images/failed.png";
import Link from "next/link";

export default function page() {
  return (
    <div className=" py-[180px] flex justify-center bg-gradient-to-br">
      <div className="container mx-auto flex flex-col items-center space-y-4 justify-center">
        <Image src={failed} alt="img" className="h-[200px w-[220px] ml-10 " />
        <h1 className="text-center font-semibold leading-none text-[38px] sm:text-[40px] text-primary">
          Something went wrong!
        </h1>
        <p className="text-center">
          There is an issue while processing your paymnet. Please try again
        </p>
        <Link
          href="/"
          className="h-[42px] bg-secondry hover:bg-primary text-white flex items-center px-5 rounded-full"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
