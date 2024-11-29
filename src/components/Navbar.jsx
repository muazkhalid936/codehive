"use client";
import React, { useState } from "react";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" bg-[#00011b] py-4">
      <div className=" text-white px-10  container mx-auto flex justify-between items-center">
        <div>
          <img src="/Code hive Branding-01.png" className="w-60" alt="logo" />
        </div>
        <div className=" hidden md:flex gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Products</Link>
          <Link href="/">Industries</Link>
          <Link href="/">Portfolio</Link>
        </div>

        <div className="hidden md:flex text-sm items-center gap-2">
          <button className=" ">Contact Us</button>
          <div className=" bg-white text-black rounded-full ">
            <FiArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="md:hidden" onClick={toggleSidebar}>
          <FiMenu className="w-6 h-6 cursor-pointer " />
        </div>
      </div>

      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          />
          <div
            className={`fixed top-0 left-0 w-64 h-full bg-[#00011b] text-white p-4 z-50 transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* <h2 className="text-lg font-bold">Menu</h2> */}
            <Link href="/" className="block py-2">
              Home
            </Link>
            <Link href="/" className="block py-2">
              About Us
            </Link>
            <Link href="/" className="block py-2">
              Services
            </Link>
            <Link href="/" className="block py-2">
              Products
            </Link>
            <Link href="/" className="block py-2">
              Industries
            </Link>
            <Link href="/" className="block py-2">
              Portfolio
            </Link>
            <button onClick={toggleSidebar} className="mt-4">
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
