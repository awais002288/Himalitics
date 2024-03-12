/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import testMen from "../../../../../assets/images/testimonial-men.avif";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="h-[40px] w-[40px]  border-black border-[2px] p-2 rounded-full absolute -right-8 top-[45%] cursor-pointer"
    >
      <svg className="flickity-button-icon" viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          className="arrow"
          transform="translate(100, 100) rotate(180) "
        ></path>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="h-[40px] w-[40px]  border-black border-[2px] p-2 rounded-full absolute -left-8 z-50 top-[45%] cursor-pointer"
    >
      <svg className="flickity-button-icon rotate-180" viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          className="arrow"
          transform="translate(100, 100) rotate(180) "
        ></path>
      </svg>
    </div>
  );
}

export default function Testimonials() {
  var settings: any = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-full flex justify-center bg-[#e5fcf8] pb-16 pt-5">
      <div className="w-full max-w-6xl">
        <div className="text-center text-primary] text-[22px] sm:text-[28px] font-[600] my-8">
          Quality ingredients lead to to happy customers.
        </div>

        <div className="slider-container hidden lg:block ">
          <Slider {...settings}>
            {Array.from({ length: 6 })?.map((item: any, index: any) => (
              <div key={index} className="px-3">
                <div className="space-y-5 bg-white py-10 rounded-lg px-6 ">
                  <div className="flex justify-center">
                    <LazyLoadImage
                      src={testMen.src}
                      effect="blur"
                      alt="img"
                      className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                  </div>

                  <div className="flex justify-center ">
                    {Array.from({ length: 5 }).map((item: any, index: any) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="w-6 h-6 stroke-yellow-500 fill-yellow-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-center">
                    Love this stuff. I have been taking it everyday for about 3
                    weeks now and I feel great. It doesn&apos;t have a bad taste
                    and the little spatula that came with it is very helpful.
                    Will be buying again
                  </p>
                  <h2 className="text-center font-semibold">Gurpreet Singh</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="lg:hidden flex gap-2 sm:gap-5 overflow-scroll w-full hideScrollbar">
          {Array.from({ length: 6 }).map((item: any, index: any) => (
            <div key={index} className="min-w-[300px]">
              <div className="space-y-5 bg-white py-10 rounded-lg px-6  ">
                <div className="flex justify-center">
                  <LazyLoadImage
                    src={testMen.src}
                    effect="blur"
                    alt="img"
                    className="w-[100px] h-[100px] rounded-full object-cover"
                  />
                </div>

                <div className="flex justify-center ">
                  {Array.from({ length: 5 }).map((item: any, index: any) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-6 h-6 stroke-yellow-500 fill-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-center">
                  Love this stuff. I have been taking it everyday for about 3
                  weeks now and I feel great. It doesn&apos;t have a bad taste
                  and the little spatula that came with it is very helpful. Will
                  be buying again
                </p>
                <h2 className="text-center font-semibold">Gurpreet Singh</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
