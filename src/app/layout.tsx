/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import logoImg from "../../assets/images/logoImg.png";
import Image from "next/image";
import Link from "next/link";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Himalatics",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://js.stripe.com/v3/"></script>
        <title>Himalatics</title>
        <link rel="icon" href="../../assets/images/logoImg.png" />
      </head>
      <body className=" w-full min-h-screen h-auto ubuntu-font relative  ">
        <div className="bg-primary h-[41px] text-secondry flex items-center justify-center text-[12px]">
          Free shipping
          {/* on order over */}
          {/* <span className="text-white mx-[2px]"> &nbsp;$30 </span> */}!
          <span className="text-white hover:text-secondry hover:cursor-pointer">
            &nbsp;
            <Link href="/products">
              <span>Shop Now</span>
            </Link>
          </span>
        </div>
        <div className="duration-1000 sticky top-0 z-10">
          <Header />
        </div>
        <div className=" ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
