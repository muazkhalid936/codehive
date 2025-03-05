"use client";
import React, { useState, useTransition } from "react";
import { FiMenu } from "react-icons/fi";
import { FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";
import { services, industries } from "../data";
import useUserStore from "../store/useUserStore";
import { usePathname, useRouter, Link } from "../i18n/routing";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Navbar = () => {
  const { language, setLanguage } = useUserStore();
  // setLanguage("en");
  const router = useRouter();
  const pathname = usePathname();
  const urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const params = useParams();
  const t = useTranslations("translation");

  const [work, setWork] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Build dropdown items
  const servicesDropdown = services?.map((service) => ({
    label: service.title,
    href: `/service/${service.slug}`,
  }));

  const industriesDropdown = industries?.map((industry) => ({
    label: industry.title,
    href: `/industries/${industry.slug}`,
  }));

  // Toggle language and update the URL to include the new locale
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

  return (
    <>
      <div
        className="bg-[#000b17] !font-lato w-full mx-auto z-[900] py-4 flex justify-center items-center"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="text-white container mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <img
                src="/Code hive Branding-01.png"
                className="w-48"
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden lg:flex  main_hero_slogan navbar_gap">
            <Link href="/about-us" className="flex justify-center items-center">
              {t("aboutUs1")}
            </Link>

            <div
              className="relative flex justify-center gap-3 items-center cursor-pointer"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <p>{t("services1")}</p>
              {isServicesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              {isServicesDropdownOpen && (
                <div className="absolute top-7 left-0 mt-1 bg-[#001A36] w-[350px] rounded shadow-lg z-50">
                  {servicesDropdown?.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className={`block py-2 px-4 text-white ${language==="en"?"border-l-4":"border-r-4"} border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]`}
                    >
                      {t(service.label)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
                          className={`block py-2 px-4 text-white ${language==="en"?"border-l-4":"border-r-4"} border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]`}
                        >
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
              {t("products")}
              {work ? <FaCaretUp /> : <FaCaretDown />}
              {work && (
                <div className="absolute top-7 mt-1 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
                  <Link
                    href="/industries/our-booking-system"
                    className={`block py-2 px-4 text-white ${language==="en"?"border-l-4":"border-r-4"} border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]`}
                  >
                    {t("ourBooking")}
                  </Link>
                  <Link
                    href="/industries/reward-hive"
                    className={`block py-2 px-4 text-white ${language==="en"?"border-l-4":"border-r-4"} border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]`}
                  >
                    {t("rewardHive")}
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-work" className="flex justify-center items-center">
              {t("ourWork2")}
            </Link>

            <button
              onClick={toggleLanguage}
              className={`font-archivo ${language} xl:mx-8 mx-2 text-[14px] sm:text-[16px] lg:text-[18px] font-lato text-white`}
            >
              {language === "en" ? "العربية" : "English"}
            </button>
            <Link href="/contact">
              <button className="mx-auto text-[16px] h-10 px-4 xl:px-10 rounded-full bg-blueColor">
                {t("contactUs5")}
              </button>
            </Link>
          </div>

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
        className={`fixed top-0 ${
          language === "ar" ? "left-0" : "right-0"
        } h-screen w-[70%] max-w-[300px] 
         !font-lato main_hero_slogan bg-[#000b17] text-white transform ${
           isSidebarOpen
             ? "translate-x-0"
             : language === "ar"
             ? "-translate-x-full"
             : "translate-x-full"
         } transition-transform duration-300 z-[999]`}
        dir={language === "ar" ? "rtl" : "ltr"}
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
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
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
                    className={`hover:bg-[#219DD92B] ${language==="en"?"hover:border-l-2":"hover:border-r-2"} hover:border-blueColor`}
                  >
                    <span className={`${language==="en"?"ml-2":"mr-3"}`}>{t(service.label)}</span>
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
              <div className="mt-2 flex flex-col space-y-2">
                {industriesDropdown?.map(
                  (industry) =>
                    industry.label !== "ourBooking" &&
                    industry.label !== "rewardHive" && (
                      <Link
                        key={industry.label}
                        href={industry.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`hover:bg-[#219DD92B] ${language==="en"?"hover:border-l-2":"hover:border-r-2"} hover:border-blueColor`}
                        >
                        {/* <span className="ml-2">{t(industry.label)}</span> */}
                        <span className={`${language==="en"?"ml-2":"mr-3"}`}>
                          {t(industry.label)}</span>

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
            <div className="mt-2 flex flex-col space-y-2">
              {work && (
                <>
                  <Link
                    href="/industries/our-booking-system"
                    className={`hover:bg-[#219DD92B] ${language==="en"?"hover:border-l-2":"hover:border-r-2"} hover:border-blueColor`}
                    >
                        <span className={`${language==="en"?"ml-2":"mr-3"}`}>
                        {t("ourBooking")}

                    </span>
                  </Link>
                  <Link
                    href="/industries/reward-hive"
                    className={`hover:bg-[#219DD92B] ${language==="en"?"hover:border-l-2":"hover:border-r-2"} hover:border-blueColor`}
                    >
                        <span className={`${language==="en"?"ml-2":"mr-3"}`}>
                        {t("rewardHive")}</span>
                  </Link>
                </>
              )}
            </div>
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
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
