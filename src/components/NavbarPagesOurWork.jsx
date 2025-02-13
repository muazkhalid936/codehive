"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { services, industries, ourWorks } from "../data";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp,FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const NavbarPages = ({ isBlack }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [work, setWork] = useState(false);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);

  const [isScrolling, setIsScrolling] = useState(false);
  let lastScrollY;

  useEffect(() => {
    lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsScrolling(true);
      } else if (window.scrollY < lastScrollY) {
        setIsScrolling(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);
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
      className={`flex !font-lato justify-center transition-all duration-300 ease-in-out z-[999] items-center w-full bg-transparent 
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
        <div className="hidden text-white lg:flex gap-4 main_hero_slogan lg:gap-3 xl:gap-8">
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
              <div className="absolute top-5 mt-1     left-0  bg-[#001A36]  w-[350px]  shadow-lg z-50">
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
        <div className="hidden  lg:flex  main_hero_slogan items-center gap-5">
          <div
            className="font-archivo main_hero_slogan font-lato 
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
          <FiMenu className=" text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[300px] 
          !font-lato main_hero_slogan bg-[#000b17] text-white transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-[999]`}
      >
        <div className="flex justify-end items-center px-4 py-4 border-b border-gray-600">
          {/* <Link href="/">
            <img
              src="/Code hive Branding-01.png"
              className="w-32"
              alt="logo"
              onClick={() => setIsSidebarOpen(false)}
            />
          </Link> */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-4 p-4">
          {/* About Us */}
          <Link
            href="/about-us"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-blueColor transition-colors"
          >
            About Us
          </Link>

          {/* Services (Collapsible) */}
          <div>
            <div
              className="flex items-center justify-between hover:text-blueColor cursor-pointer"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              <span>Services</span>
              {isServicesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isServicesDropdownOpen && (
              <div className="mt-2  flex flex-col space-y-2">
                {servicesDropdown?.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="hover:bg-[#219DD92B] hover:border-l-2 hover:bg- hover:border-blueColor"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className="ml-2">{service.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries (Collapsible) */}
          <div>
            <div
              className="flex items-center justify-between hover:text-blueColor cursor-pointer"
              onClick={() =>
                setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen)
              }
            >
              <span>Industries</span>
              {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isIndustriesDropdownOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                {industriesDropdown?.map(
                  (industry) =>
                    industry.label !== "Our Booking System" && (
                      <Link
                        key={industry.label}
                        href={industry.href}
                        className="hover:text-blueColor"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {industry.label}
                      </Link>
                    )
                )}
              </div>
            )}
          </div>

          {/* Products (Collapsible) */}
          <div>
            <div
              className="flex items-center justify-between hover:text-blueColor cursor-pointer"
              onClick={() => setWork(!work)}
            >
              <span>Products</span>
              {work ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {work && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  href="industries/our-booking-system"
                  className="hover:text-blueColor"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Our Booking System
                </Link>
              </div>
            )}
          </div>

          {/* Our Work */}
          <Link
            href="/our-work"
            className="hover:text-blueColor transition-colors"
            onClick={() => setIsSidebarOpen(false)}
          >
            Our Work
          </Link>

          {/* Language & Contact */}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-600 mt-4">
            <div className="font-lato">العربية</div>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              <button className="mx-auto text-[16px] h-10 w-40 rounded-full bg-blueColor">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPages;
