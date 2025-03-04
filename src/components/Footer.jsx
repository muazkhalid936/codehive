"use client";
import { Link } from "../i18n/routing";
import React, { useEffect } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { useTranslations } from "next-intl";
import useStore from "../store/useUserStore";
const Footer = () => {
  const t = useTranslations("translation");
  const { language, setLanguage } = useStore();
  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "en");
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#0a1929]   to-[#020d1a] flex justify-center items-center py-[20px]  md:py-2 md:h-[250px]"
    dir={language==="en"?"ltr":"rtl"}
    >
      <div className="container flex flex-col md:flex-row gap-2 md:gap-0 mx-auto">
        <div className="flex  flex-col  md:w-[70%]  gap-2 sm:gap-4 md:gap-10 sm:mt-5  items-start">
          <div className="flex gap-4">
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <FaInstagram className="text-white w-7 h-7  " />
            </div>
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <FaTiktok className="text-white w-7 h-7  " />
            </div>
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <ImFacebook className="text-white w-7 h-7  " />
            </div>
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <FaLinkedinIn className="text-white w-7 h-7  " />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 main_hero_slogan text-white">
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              {language === "en" ? "Home" : "الصفحة"}
            </Link>
            <Link
              href="/about-us"
              className="hover:text-blueColor dura ease-in-out"
            >
              {language === "en" ? "About Us" : "عنا"}
            </Link>
            <Link
              href="/services"
              className="hover:text-blueColor dura ease-in-out"
            >
              {language === "en" ? "Services" : "الخدمات"}
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              {language === "en" ? "Industries" : "المجالات"}
            </Link>

            <Link
              href="/our-work"
              className="hover:text-blueColor dura ease-in-out"
            >
              {language === "en" ? "Our Work" : "   أعمالنا"}
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              {language === "en" ? "Contact Us" : "تحدث معنا"}
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              {t("privacyPol")}{" "}
            </Link>
          </div>
          <div className="text-gray-500 hidden sm:flex main_hero_slogan">
            <p>
              {language === "en"
                ? "© 2024 Codehive. All rights reserved."
                : ".كودھاف. جمع الحقوق محفوظة 2024 ©"}
            </p>
          </div>
        </div>
        <div className="flex flex-col  gap-1 md:w-[30%] justify-start  sm:items-end">
          <div>
            <p className="text-[30px] header xl:text-[50px]  main-heading  text-[#F6Be3C] ">
              {language === "en" ? "   Let's Talk?" : "لنبدأ الحدث؟ "}
            </p>
          </div>
          <p className="text-white main_hero_slogan font-bold jutify-end flex  ">
            {language === "en" ? "Contact Us" : "تحدث معنا"}
          </p>
          <p className="text-white main_hero_slogan ">
            {language === "en"
              ? "Phone: +971 4 234 2168"
              :  " رقم الھاتف : 2168 234 4 971+"}
              
          </p>
          <p className="text-white main_hero_slogan ">
            {language === "en"
              ? "Whatsapp: +971 54 220 3330"
              : "واتساب: 3330 220 54 971+"}
              
          </p>
          <p className="text-white main_hero_slogan ">
            {language === "en"
              ? "  Email: info@codehive.ae"
              : "info@codehive.ae :البريد الكتروني"}
          </p>
        </div>
        <div className="text-gray-500 flex sm:hidden justify-center main_hero_slogan">
          <p>
            {language === "en"
              ? "© 2024 Codehive. All rights reserved."
              : ".كودھاف. جمع الحقوق محفوظة 2024 ©"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
