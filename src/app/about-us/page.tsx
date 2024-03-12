import React from "react";
import desc4 from "../../../assets/images/desc5.jpg";

function page() {
  return (
    <>
      <div
        className="w-screen h-[200px] flex justify-center items-center"
        style={{
          backgroundImage: "url(contact-bg.avif)",
          backgroundSize: "cover",
          width: "100%",
          height: "200px",
        }}
      >
        <div className="text-center text-white">
          <h3 className="text-[18px]">ABOUT US</h3>
          <h6 className="text-[14px]">
            Follow your passion, and sucess will follow you
          </h6>
        </div>
      </div>
      {/* <div className="w-screen bg-blue-100 h-[950px] sm:h-[700px] md:h-[600px] lg:h-[500px] flex justify-center items-center"> */}
      <div className="w-screen bg-[#e5fcf9] h-[650px] sm:h-[700px] md:h-[600px] lg:h-[70vh] flex justify-center items-center">
        <div className="w-[95%] sm:w-[85%] md:w-[70%] text-primary text-[16px]">
          In 2020, during the COVID pandemic, we decided to explore traditional
          Greek-Arab Medicine. We learned from a traditional Hakim, who
          practices remedies rooted in the Unani Tibb tradition. We spent
          countless hours immersing ourselves in the wisdom of this ancient
          tradition and discovered a wealth of herbal remedies shared by
          Ayurvedic and Traditional Chinese Medicine practices. One of our most
          exciting discoveries was Shilajit, an ancient multi-mineral resin. We
          gather Shilajit from the remote, untouched regions of the Himalayas
          where it is purified by glacial waters and compressed between ancient
          stones. Shilajit is a naturally formed black resin that evolves over
          centuries through the gradual decomposition of plants. Shilajit
          contains 85+ minerals, fluvic acid, humic acid, antioxidants, amino
          acids, and bioactive elements that can enhance vitality. We extract
          this precious substance using methods that respect the environment and
          preserve the integrity of the resin. Our highest quality, Gold Grade
          Shilajit stands as a testament to the unwavering standards we uphold
          in sourcing, processing, and packaging. At Sages of the Ages®, we
          prioritize transparency and purity, ensuring that every drop of our
          product is as potent and untainted as the glacial streams from which
          it originates.
        </div>
      </div>
    </>
  );
}

export default page;
