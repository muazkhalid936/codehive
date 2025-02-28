import React from "react";
import Spline from "@splinetool/react-spline/next";
import { Suspense } from "react";
const MainHeroModel = () => {
  return (
    <Suspense>
      <Spline className=" " scene="/Logo animation.spline" />
    </Suspense>
  );
};

export default MainHeroModel;
