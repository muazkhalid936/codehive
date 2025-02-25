"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import { useTranslations } from "next-intl";

 const data = [
  {
    name: "Saif Al Alwar",
    position: "ceo",
    description: "asTheCeoOf",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/boss.png",
  },
  {
    name: "Shoaib Ahmad",
    position: "generalMan",
    description: "aStrategic",
    linkedin: "https://www.linkedin.com/in/omaralfahad/",
    twitter: "https://twitter.com/omaralfahad",
    picture: "/partnerwithtoppeople/Sohaib.png",
  },
  {
    name: "Yousef Issa",
    position: "projectMan",
    description: "anExpertIn",
    linkedin: "https://www.linkedin.com/in/hassan-sayed/",
    twitter: "https://twitter.com/hassan_sayed",
    picture: "/partnerwithtoppeople/Yousef.png",
  },
  {
    name: "Balawal Hussain",
    position: "technicalL",
    description: "aLeaderInI",
    linkedin: "https://www.linkedin.com/in/youssef-al-mansoori/",
    twitter: "https://twitter.com/youssef_almansoori",
    picture: "/partnerwithtoppeople/Bilawal.png",
  },
  {
    name: "Muskaan Jaipal",
    position: "headOfDesi",
    description: "aCreativeV",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/Muskan.png",
  },
  {
    name: "Asfand Naveed",
    position: "devopsEngi",
    description: "ourDevopsE",
    linkedin: "https://www.linkedin.com/in/omaralfahad/",
    twitter: "https://twitter.com/omaralfahad",
    picture: "/partnerwithtoppeople/Asfand.png",
  },
  {
    name: "Hina Liaqat",
    position: "dotnetDeve",
    description: "ourDotnetD",
    linkedin: "https://www.linkedin.com/in/hassan-sayed/",
    twitter: "https://twitter.com/hassan_sayed",
    picture: "/partnerwithtoppeople/Hina.png",
  },
  {
    name: "Muhammed Hamwi",
    position: "contentCre",
    description: "ourContent",
    linkedin: "https://www.linkedin.com/in/youssef-al-mansoori/",
    twitter: "https://twitter.com/youssef_almansoori",
    picture: "/partnerwithtoppeople/Hamvi.png",
  },
  {
    name: "Samer Alhelou",
    position: "seniorDeve",
    description: "bringingAd",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/Samer.png",
  },
];
import useStore from "../store/useUserStore";

