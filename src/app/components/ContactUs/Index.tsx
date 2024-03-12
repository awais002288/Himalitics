"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import contactUs from "../../../../assets/icons/contactUs.svg";
import emailjs from "@emailjs/browser";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const form: any = useRef(null);
  const handeSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY &&
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_KEY &&
      process.env.NEXT_PUBLIC_EMAIL_JS_PULBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_KEY,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_JS_PULBLIC_KEY
        )
        .then(
          (result) => {
            Toastify({
              text: "Thank you! for contacting us.",
              duration: 3000,
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
            form.current.reset();
          },
          (error) => {
            Toastify({
              text: "Something went wrong",
              duration: 3000,
              style: {
                background: "linear-gradient(to right, red, red)",
              },
            }).showToast();
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <div className="h-full w-full">
      {/* Contact Us Banner  */}

      <div
        className="h-[150px]"
        style={{
          backgroundImage: "url(contact-bg.avif)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-white text-white text-[22px]  bg-opacity-30 flex items-center justify-center">
          Contact us
        </div>
      </div>

      {/* Contact Us Form */}

      <div className="w-full h-full bg-[#e5fcf8] py-[50px] lg:py-[120px] px-5 lg:px-[80px] xl:px-[150px] flex justify-center ">
        <div className="w-full max-w-[1340px] flex items-center lg:items-start flex-col-reverse lg:flex-row gap-8 ">
          <form
            className="w-full lg:w-[50%] "
            ref={form}
            onSubmit={handeSubmit}
          >
            <h1 className="text-primary text-[24px] font-semibold my-5 ">
              DROP US A LINE
            </h1>

            {/* Name */}

            <label className="text-[#878787] text-[14px] ">
              Your Name (required){" "}
            </label>
            <br />
            <input
              name="user_name"
              type="text"
              className="h-[42px] mt-1 w-full border-[1px] border-[#878787] focus:border-[black] focus:ring-0 focus:border-[1px] focus:outline-none px-4 text-[14px] text-[#878787]"
              required
            />

            {/* Email */}

            <div className="mt-5">
              <label className="text-[#878787] text-[14px] ">
                Your Email (required){" "}
              </label>
              <br />
              <input
                name="user_email"
                type="email"
                className="h-[42px] mt-1 w-full border-[1px] border-[#878787] focus:border-[black] focus:ring-0 focus:border-[1px] focus:outline-none px-4 text-[14px] text-[#878787]"
                required
              />
            </div>

            {/* Name */}

            <div className="mt-5">
              {" "}
              <label className="text-[#878787] text-[14px] ">
                Your Message
              </label>
              <br />
              <textarea
                name="user_message"
                className=" w-full py-2 mt-1 border-[1px] border-[#878787] focus:border-[black] focus:ring-0 focus:border-[1px] focus:outline-none px-4 text-[14px] text-[#878787]"
                rows={8}
                required
              />
            </div>

            {/* Submit Button */}

            <button
              disabled={isLoading}
              className=" mt-4 h-[40px] w-full flex items-center justify-center border-[2px] border-[black] rounded-full font-semibold bg-white hover:bg-[#e0bcac] hover:border-[#e0bcac] hover:text-white hover:duration-500"
              type="submit"
            >
              {!isLoading ? (
                <> Send</>
              ) : (
                <div className="h-[20px] w-[20px] rounded-full bg-transparent border-black animate-spin border-r-blue-400 border-[1.5px] "></div>
              )}
            </button>
          </form>
          <div className="w-full  lg:w-[50%]">
            <p className=" text-[#878787] text-[14px]">
              Email: himalatics@gmail.com
            </p>
            <div className="lg:flex items-center hidden  justify-center mt-24 w-full  ">
              <Image
                src={contactUs}
                alt="contact-us"
                className="h-[320px] w-[320px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
