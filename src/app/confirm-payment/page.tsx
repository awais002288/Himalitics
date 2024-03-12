import React from "react";
import Image from "next/image";
import success from "../../../assets/images/success.png";
import Link from "next/link";

export default function page() {
  return (
    <div className=" py-[180px] flex justify-center bg-white">
      <div className="container mx-auto flex flex-col items-center space-y-4 justify-center">
        <Image src={success} alt="img" className="h-[200px w-[220px] -ml-10" />
        <h1 className="text-center font-semibold leading-none text-[40px] text-primary">
          Success!
        </h1>
        <p className="text-center">
          Your request has been processed successfully
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
