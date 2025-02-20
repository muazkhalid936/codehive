import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaAt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div className="w-[75%] mx-auto mb-[55px] bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#010B1770]   p-[2px] rounded-2xl">
      <div
        className=" mx-auto p-8   bg-[#041c30] text-white rounded-xl shadow-lg"
      
      >
        {/* Inner content div to apply border-radius */}
        <div className="rounded-xl overflow-hidden">
          <div className="my-5">
            {" "}
            <h3 className="!font-light text-3xl header md:text-[45px] mb-6 text-center">
              <span className="main-heading bg-gradient-to-r from-white via-white to-blueColor bg-clip-text text-transparent">
                Reach
              </span>{" "}
              <span className="text-blueColor main-heading"> us</span>
            </h3>
          </div>
          <div className="space-y-6 mb-8">
            {/* Phone */}
            <p className="flex items-center justify-center text-lg">
              <div className="flex items-center group">
                {/* <IoLogoWhatsapp className="bg-white group-hover:bg-blueColor  text-black rounded-full p-1 w-6 h-6 mr-2" /> */}
               < img src="/contact/wp.png" className="w-7 mr-3 " />
                <a
                  href="tel:+971542203330"
                  className=" text-white group-hover:text-blueColor   hover:underline"
                >
           Whatsapp: +971 54 220 3330
                </a>
              </div>
            </p>
            <p className="flex items-center justify-center text-lg">
              <div className="flex items-center group">
              < img src="/contact/phone.png" className="w-7 mr-3 " />
              <a
                  href="tel:+971542203330"
                  className=" text-white group-hover:text-blueColor   hover:underline"
                >
                  +971 54 220 3330
                </a>
              </div>
            </p>
            {/* Email */}
            <p className="flex items-center justify-center text-lg">
              <div className="flex items-center group">
              < img src="/contact/mail.png" className="w-7 mr-3 " />
              <a
                  href="mailto:info@codehive.ae"
                  className=" text-white group-hover:text-blueColor   hover:underline"
                >
                  info@codehive.ae
                </a>
              </div>
            </p>
            {/* Location */}
            <p className="flex items-center  justify-center text-lg">
            < img src="/contact/gps.png" className="w-7 mr-3 " />
            Office M-18, 1st floor, Sajaya Plaza Al Barsha 3, Dubai, UAE
            </p>
            <div className="flex items-center justify-center mt-2">
                <div className="flex items-center group">
                < img src="/contact/support.png" className="w-7 mr-3 " />
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
              <p className="text-[24px]  mt-10 font-semibold bg-gradient-to-r  from-white via-white to-blueColor bg-clip-text text-transparent">
              If you need any support, visit our office
             <br/> we’re always happy to assist you!
              </p>
           
            </div>
          </div>
          {/* Google Map */}
          <div className="w-[90%] justify-center h-96 rounded-lg overflow-hidden shadow-lg border-2 border-blue-500 mx-auto mt-4 mb-8">
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
  );
};

export default ContactInfo;
