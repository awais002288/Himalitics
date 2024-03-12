import React from "react";
import Image from "next/image";
// import befefitsWeb from "../../../../../assets/images/benefits-web.webp";
import befefitsWeb from "../../../../../assets/images/check.png";
function Benefits() {
  return (
    <div className="container mx-auto px-5 py-20">
      <Image src={befefitsWeb} alt="img"></Image>
    </div>
  );
}

export default Benefits;
