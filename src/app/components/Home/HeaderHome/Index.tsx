import React from "react";
import HeaderList from "../HeaderList/Index";
import HeaderAccordion from "../HeaderAccordion/Index";
import Benefits from "../Benefits/Index";
import Image from "next/image";
import headerWeb from "../../../../../assets/images/header-web.webp";
import mobileWeb from "../../../../../assets/images/header-mobile.webp";

function HeaderHome() {
  return (
    <div className="bg-primary  ">
      <div className="pb-8">
        <Image
          src={headerWeb}
          alt=""
          className="hidden md:block  -mt-20"
        ></Image>
        <Image src={mobileWeb} alt="image" className="md:hidden"></Image>
      </div>
      <div className="">
        <HeaderList />
      </div>
      <HeaderAccordion />
      <Benefits />
    </div>
  );
}

export default HeaderHome;
