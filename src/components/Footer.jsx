"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#00011b] flex justify-center items-center h-[400px]">
      <div className="container flex mx-auto">
        <div className="flex  flex-col  md:w-[70%] gap-4  items-start">
          <div className="flex gap-4">
            <div className="bg-white cursor-pointer group transition-all duration-300  hover:bg-blue-300 hover:text-white rounded-full p-2">
              <FaFacebookF className="text-[#00011b] w-7 h-7 group-hover:text-white" />
            </div>

            <div className="bg-white cursor-pointer group transition-all duration-300  hover:bg-blue-300 hover:text-white rounded-full p-2">
              <FaInstagram className="text-[#00011b] w-7 h-7 group-hover:text-white" />
            </div>

            <div className="bg-white cursor-pointer group transition-all duration-300  hover:bg-blue-300 hover:text-white rounded-full p-2">
              <FaLinkedin className="text-[#00011b] w-7 h-7 group-hover:text-white" />
            </div>

            <div className="bg-white cursor-pointer group transition-all duration-300  hover:bg-blue-300 hover:text-white rounded-full p-2">
              <FaXTwitter className="text-[#00011b] w-7 h-7 group-hover:text-white" />
            </div>
          </div>

          <div className="flex gap-4 text-white">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Services</Link>
            <Link href="/">Products</Link>
            <Link href="/">Industries</Link>
            <Link href="/">Portfolio</Link>
          </div>
          <div className="text-white">
            <p>&copy; 2024 Codehive. All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-col  gap-3 md:w-[30%] justify-start items-start">
          <div>
            <p className="text-6xl text-yellow-500 font-extrabold">
              Let's Talk?
            </p>
          </div>
          <p className="text-white ">Contact us</p>
          <p className="text-white ">Phone: +971 54 220 3330</p>
          <p className="text-white ">Email: info@codehive.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
