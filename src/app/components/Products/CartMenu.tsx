/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "react-lazy-load-image-component/src/effects/blur.css";
import Drawer from "@mui/material/Drawer";
import { navData } from "../../../../assets/constants/navData";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import check from "../../../../assets/images/check.jpg";
import { useRouter } from "next/navigation";
import { productsData } from "../../../../assets/constants/productsData";
import stripePromise from "@/app/stripe";
interface Props {
  open: boolean;
  setOpen: any;
}
export default function MainNavigation({ open, setOpen }: Props) {
  const router = useRouter();
  const [productData, setProductData] = useState<any>({
    id: "",
    title: "",
    description: "",
    price: 0,
    quantity: 1,
    image: "",
  });

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event?.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    !open && window.location.reload();
    setOpen(open);
  };

  const [cartProducts, setCartProducts] = useState<any>([]);

  useEffect(() => {
    const data: any = localStorage.getItem("cart");

    let finalData = JSON.parse(data);

    setCartProducts(finalData);

    const countData: any = finalData?.find((ele: any) => ele.id == 1)?.quantity;
    const savedData = productsData.find((ele: any) => ele.id == 1);

    setProductData({
      ...productData,
      id: savedData?.id,
      title: savedData?.title1,
      description: savedData?.title2,
      price: savedData?.price,
      quantity: countData,
      image: savedData?.url,
    });
  }, [open]);

  const countHandler = (value: Boolean) => {
    let count = productData?.quantity;

    value
      ? (count = count + 1)
      : count > 0
      ? (count = count - 1)
      : (count = count);

    setProductData({ ...productData, quantity: count });
    const data: any = cartProducts;
    data?.map((ele: any) => {
      if (ele.id === 1) {
        ele.quantity = count;
      }
    });
    localStorage.setItem("cart", JSON.stringify(data));
    //
    const newValue: any = localStorage.getItem("cart");
    let finalData = JSON.parse(newValue);
    setCartProducts(finalData);
    const countData = finalData?.find((ele: any) => ele.id == 1);
    setProductData({ ...productData, quantity: countData?.quantity });
  };

  const makePayment = async () => {
    const product = {
      product_id: productData?.id,
      product_name: productData?.title,
      product_price: productData?.price,
      product_quantity: productData?.quantity,
      product_image: productData?.image,
    };

    const body: any = {
      products: product,
    };

    const stripe: any = await stripePromise;

    if (!stripe || !stripe?.redirectToCheckout) {
      throw new Error("Stripe.js library is not initialized properly.");
    }

    const headers = { "Content-Type": "application/json" };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body.products),
      }
    );
    const session = await response?.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: session?.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const [mapData, setMapData] = useState([]);
  useEffect(() => {
    let newData: any = [];
    productsData?.map((ele: any) => {
      cartProducts?.map((item: any) => {
        if (item.id === ele.id && item.quantity !== 0) {
          newData.push(ele);
        }
      });
    });
    setMapData(newData);
  }, [productsData, cartProducts]);

  const deleteCartIcon = (id: number) => {
    const data = JSON.parse(JSON.stringify(cartProducts));
    data?.map((ele: any) => {
      if (ele.id === id) {
        ele.quantity = 0;
      }
    });
    setCartProducts(data);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  return (
    <div className="">
      {open && (
        <div
          onClick={toggleDrawer(false)}
          className="h-12 w-12 bg-black absolute z-50  left-[300px] -top-10 flex items-center justify-center lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="white"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        style={{ zIndex: 10 }}
        sx={{
          position: "relative",
          //   width: "600px !important, ",
        }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <div className="bg-white flex items-center justify-between w-[340px] p-4">
            <h1 className="text-primary font-bold">SHOPPING CART</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="white"
              className="w-8 h-8 stroke-primary cursor-pointer"
              onClick={toggleDrawer(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="h-[1px] bg-[#e7e7e7]"></div>
          <div className="flex   flex-col justify-between ">
            {mapData?.map((ele: any, index: number) => (
              <div key={index} className="relative">
                <div className="bg-[gray] bg-opacity-10 rounded-sm p-4 gap-4  w-[340px] flex items-center">
                  <div className="h-full w-[45%] relative group ">
                    <div className="h-full w-full bg-opacity-30 z-50 absolute hidden top-0 right-0 group-hover:flex items-center justify-center bg-white ">
                      <Link href="/products">
                        <button className="rounded-full h-[40px]  hover:text-secondry hover:duration-500  hover:scale-110   w-[120px]   text-white bg-primary">
                          Quick View
                        </button>
                      </Link>
                    </div>
                    <LazyLoadImage
                      src={check.src}
                      alt="img"
                      effect="blur"
                      height={"100%"}
                      width={"100%"}
                      className=" h-full object-cover"
                    ></LazyLoadImage>
                  </div>
                  <div className="h-full w-[55%] space-y-3  m-auto flex flex-col justify-center">
                    <p className="text-primary text-[14px] font-[300]">
                      {/* Sages Of The Ages® Pure Himalayan Shilajit Resin - 30
                          Grams */}
                      {ele?.title1} {ele?.title2}
                    </p>
                    <h3 className="text-secondry font-[500]">
                      ${ele?.oldPrice} ${ele?.price}
                    </h3>
                    <div className="flex items-center gap-2 ">
                      <div className="border-[1px] border-primary rounded-2xl flex justify-around items-center w-[100px] h-[35px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-4 h-4 cursor-pointer hover:text-[#d8bfa9] duration-300 ease-in-out transition-all"
                          onClick={() => countHandler(false)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                        <h3>{productData?.quantity}</h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-4 h-4 cursor-pointer hover:text-[#d8bfa9] duration-300 ease-in-out transition-all"
                          // onClick={() => setProductCount(productCount + 1)}
                          onClick={() => countHandler(true)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 hover:scale-105 dura  z-50 top-1 right-1 cursor-pointer text-red-500"
                        onClick={() => deleteCartIcon(ele.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/*  */}
            <div className="p-4 absolute bottom-0 w-full">
              <div className="flex items-center justify-between text-[18px]">
                <h1 className="font-bold ">Subtotal</h1>
                <h1>
                  $
                  {cartProducts &&
                  cartProducts[0]?.quantity &&
                  productsData[0]?.price
                    ? (
                        cartProducts[0]?.quantity * productsData[0]?.price
                      ).toFixed(2)
                    : 0}
                </h1>
              </div>
              <p className="mt-3 mb-4 font-light leading-tight text-[14px] text-theme-text">
                Taxes, shipping and discounts codes calculated at checkout
              </p>
              <div
                onClick={makePayment}
                className={`${
                  cartProducts &&
                  cartProducts[0]?.quantity * productsData[0]?.price === 0 &&
                  "pointer-events-none opacity-50"
                } cursor-pointer hover:scale-105 h-[42px] hover:bg-primary bg-secondry rounded-full flex items-center justify-center font-bold text-white text-[13px]`}
              >
                CHECKOUT
              </div>
              {/* <div className="h-[100px] bg-red-600"></div> */}
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
