import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaAt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-[#020b17] py-12 font-lato">
      <div
        className="max-w-5xl mx-auto p-8 mt-8 bg-[#041c30] text-white rounded-xl shadow-lg"
        style={{
          transition: "all 0.3s ease-in-out",
          border: "2px solid",
          borderImageSource:
            "linear-gradient(133.88deg, rgba(1, 11, 23, 0.44) 1.04%, rgba(32, 147, 202, 0.44) 99.17%)",
          borderImageSlice: 1,
        }}
      >
        {/* Inner content div to apply border-radius */}
        <div className="rounded-xl overflow-hidden">
          <h2 className="text-2xl font-bold text-center mb-8 leading-relaxed">
            Constant innovation has won us recognition from our peers, clients,
            and leading research firms!
          </h2>
          <div className="space-y-6 mb-8">
            {/* Phone */}
            <p className="flex items-center justify-center text-lg">
              <MdPhone className="bg-blueColor text-black rounded-full p-2 w-8 h-8 mr-2" />
              <a
                href="tel:+971542203330"
                className="text-blueColor font-semibold underline"
              >
                +971 54 220 3330
              </a>
            </p>
            {/* Email */}
            <p className="flex items-center justify-center text-lg">
              <MdEmail className="bg-white text-black rounded-full p-2 w-8 h-8 mr-2" />
              <a
                href="mailto:info@codehive.ae"
                className="text-white font-semibold hover:underline"
              >
                info@codehive.ae
              </a>
            </p>
            {/* Location */}
            <p className="flex items-center justify-center text-lg">
              <HiOutlineLocationMarker className="bg-white text-black rounded-full p-2 w-8 h-8 mr-2" />
              Office M-18, 1st floor, Sajaya Plaza Al Barsha 3, Dubai, UAE
            </p>
            {/* Support Section */}
            <div className="text-center">
              <p className="text-lg mt-10">
                If you need any type of support, please visit the Help Center
              </p>
              <div className="flex items-center justify-center mt-2">
                <FaAt className="bg-white text-black rounded-full p-2 w-8 h-8 mr-2" />
                <a
                  href="mailto:support@codehive.ae"
                  className="text-white font-semibold hover:underline"
                >
                  support@codehive.ae
                </a>
              </div>
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
