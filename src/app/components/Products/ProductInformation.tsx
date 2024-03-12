"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import testImage from "../../../../assets/images/testImage.jpg";
import SocialMedia from "./SocialMedia";
import CartMenu from "./CartMenu";
import { useRouter } from "next/navigation";

function ProductInformation(props: any) {
  const { singleProduct } = props;

  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [open, setOpen] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState([]);
  const addToCartHandler = () => {
    const cartData: any = localStorage.getItem("cart");
    const data: any = {
      id: singleProduct.id,
      quantity: productCount,
      price: singleProduct.price,
    };

    let finalData = !cartData ? [] : JSON.parse(cartData);
    if (!cartData) {
      finalData.push(data);
    } else {
      const existData = finalData.find((ele: any) => {
        return ele.id === data.id;
      });

      finalData?.map((ele: any, index: number) => {
        if (ele.id === data.id)
          return (ele.quantity = ele.quantity + data.quantity);
      });

      if (!existData) {
        finalData.push(data);
      }
    }

    localStorage.setItem("cart", JSON.stringify(finalData));
    setOpen(!open);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimate(!animate);
    }, 3000);
  }, [animate]);

  const wishListHandler = () => {
    const cartData: any = localStorage.getItem("wishlist");
    const data: any = {
      id: singleProduct.id,
    };

    let finalData = !cartData ? [] : JSON.parse(cartData);
    if (!cartData) {
      finalData.push(data);
    } else {
      const existData = finalData.find((ele: any) => {
        return ele.id === data.id;
      });
      if (existData) {
        const neww = finalData.filter((val: any) => {
          return val.id !== existData.id;
        });
        finalData = neww;
      } else if (!existData) {
        finalData.push(data);
      }
    }

    localStorage.setItem("wishlist", JSON.stringify(finalData));

    setWishlist(finalData);
    window.location.reload();
  };

  useEffect(() => {
    const wishlistData: any = localStorage.getItem("wishlist");
    const parseData = JSON.parse(wishlistData);
    setWishlist(parseData);
  }, []);

  return (
    <>
      <CartMenu open={open} setOpen={setOpen} />
      <div className="h-auto">
        {Object.keys(singleProduct)?.length !== 0 ? (
          <div className="flex flex-col md:flex-row md:gap-8 h-auto">
            <div className="w-[100%] md:w-[40%] h-auto flex justify-end">
              <div className="w-full lg:w-[80%] h-[200px] sm:h-[300px] md:h-[400px]">
                <Image
                  src={singleProduct?.image}
                  alt="image"
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-[100%] md:w-[60%] h-auto mt-10 md:mt-0">
              <div className="p-2 space-y-2">
                <div className="text-primary font-[600] text-[28px]">
                  <span>{singleProduct.title1}</span>
                  <br className="hidden lg:block" /> {singleProduct.title2}
                </div>
                <div className="text-[#d8bfa9] text-[22px]">
                  <span className="line-through">
                    ${singleProduct.oldPrice}
                  </span>
                  &nbsp;&nbsp; US$ {singleProduct.price}
                </div>
                <h6 className="tet-[14px] pt-4">
                  Shipping calculated at checkout
                </h6>
                <div className="text-[15px] space-y- pt-4 font-[600]">
                  <div className="">
                    SKU:&nbsp;
                    <span className="text-[14px] font-[500] text-primary">
                      {singleProduct.sku}
                    </span>
                  </div>
                  <div className="">
                    Category:&nbsp;
                    <span className="text-[14px] font-[500] cursor-pointer text-primary">
                      {singleProduct.category}
                    </span>
                  </div>
                  <div className="flex">
                    <span>Tags:&nbsp;</span>
                    <div className="text-[14px] font-[500] text-primary flex">
                      {singleProduct?.tags?.map((ele: any, index: number) => (
                        <div key={index} className="flex">
                          <span className="flex">
                            {ele}
                            <span
                              className={`${
                                index === singleProduct.tags?.length - 1 &&
                                "hidden"
                              }`}
                            >
                              ,&nbsp;
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* start add to cart div */}
                <div className="flex justify-start items-center gap-3 pt-6">
                  <div className="border-[2px] border-primary rounded-2xl flex justify-around items-center w-[100px] h-[35px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer hover:text-[#d8bfa9] duration-300 ease-in-out transition-all"
                      onClick={() =>
                        setProductCount(
                          productCount > 1 ? productCount - 1 : productCount
                        )
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                    <h3>{productCount}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer hover:text-[#d8bfa9] duration-300 ease-in-out transition-all"
                      onClick={() =>
                        setProductCount(
                          productCount < 10 ? productCount + 1 : productCount
                        )
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <div className={`flex justify-center items-center rotate-90`}>
                    <div
                      className={`${
                        animate ? "-rotate-90 animate-bounce" : ""
                      } `}
                    >
                      <div
                        className={`border py-2 px-4 bg-[#d8bfa9] text-white font-[600] rounded-full cursor-pointer hover:bg-primary
              duration-300 ease-in-out transition-all -rotate-90
              `}
                        onClick={addToCartHandler}
                      >
                        Add to Cart
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center items-center border rounded-full h-9 w-9
                    cursor-pointer ${
                      wishlist?.length !== 0 ? "border-[red]" : "border-black"
                    } `}
                    // onClick={wishListHandler}
                    onClick={wishListHandler}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`w-6 h-6  ${
                        wishlist?.length !== 0 && "fill-[red] text-[red]"
                      } `}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                </div>
                {/* social media icons */}
                <div className="">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-screen h-[60vh]"></div>
        )}
      </div>
    </>
  );
}

export default ProductInformation;
