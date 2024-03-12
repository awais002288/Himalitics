/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import { navData } from "../../../../assets/constants/navData";
import Link from "next/link";
export default function MainNavigation() {
  const [open, setState] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setState(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setState]);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event?.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <div className=" ">
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="16"
        viewBox="0 0 30 16"
        fill="#2d7f71"
        className="cursor-pointer lg:hidden "
        onClick={toggleDrawer(true)}
      >
        <rect width="30" height="1.5"></rect>
        <rect y="7" width="20" height="1.5"></rect>
        <rect y="14" width="30" height="1.5"></rect>
      </svg>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        style={{ zIndex: 10 }}
        sx={{ position: "relative", width: "600px !important," }}
      >
        <Box
          sx={{
            height: 1,
            backgroundColor: "white",
            width: "100%",
          }}
        >
          {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
          {/* <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
            x
          </IconButton> */}
          <ul>
            {navData?.map((item: any, index: any) => (
              <li key={index} className="border-b-[1px] py-3 px-4 w-[300px]">
                <Link href={item?.link} onClick={toggleDrawer(false)}>
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </div>
  );
}
