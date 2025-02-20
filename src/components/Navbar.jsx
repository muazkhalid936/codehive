'use client';
import React, { useState, useTransition } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa';
import { services, industries } from '../data';
import useUserStore from '../store/useUserStore';
import { usePathname, useRouter, Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const Navbar = () => {
  const { language, setLanguage } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
  useState(false);
  const params = useParams();
  const t = useTranslations('translation');

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
    const nextLocale = language === 'en' ? 'ar' : 'en';
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
      {/* NAVBAR (Desktop & Tablet) */}
      <div className="bg-[#000b17] !font-lato w-full mx-auto z-[900] py-4 flex justify-center items-center">
        <div className="text-white container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="/Code hive Branding-01.png"
                className="w-48"
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 main_hero_slogan lg:gap-3 xl:gap-8">
            <Link href="/about-us">{t('aboutUs1')}</Link>

            {/* Services Dropdown */}
            <div
              className="relative flex justify-center gap-3 items-center cursor-pointer"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link href="/services">{t('services1')}</Link>
              {isServicesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              {isServicesDropdownOpen && (
                <div className="absolute top-5 left-0 mt-1 bg-[#001A36] w-[350px] rounded shadow-lg z-50">
                  {servicesDropdown?.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                    >
                      {t(service.label)}
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
              <Link href="/industries">{t('industries')}</Link>
              {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              {isIndustriesDropdownOpen && (
                <div className="absolute top-5 mt-1 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
                  {industriesDropdown?.map(
                    (industry) =>
                      industry.label !== 'Our Booking System' &&
                      industry.label !== 'Reward Hive' && (
                        <Link
                          key={industry.label}
                          href={industry.href}
                          className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                        >
                          {t(industry.label)}
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
              <Link href="/industries">{t('products')}</Link>
              {work ? <FaCaretUp /> : <FaCaretDown />}
              {work && (
                <div className="absolute top-5 mt-1 left-0 bg-[#001A36] w-[350px] shadow-lg z-50">
                  <Link
                    href="/industries/our-booking-system"
                    className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                  >
                    {t('ourBooking')}
                  </Link>
                  <Link
                    href="/industries/reward-hive"
                    className="block py-2 px-4 text-white border-l-4 border-[#001A36] hover:border-blueColor hover:bg-[#219DD92B]"
                  >
                    {t('rewardHive')}
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-work">{t('ourWork2')}</Link>
          </div>

          {/* Contact + Language (Desktop) */}
          <div className="hidden lg:flex text-sm lg:text-base xl:text-xl items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="font-archivo text-[14px] sm:text-[16px] lg:text-[18px] font-lato text-white"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <Link href="/contact">
              <button className="mx-auto text-[16px] h-10 w-40 rounded-full bg-blueColor">
                {t('contactUs5')}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden" onClick={toggleSidebar}>
            <FiMenu
              className={`w-6 h-6 cursor-pointer duration-300 ease-in-out ${
                isSidebarOpen ? 'rotate-90' : ''
              }`}
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[300px] 
          !font-lato main_hero_slogan bg-[#000b17] text-white transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
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
            {t('aboutUs')}
          </Link>

          {/* Services (Collapsible) */}
          <div>
            <div
              className="flex items-center justify-between hover:text-blueColor cursor-pointer"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              <span>{t('services')}</span>
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
              <span>{t('industries')}</span>
              {isIndustriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {isIndustriesDropdownOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                {industriesDropdown?.map(
                  (industry) =>
                    industry.label !== 'Our Booking System' && (
                      <Link
                        key={industry.label}
                        href={industry.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className="hover:text-blueColor"
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
              <span>{t('products')}</span>
              {work ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {work && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  href="/industries/our-booking-system"
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover:text-blueColor"
                >
                  {t('ourBooking')}
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/our-work"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-blueColor transition-colors"
          >
            {t('ourWork2')}
          </Link>

          {/* Language & Contact */}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-600 mt-4">
            <button
              onClick={toggleLanguage}
              className="font-archivo text-[14px] sm:text-[16px] lg:text-[18px] font-lato text-white"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            <Link
              href="/contact"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-white transition-colors"
            >
              <button className="mx-auto text-[16px] h-10 w-40 rounded-full bg-blueColor">
                {t('contactUs5')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
