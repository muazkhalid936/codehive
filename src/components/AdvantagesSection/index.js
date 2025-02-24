"use client";

import React from "react";
import { useTranslations } from "next-intl";

const AdvantagesSection = ({ data }) => {
  const t = useTranslations("translation");
  return (
    <section className="bg-white py-10 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="sub_heading  text-center text-gray-900 mb-5 gilray-font">
          {t(data.title)
            .split(" ")
            .map((word, index) => (
              <span
                key={index}
                className={`${
                  index === data.title.split(" ").length - 1
                    ? "text-[#219DD9]"
                    : ""
                }`}
              >
                {word}{" "}
              </span>
            ))}
        </h2>
        <div className="flex justify-center mb-10 items-center">
          <p className="main_hero_slogan text-[#858585]">
            {t(data.description)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="relative  rounded-lg overflow-hidden shadow-lg   "
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent  bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className=" text-[18px] font-semibold  text-white mb-2">
                  {t(card.title)}
                </h3>
                <p className="main_hero_slogan text-gray-300">
                  {t(card.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
