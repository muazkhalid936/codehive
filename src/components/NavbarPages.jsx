"use client";
import React, { useState, useEffect } from "react";

// React icons
import { FiMenu } from "react-icons/fi";
import { FaCaretDown, FaCaretUp,FaTimes } from "react-icons/fa";

// Next.js Link
import Link from "next/link";

// Mock data imports (replace with actual data paths or APIs)
import { services, industries, ourWorks } from "../data";

const NavbarPages = ({ isBlack }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [work, setWork] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle scroll for dynamic navbar styles
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsScrolling(true);
      } else if (window.scrollY < lastScrollY) {
        setIsScrolling(false);
      }
      lastScrollY = window.scrollY;
    };

    // Adding scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Render dropdown menus based on data
  const servicesDropdown = services?.map((service) => ({
    label: service.title,
    href: `/service/${service.slug}`,
  }));

  const industriesDropdown = industries?.map((industry) => ({
    label: industry.title,
    href: `/industries/${industry.slug}`,
  }));

  const ourWorkDropdown = ourWorks?.map((ourWork) => ({
    label: ourWork.title,
    href: `/our-work/${ourWork.slug}`,
  }));

  return (
    <div
      className={` flex !font-lato justify-center transition-all duration-300 ease-in-out z-[999] items-center w-full 
      ${
        isScrolling ? "bg-white py-2 fixed" : "absolute py-4 bg-transparent"
      } top-0 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/Code hive Branding-02.png"
            className="w-40 md:w-60"
            alt="logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 main_hero_slogan md:gap-2  xl:gap-8">
          <Link href="/about-us">About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative flex justify-center gap-3 items-center cursor-pointer"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link href="/services">Services</Link>
            {isServicesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            {isServicesDropdownOpen && (
              <div className="absolute top-4 left-0 mt-2 bg-[#001A36] w-[350px] rounded shadow-lg z-50">
                {servicesDropdown?.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
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
            Products
            {work ? <FaCaretUp /> : <FaCaretDown />}
            {work && (
              <div className="absolute top-4 mt-2     left-0  bg-[#001A36]  w-[350px]  shadow-lg z-50">
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
        </div>

        {/* Call-to-Action */}
        <div className="hidden lg:flex text-[16px] items-center gap-5">
          <div className="font-archivo text-[16px] ">العربية</div>
          <Link href="/contact">
            <button className="h-10 bg-blueColor  main_hero_slogan px-5 rounded-full  text-white">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden" onClick={toggleSidebar}>
          <FiMenu
            className={`w-6 h-6 cursor-pointer duration-300 ease-in-out ${
              isSidebarOpen ? "rotate-90" : ""
            }`}
          />
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