const PartnerWithTopPeople = () => {
  const {language}=useStore();
  const t=useTranslations("translation");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [hoveredSlide, setHoveredSlide] = React.useState("");
const title=t("meetTheCre").split(" ");
  // Ensure selected card is removed and the list starts from the next one
  const filteredData = data.filter((_, index) => index !== selectedIndex);

  // Get the previous index (handles backward selection)
  const previousIndex = (selectedIndex - 1 + data.length) % data.length;

  // Shift the array correctly
  const shiftedData = [
    ...filteredData.slice(selectedIndex % filteredData.length),
    ...filteredData.slice(0, selectedIndex % filteredData.length),
  ];
  console.log(language)

  return (
    <div className="bg-[#000B17] py-10 font-lato sm:py-20 text-white"
    dir={language==="ar"?"rtl":"ltr"}

    >
      <div className="container  sm:px-4">

        <h2 className="text-center mb-14 sm:w-[65%] mx-auto sub_heading  leading-tight gilray-font">
          {title.map((word, index) => (
            <span
              key={index}
              className={index === 2 || index === 3 ? "text-[#219DD9]" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
        {/* Main Layout: Big Card & Swiper */}
        <div className="flex mt-3 sm:mt-10 h-[270px] sm:h-[500px] flex-row gap-8 items-start">
          {/* Left Side: Big Card */}
          <div className=" w-[50%] lg:w-[30%]">
            <div
              className="relative overflow-hidden justify-center flex h-[250px] sm:h-[400px] md:h-[500px] rounded-md"
              style={{
                border: "1px solid transparent",
                borderRadius: "26px",
                background: `linear-gradient(to right, #052036, #02101f),linear-gradient(30deg, transparent, #2194cd ,transparent)`,
                backgroundClip: "padding-box, border-box",
                backgroundOrigin: "padding-box, border-box",
              }}
            >
              <img
                src={data[selectedIndex].picture}
                alt={data[selectedIndex].name}
                className="px-1 pt-10 rounded-md object-contain"
              />
            </div>
          </div>

          {/* Right Side: Swiper */}
          <div 
          

          className="w-[50%] lg:w-[70%] flex flex-col justify-between h-[350px] sm:h-[500px]">
            <div

            >
              <h3 className="text-[18px] sm:text-[22px] font-bold">{data[selectedIndex].name}</h3>
              <h4 className="text-[16px] sm:text-[19px] text-[#219DD9] font-semibold sm:my-2">
                {t(data[selectedIndex].position)}
              </h4>
              <p className="main_hero_slogan leading-relaxed">{t(data[selectedIndex].description)}</p>
            </div>

            {/* Swiper - Shifted Order */}
            <div className="hidden sm:flex">
              <Swiper
                slidesPerView={3}
                loop={true}
                initialSlide={0}
                modules={[EffectFade, History, EffectCards, Autoplay]}
                breakpoints={{
                  240: { slidesPerView: 1.3 },
                  768: { slidesPerView: 2.3 },
                  1280: { slidesPerView: 3.3 },
                }}
              >
                {shiftedData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => {
                        setHoveredSlide(item.name);
                        setSelectedIndex(data.indexOf(item)); // Update actual index
                      }}
                      onMouseEnter={() => setHoveredSlide(item.name)}
                      onMouseLeave={() => setHoveredSlide("")}
                      className="flex flex-col text-center transition-transform duration-500 ease-in-out transform gap-2 scale-90 bg-gradient-to-b from-[#010B1770] to-[#2093CA70] relative rounded-xl  h-[367px] cursor-pointer pt-4 overflow-hidden hover:scale-100"
                      style={{
                        border: "1px solid transparent",
                        borderRadius: "26px",
                        background: `linear-gradient(to right, #052036, #02101f),linear-gradient(30deg, black, #2194cd ,black)`,
                        backgroundClip: "padding-box, border-box",
                        backgroundOrigin: "padding-box, border-box",
                      }}
                    >
                      {hoveredSlide !== item.name && (
                        <img
                          src={item.picture}
                          alt={item.name}
                          className="w-full h-full object-contain absolute transition-transform duration-500 ease-in-out transform"
                        />
                      )}
                      {hoveredSlide === item.name && (
                        <img
                          src={"/gray-vector.png"}
                          alt={item.name}
                          className="w-40 h-40 object-cover -z-10 absolute -right-5 top-20"
                        />
                      )}

                      <div className="absolute bottom-0 w-full flex flex-col items-center justify-center">
                        <div className="bg-gradient-to-t from-black to-transparent w-full px-2 sm:px-6 py-6 m-auto">
                          <h3 className={`text-white text-[15px] sm:text-[22px] font-semibold text-left w-full`}>
                            {item.name}
                          </h3>
                          <h3
                            className={`text-[#219DD9] main_hero_slogan font-semibold text-left w-full gap-2 ${
                              hoveredSlide === item.name ? "sm:mb-10" : "mb-0"
                            }`}
                          >
                            {t(item.position)}
                          </h3>
                          {hoveredSlide === item.name && (
                            <h3 className="text-white text-[10px] sm:text-[13px] font-light text-left w-full opacity-90 transition-opacity duration-500">
                              {t(item.description)}
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

    
        <div className="flex mt-3 sm:hidden">
              <Swiper
                // slidesPerView={3}
                loop={true}
                initialSlide={0}
                modules={[EffectFade, History, EffectCards, Autoplay]}
                breakpoints={{
                  240: { slidesPerView: 2.3 },
                  768: { slidesPerView: 2.3 },
                }}
              >
                {shiftedData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => {
                        setHoveredSlide(item.name);
                        setSelectedIndex(data.indexOf(item)); // Update actual index
                      }}
                      onMouseEnter={() => setHoveredSlide(item.name)}
                      onMouseLeave={() => setHoveredSlide("")}
                      className="flex flex-col text-center transition-transform duration-500 ease-in-out transform gap-2 scale-90 bg-gradient-to-b from-[#010B1770] to-[#2093CA70] relative rounded-xl sm:min-h-[350px] h-[250px] cursor-pointer sm:pt-4 overflow-hidden sm:hover:scale-100"
                      style={{
                        border: "1px solid transparent",
                        borderRadius: "26px",
                        background: `linear-gradient(to right, #052036, #02101f),linear-gradient(30deg, black, #2194cd ,black)`,
                        backgroundClip: "padding-box, border-box",
                        backgroundOrigin: "padding-box, border-box",
                      }}
                    >
                      {hoveredSlide !== item.name && (
                        <img
                          src={item.picture}
                          alt={item.name}
                          className="w-full h-full object-contain absolute transition-transform duration-500 ease-in-out transform"
                        />
                      )}
                      {hoveredSlide === item.name && (
                        <img
                          src={"/gray-vector.png"}
                          alt={item.name}
                          className="w-40 h-40 object-cover -z-10 absolute -right-5 top-20"
                        />
                      )}

                      <div className="absolute bottom-0 w-full flex flex-col items-center justify-center">
                        <div className="bg-gradient-to-t from-black to-transparent w-full px-2 sm:px-6 py-6 m-auto">
                          <h3 className="text-white text-[15px] sm:text-[22px] font-semibold text-left w-full">
                            {item.name}
                          </h3>
                          <h3
                            className={`text-[#219DD9] main_hero_slogan font-semibold text-left w-full gap-2 ${
                              hoveredSlide === item.name ? "sm:mb-10" : "mb-0"
                            }`}
                          >
                            {t(item.position)}
                          </h3>
                          {hoveredSlide === item.name && (
                            <h3 className="text-white text-[10px] sm:text-[13px] font-light text-left w-full opacity-90 transition-opacity duration-500">
                              {t(item.description)}
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

      </div>
    </div>
  );
};



export default PartnerWithTopPeople;
