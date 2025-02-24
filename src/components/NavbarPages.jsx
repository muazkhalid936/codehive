"use client";
import React, { useState, useEffect, useTransition } from "react";
import { FiMenu } from "react-icons/fi";
import { FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";
import { usePathname, useRouter, Link } from "../i18n/routing";
import { services, industries, ourWorks } from "../data";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import useStore from "../store/useUserStore";
const NavbarPages = ({ isBlack }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const toggleLanguage = () => {
    const nextLocale = language === "en" ? "ar" : "en";
    setLanguage(nextLocale);

    console.log(nextLocale);

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };
  const [isPending, startTransition] = useTransition();

  const t = useTranslations("translation");
  const { language, setLanguage } = useStore();
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
      dir={language === "ar" ? "rtl" : "ltr"}

    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/Code hive Branding-02.png" className="w-48" alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 main_hero_slogan md:gap-2  xl:gap-8">
          <Link href="/about-us" className="m-auto">{t("aboutUs1")}</Link>

          {/* {language==="en"?"Services" :"الخدمات"} Dropdown */}
          {/* Services Dropdown */}
          <div
            className="relative flex justify-center gap-3 items-center cursor-pointer"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link href="/services">{t("services1")}</Link>
            {isServicesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            {isServicesDropdownOpen && (
              <div className="absolute top-7 left-0 mt-1 bg-[#001A36] w-[350px] rounded shadow-lg z-50">
                {servicesDropdown?.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                  >
                    {t(service.label)}
                    {/* {service.label} */}
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
            {t("industries")}
            {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            {isIndustriesDropdownOpen && (
              <div className="absolute top-7 mt-1 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
                {industriesDropdown?.map(
                  (industry) =>
                    industry.label !== "ourBooking" &&
                    industry.label !== "rewardHive" && (
                      <Link
                        key={industry.label}
                        href={industry.href}
                        className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                      >
                        {/* {t(industry.label)} */}
                        {t(industry.label)}
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
            {language === "en" ? "Products" : "المنتجات"}
            {work ? <FaCaretUp /> : <FaCaretDown />}
            {work && (
              <div className="absolute top-7 mt-1 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
                <Link
                  href="/industries/our-booking-system"
                  className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                >
                  {t("ourBooking")}
                </Link>
                <Link
                  href="/industries/reward-hive"
                  className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                >
                  {t("rewardHive")}
                </Link>
              </div>
            )}
          </div>

          <Link href="/our-work" className="flex justify-center items-center">
            {language === "en" ? "Our Work" : "   أعمالنا"}
          </Link>
          <button
            onClick={toggleLanguage}
            className="font-archivo mx-8 text-[14px] sm:text-[16px] lg:text-[18px] font-lato text-black"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
          <Link href="/contact">
            <button className="mx-auto text-white text-[16px] h-10 w-40 rounded-full bg-blueColor">
              {language === "en" ? "Contact Us" : "تحدث معنا"}
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
        <div
          className={`fixed top-0 right-0 h-screen w-[80%] max-w-[300px] 
          !font-lato main_hero_slogan bg-[#000b17] text-white transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-[999]`}
        >
          <div className="flex justify-end items-center px-4 py-4 border-b border-gray-600">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-4 p-4">
            <Link
              href="/about-us"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-blueColor transition-colors"
            >
              {t("aboutUs")}
            </Link>

            {/* Services (Collapsible) */}
            <div>
              <div
                className="flex items-center justify-between hover:text-blueColor cursor-pointer"
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
              >
                <span>{t("services")}</span>
                {isServicesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              {isServicesDropdownOpen && (
                <div className="mt-2 flex flex-col space-y-2">
                  {servicesDropdown?.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className="hover:bg-[#219DD92B] hover:border-l-2 hover:border-blueColor"
                    >
                      <span className="ml-2">{t(service.label)}</span>
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
                <span>{t("industries")}</span>
                {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              {isIndustriesDropdownOpen && (
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  {industriesDropdown?.map(
                    (industry) =>
                      industry.label !== "ourBooking" &&
                      industry.label !== "rewardHive" && (
                        <Link
                          key={industry.label}
                          href={industry.href}
                          onClick={() => setIsSidebarOpen(false)}
                          className="hover:text-blueColor"
                        >
                          {t(industry.label)}
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
                <span>{t("products")}</span>
                {work ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              {work && (
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <Link
                    href="/industries/our-booking-system"
                    className="hover:text-blueColor"
                  >
                    {t("ourBooking")}
                  </Link>
                  <Link
                    href="/industries/reward-hive"
                    className="hover:text-blueColor"
                  >
                    {t("rewardHive")}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-work"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-blueColor transition-colors"
            >
              {t("ourWork2")}
            </Link>

            {/* Language & Contact */}
            <Link
              href="/contact"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-white transition-colors"
            >
              <button className="mx-auto main_hero_slogan h-7 sm:h-10 w-20 sm:w-40 rounded-full bg-blueColor">
                {t("contactUs5")}
              </button>
            </Link>
            <div className="flex justify-end gap-2 pt-2 border-t border-gray-600 mt-4">
              <button
                onClick={toggleLanguage}
                className="font-archivo main_hero_slogan font-lato text-white"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default NavbarPages;
