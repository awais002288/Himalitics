import React from "react";
import Ingredients from "./Ingredients/Index";
import Testimonials from "./Testimonials/Index";
import Disclaimer from "./Disclaimer/Index";
import HeaderHome from "./HeaderHome/Index";
import RiskFree from "../RiskFree/Index";
export default function HomePage() {
  return (
    <div className="min-h-screen   justify-center bg-gray-400 relative">
      <HeaderHome />
      <Ingredients />
      <RiskFree />

      <Testimonials />
      <Disclaimer />
    </div>
  );
}
