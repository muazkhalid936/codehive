import React from "react";
import { useTranslations } from "next-intl";
import useStore from "../../../store/useUserStore";
const ContactInfo = () => {
  const t = useTranslations("translation");
  const { language } = useStore();
  return (
    <div className="  container xl:w-[75%]  ">

    <div
      className="mx-auto mb-[40px] sm:mb-[55px] sm:bg-gradient-to-br sm:from-[#010B1770] sm:via-[#2093CA70] sm:to-[#010B1770]   sm:p-[2px] rounded-2xl"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className=" mx-auto  sm:p-8   sm:bg-[#041c30] text-white rounded-xl shadow-lg">
        {/* Inner content div to apply border-radius */}
        <div className="rounded-xl overflow-hidden">
          <div className="sm:my-5">

{
  language === "en" ? 
  <h3 className="!font-light text-3xl header md:text-[45px] mb-6 text-center">
              <span className="main-heading bg-gradient-to-r from-white via-white to-blueColor bg-clip-text text-transparent">
                Reach
              </span>{" "}
              <span className="text-blueColor main-heading"> Us</span>
            </h3>:
            <h3 className="!font-light text-3xl header md:text-[45px] mb-6 text-center">
              <span className="main-heading bg-gradient-to-l from-white via-white to-blueColor bg-clip-text text-transparent">
              تواصل 
              </span>{" "}
              <span className="text-blueColor main-heading">معنا</span>
            </h3>
            }



          </div>
          <div className="space-y-6 mb-8">
            {/* Phone */}
            <p className="flex items-center justify-center main_hero_slogan">
              <div className="flex items-center group" dir>
                <img src="/contact/wp.png" className="w-7 mx-3 " />
                <a
                dir="ltr"
                  href="tel:+971542203330"
                  className=" text-white group-hover:text-blueColor   hover:underline"
                >
                  +971 54 220 3330
                </a>
              </div>
            </p>
            <p className="flex items-center justify-center main_hero_slogan">
              <div className="flex items-center group">
                <img src="/contact/phone.png" className="w-7 mx-3 " />
                <a
                                dir="ltr"

                  href="tel:+971542203330"
                  className=" text-white group-hover:text-blueColor   hover:underline"
                >
                  +971 4 234 2168
                </a>
              </div>
            </p>
            {/* Email */}
            <p className="flex items-center justify-center main_hero_slogan">
              <div className="flex items-center group">
                <img src="/contact/mail.png" className="w-7 mx-3 " />
                <a
                  href="mailto:info@codehive.ae"
                  className=" text-white group-hover:text-blueColor   hover:underline"
                >
                  info@codehive.ae
                </a>
              </div>
            </p>
            {/* Location */}
            <p className="flex w-[80%] sm:w-full mx-auto items-center justify-center text-start  main_hero_slogan">
              <img src="/contact/gps.png" className="w-7 mx-3 " />
              {t("officeM181")}
            </p>
            <div className="flex items-center justify-center mt-2">
              <div className="flex items-center group">
                <img src="/contact/support.png" className="w-7 mx-3 " />
                <a
                  href="mailto:support@codehive.ae"
                  className=" text-white group-hover:text-blueColor   hover:underline"
                >
                  support@codehive.ae
                </a>
              </div>
            </div>
            {/* Support Section */}
            <div className="text-center flex justify-center items-center  ">
              <p
                className={`text-[18px] sm:text-[24px] w-[300px] text-center sm:text-center sm:w-[400px]  mt-10 font-semibold ${
                  language === "en" ? "bg-gradient-to-r" : "bg-gradient-to-l"
                }  from-white via-white to-blueColor bg-clip-text text-transparent`}
              >
                {t("ifYouNeedA")}
              </p>
            </div>
          </div>
          {/* Google Map */}
          <div className="sm:w-[90%] justify-center h-40 sm:h-96 rounded-lg overflow-hidden shadow-lg sm:border-2 sm:border-blue-500 mx-auto sm:mt-4 sm:mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2597532511018!2d55.183246274373104!3d25.093067035912366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8118ba0df3%3A0xb5cad9ae91ba6430!2sSajaya%20Plaza!5e0!3m2!1sen!2s!4v1734681070827!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

    
    </div>
    </div>
  );
};

export default ContactInfo;
