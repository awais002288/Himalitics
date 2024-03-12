import React from "react";

function Disclaimer() {
  return (
    <div className="bg-[#03443c]">
      <div className="container px-5 mx-auto py-12 ">
        <div className="flex items-center gap-5 mb-5 ">
          <div className="w-full h-[1px] bg-white hidden sm:block"></div>

          <h1 className="text-[25px] font-[600] text-secondry w-full sm:w-auto text-center">
            Disclaimer
          </h1>
          <div className="w-full h-[1px] bg-white hidden sm:block"></div>
        </div>

        <p className="text-white text-center text-[14px]">
          The products that are available for purchase on our website are not
          intended to diagnose, treat, cure, or prevent any illness or disease.
          The information provided on our website and the statements made about
          our products have not been reviewed by the Food and Drug
          Administration. All the material presented on our website is meant for
          educational purposes only and should not be considered as a substitute
          for medical consultation. We strongly recommend that all customers
          consult and work with an experienced healthcare practitioner.
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
