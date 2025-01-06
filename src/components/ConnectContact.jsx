import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import FeatureSlider from "./FeatureSlider";

const Connect = ({ children, sliderData }) => {
  return (
    <div className="overflow-hidden py-10 bg-[#000B17]">
      <div className="content">{children}</div>
      {sliderData && <FeatureSlider data={sliderData} from="contact" />}
    </div>
  );
};

export default Connect;
