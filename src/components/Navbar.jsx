"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";
import { services, industries } from "../data";

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
    <>
      {/* NAVBAR (Desktop & Tablet) */}
      <div className="bg-[#000b17] !font-lato w-full mx-auto z-[900] py-4 flex justify-center items-center">
        <div className="text-white container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="/Code hive Branding-01.png"
                className="w-40 md:w-60"
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 main_hero_slogan lg:gap-3 xl:gap-8">
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
                <div className="absolute top-5 left-0 mt-1 bg-[#001A36] w-[350px] rounded shadow-lg z-50">
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
              <Link href="/industries">Industries</Link>
              {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              {isIndustriesDropdownOpen && (
                <div className="absolute top-5 mt-1 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
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

            {/* Products Dropdown */}
            <div
              className="relative flex justify-center gap-3 items-center cursor-pointer"
              onMouseEnter={() => setWork(true)}
              onMouseLeave={() => setWork(false)}
            >
              <Link href="/industries">Products</Link>
              {work ? <FaCaretUp /> : <FaCaretDown />}
              {work && (
                <div className="absolute top-5 mt-1 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
                  <Link
                    href="industries/our-booking-system"
                    className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                  >
                    Our Booking System
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-work">Our Work</Link>
          </div>

          {/* Contact + Language (Desktop) */}
          <div className="hidden lg:flex text-sm lg:text-base xl:text-xl items-center gap-5">
            <div className="font-archivo text-[14px] sm:text-[16px] lg:text-[18px] font-lato text-white">
              العربية
            </div>
            <Link href="/contact">
              <button className="mx-auto text-[16px] h-10 w-40 rounded-full bg-blueColor">
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
      </div>

      {/* SIDEBAR (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[300px] 
          !font-lato main_hero_slogan bg-[#000b17] text-white transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-[999]`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
          <Link href="/">
            <img
              src="/Code hive Branding-01.png"
              className="w-32"
              alt="logo"
              onClick={() => setIsSidebarOpen(false)}
            />
          </Link>
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
    </>
  );
};

export default Navbar;
