"use client";
import React, { Fragment, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { services, industries, ourWorks } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const NavbarPages = ({ isBlack }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [work, setWork] = useState(false);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);

  const [isScrolling, setIsScrolling] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setIsScrolling(true);
    } else if (window.scrollY < lastScrollY) {
      setIsScrolling(false);
    }
    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    toggleSidebar();
  };

  let isDark = isBlack ? false : true;

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

  const ourworkDropdown = ourWorks?.map((ourwork) => {
    return {
      label: ourwork.title,
      href: `/our-work/${ourwork.slug}`,
    };
  });

  return (
    <div
      className={`flex justify-center transition-all duration-300 ease-in-out z-[999] items-center w-full bg-transparent 
  ${isScrolling ? "!bg-[#000B17] py-2 !fixed" : "py-4 absolute bg-transparent"} 
  
   top-0 z-50`}
    >
      <div className="  container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/Code hive Branding-01.png"
            className="w-40 md:w-60"
            alt="logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden text-white lg:flex gap-4 text-[16px] lg:gap-3 xl:gap-8">
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
              <div className="absolute top-4 left-0 mt-2 bg-[#001A36]  w-[350px] rounded shadow-lg z-50">
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
            Industries

            {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            {/* <FaChevronDown className="text-blue-600 text-base" /> */}
            {isIndustriesDropdownOpen && (
              <div className="absolute top-4 mt-2 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
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
                  href={"/industries/our-booking-system"}
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

        {/* Call-to-Action */}
        <div className="hidden  lg:flex  lg:text-base xl:text-xl items-center gap-5">
          <div
            className="font-archivo text-[14px] sm:text-[16px] lg:text-[18px] font-lato 
          text-white"
          >
            العربية
          </div>

          <Link href={"/contact"}>
            <button className="mx-auto  h-10 w-40 rounded-full  bg-transparent border-2 border-white text-white">
              Contact Us
            </button>
          </Link>
          {/* <div className="bg-white text-black rounded-full">
            <FiArrowUpRight className="w-5 h-5" />
          </div> */}
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden" onClick={toggleSidebar}>
          <FiMenu className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          />
          <div className="fixed top-0 left-0 w-64 h-full bg-white p-4 z-50">
            {[
              { href: "/", label: "Home", key: "home" },
              { href: "/about-us", label: "About Us", key: "about" },
              { href: "/services", label: "Services", key: "services" },
              { href: "/products", label: "Products", key: "products" },
              { href: "/industries", label: "Industries", key: "industries" },
              { href: "/portfolio", label: "Portfolio", key: "portfolio" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-2 text-[#010B17] hover:text-[#219DD9]"
                onClick={() => handleLinkClick(item.key)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarPages;
