"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a1929]   to-[#020d1a] flex justify-center items-center py-10  md:py-2 md:h-[250px]">
      <div className="container flex flex-col md:flex-row gap-10 md:gap-0 mx-auto">
        <div className="flex  flex-col  md:w-[70%] gap-4 md:gap-10 mt-5  items-start">
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
              Home
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              About Us
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              Services
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              Blog
            </Link>

            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              Contact Us
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              Site Map
            </Link>
            <Link href="/" className="hover:text-blueColor dura ease-in-out">
              Privacy Policy
            </Link>
          </div>
          <div className="text-gray-500 hidden sm:flex main_hero_slogan">
            <p>&copy; 2024 Codehive. All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-col  gap-3 md:w-[30%] justify-start  sm:items-end">
          <div>
            <p className="text-[30px] header xl:text-[50px]  main-heading  text-[#F6Be3C] ">
              Let's Talk?
            </p>
          </div>
          <p className="text-white main_hero_slogan jutify-end flex  ">
            Contact us
          </p>
          <p className="text-white main_hero_slogan ">
            Phone: +971 4 234 2168{" "}
          </p>
          <p className="text-white main_hero_slogan ">
            Whatsapp: +971 54 220 3330
          </p>
          <p className="text-white main_hero_slogan ">
            Email: info@codehive.com
          </p>
        </div>
        <div className="text-gray-500 flex sm:hidden justify-center main_hero_slogan">
          <p>&copy; 2024 Codehive. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
