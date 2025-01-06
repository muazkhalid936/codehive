"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a1929]   to-[#020d1a] flex justify-center items-center py-10  md:py-2 md:h-[300px]">
      <div className="container flex flex-col md:flex-row gap-10 md:gap-0 mx-auto">
        <div className="flex  flex-col  md:w-[70%] gap-4 md:gap-0 justify-between items-start">
          <div className="flex gap-4">
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <FaFacebookF className="text-white w-7 h-7  " />
            </div>
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <FaInstagram className="text-white w-7 h-7  " />
            </div>
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <FaLinkedinIn className="text-white w-7 h-7  " />
            </div>
            <div className="bg-transparent cursor-pointer group transition-all duration-300 border border-white hover:border-blueColor   hover:bg-blueColor  rounded-full p-2">
              <FaXTwitter className="text-white w-7 h-7  " />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-white">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Services</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Site Map</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
          <div className="text-white">
            <p>&copy; 2024 Codehive. All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-col  gap-3 md:w-[30%] justify-start  items-end">
          <div>
            <p className="text-[20px] header xl:text-6xl sm:text-3xl  md:text-5xl  main-heading  text-[#F6Be3C] ">
              Let's Talk?
            </p>
          </div>
          <p className="text-white jutify-end flex  ">Contact us</p>
          <p className="text-white ">Phone: +971 54 220 3330</p>
          <p className="text-white ">Email: info@codehive.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
