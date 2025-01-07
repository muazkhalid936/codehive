"use client";
import React, { use, useState } from "react";
import { FiMenu } from "react-icons/fi";

import Link from "next/link";
import { services, industries, ourWorks } from "../data"; // Make sure to import services and industries
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const [work, setWork] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const servicesDropdown = services?.map((service) => {
    return {
      label: service.title,
      href: `/service/${service.slug}`,
    };
  });

  const industriesDropdown = industries?.map((industry) => {
    return {
      label: industry.title,
      href: `/industries/${industry.slug}`,
    };
  });

  return (
    <div className="bg-[#000b17] fixed w-full mx-auto z-[900]  py-4 flex justify-center items-center">
      <div className="text-white  container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            {" "}
            <img
              src="/Code hive Branding-01.png"
              className="w-40 md:w-60"
              alt="logo"
            />
          </Link>
        </div>

        <div className="hidden lg:flex gap-4 main_hero_slogan lg:gap-3 xl:gap-8">
          {/* <Link href="/">Home</Link> */}
          <Link href="/about-us">About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative flex justify-center gap-3 items-center cursor-pointer"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link href="/services">Services</Link>
            {/* Services  */}

            {isServicesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            {/* <FaChevronDown className="text-blue-600 text-base" /> */}
            {isServicesDropdownOpen && (
              <div className="absolute top-5 left-0 mt-2 bg-[#001A36]  w-[350px] rounded shadow-lg z-50">
                {/* <Link
                  href="/services"
                  className="block py-2 px-4 text-white hover:bg-[#219DD92B]"
                >
                  All Services
                </Link> */}
                {servicesDropdown?.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block py-2 px-4  text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative flex justify-center gap-3 items-center cursor-pointer"
            onMouseEnter={() => setIsIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIsIndustriesDropdownOpen(false)}
          >
            <Link href={"/industries"}>Industries</Link>

            {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            {/* <FaChevronDown className="text-blue-600 text-base" /> */}
            {isIndustriesDropdownOpen && (
              <div className="absolute top-5 mt-2 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
                {industriesDropdown?.map(
                  (industry) =>
                    industry.label !== "Our Booking System" && (
                      <Link
                        key={industry.label}
                        href={industry.href}
                        className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                      >
                        {industry.label}
                      </Link>
                    )
                )}
              </div>
            )}
          </div>
          <div
            className="relative flex justify-center gap-3 items-center cursor-pointer"
            onMouseEnter={() => setWork(true)}
            onMouseLeave={() => setWork(false)}
          >
            <Link href={"/industries"}>Products</Link>

            {work ? <FaCaretUp /> : <FaCaretDown />}
            {work && (
              <div className="absolute top-5 mt-2     left-0  bg-[#001A36]  w-[350px]  shadow-lg z-50">
                <Link
                  // key={industry.label}
                  href={"industries/our-booking-system"}
                  className="block py-2 px-4  text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                >
                  Our Booking System
                </Link>
              </div>
            )}
          </div>

          <Link href="/our-work">Our Work</Link>
          {/* <Link href="/contact-us">Contact</Link> */}
        </div>
        <div className="hidden  lg:flex text-sm lg:text-base xl:text-xl items-center gap-5">
          <div
            className="font-archivo text-[14px] sm:text-[16px] lg:text-[18px] font-lato 
          text-white"
          >
            العربية
          </div>

          <Link href={"/contact"}>
            <button className="mx-auto text-[16px]  h-10 w-40 rounded-full  bg-blueColor">
              Contact Us
            </button>
          </Link>
          {/* <div className="bg-white text-black rounded-full">
            <FiArrowUpRight className="w-5 h-5" />
          </div> */}
        </div>

        <div className="lg:hidden" onClick={toggleSidebar}>
          <FiMenu
            className={`w-6 h-6 cursor-pointer duration-300 ease-in-out ${
              isSidebarOpen ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>

      {/* Sidebar */}
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
            <Link href="/" className="block py-2">
              Home
            </Link>
            <Link href="/about-us" className="block py-2">
              About Us
            </Link>
            <Link href="/services" className="block py-2">
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
