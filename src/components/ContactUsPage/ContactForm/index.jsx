"use client";
import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import PhoneInput from "../../PhoneInput";
import "react-phone-input-2/lib/style.css"; // Import styles for the PhoneInput
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import useStore from "../../../store/useUserStore";
const ContactForm = () => {
  const t = useTranslations("translation");
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useStore();
  const [phone, setPhone] = useState("");
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    businessName: "",
    yearsInBusiness: "",
    businessCategory: "",
    currentWebsite: "",
    interestedIn: "",
    businessSize: "",
    budget: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    if (inputData[id]) {
      // If there's data in the input, apply the 'peer-focus' styles
      document.getElementById(id).classList.add("peer-focus");
    } else {
      // Remove the 'peer-focus' styles if the field is empty
      document.getElementById(id).classList.remove("peer-focus");
    }
  };

  return (
    <div className="relative container flex-1 sm:w-[75%]  mx-auto  z-[10] ">
      <div className="z-1">
        <div
          dir={language === "en" ? "ltr" : "rtl"}
          className=" bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#010B1770]   p-[2px] rounded-2xl"
        >
          <form
            className=" mx-auto pt-10 sm:pt-20   bg-[#041c30] text-white rounded-2xl overflow-hidden shadow-lg"
            // style={{
            //   transition: "all 0.3s ease-in-out",
            //   border: "2px solid",
            //   borderImageSource:
            //     "linear-gradient(133.88deg, rgba(1, 11, 23, 0.44) 1.04%, rgba(32, 147, 202, 0.44) 99.17%)",
            //   borderImageSlice: 1,
            // }}
          >
            <div className="">
              {" "}
              {/* <h2 className="text-lg font-bold text-white xl:text-2xl text-center ">
            Let's Talk
          </h2> */}
              <h3 className="!font-light text-3xl header md:text-[45px] mb-6 text-center">
                <span className="main-heading bg-gradient-to-r from-white to-blueColor bg-clip-text text-transparent">
                  {t("contactUs")}{" "}
                </span>
              </h3>
            </div>
            <div className="form-grid grid grid-cols-1 lg:grid-cols-2 gap-6  mt-8">
              {[
                // Map over the fields and create input fields
                { id: "name", placeholder: "fullName", type: "text" },
                { id: "email", placeholder: "emailPhone", type: "text" },
                // { id: "phone", placeholder: "Phone*", type: "tel" }, // Phone field moved to third position
                // { id: "businessName", placeholder: "Business Name", type: "text" },
                // {
                //   id: "yearsInBusiness",
                //   placeholder: "Years in Business",
                //   type: "text",
                // },
                // {
                //   id: "businessCategory",
                //   placeholder: "Business Category",
                //   type: "text",
                // },
                {
                  id: "interestedIn",
                  placeholder: "iMInterest",
                  type: "select",
                  options: [
                    "uiUxDesig1",
                    "appDevelop",
                    "websiteDe1",
                    "softwareD1",
                    "consultati",
                    "other",
                  ],
                },
                {
                  id: "currentWebsite",
                  placeholder: "currentIns",
                  type: "url",
                  width: "full",
                },
                // { id: "businessSize", placeholder: "Business Size", type: "text" },
                // { id: "budget", placeholder: "Budget", type: "text" },
              ].map((field, index) =>
                field.id === "phone" ? (
                  <div
                    key={field.id}
                    className="relative w-[90%] lg:w-[70%] mx-auto
                
                peer p-3 bg-[#041c30] text-white rounded-none focus:outline-none  border-b-2 border-gray-500 appearance-none pr-8 invalid:text-gray-400
                "
                  >
                    <PhoneInput />
                  </div>
                ) : field.type === "select" ? (
                  <div
                    key={field.id}
                    className="relative w-[90%] lg:w-[70%] mx-auto"
                  >
                    <select
                      id={field.id}
                      required
                      value={inputData[field.id]}
                      onChange={handleInputChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        setIsOpen(false); // Close dropdown when focus is lost
                      }}
                      onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown open/close state
                      className="peer p-3 bg-[#041c30] text-white rounded-none focus:outline-none w-full border-b-2 border-gray-500 appearance-none pr-8 invalid:text-gray-400"
                    >
                      <option value="" disabled selected hidden>
                        {t(field.placeholder)}
                      </option>
                      {field.options.map((option, index) => (
                        <option
                          key={index}
                          value={option}
                          className="text-white"
                        >
                          {t(option)}
                        </option>
                      ))}
                    </select>

                    {/* Icon toggles based on dropdown state */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      {isOpen ? (
                        <HiChevronUp className="text-gray-500" />
                      ) : (
                        <HiChevronDown className="text-gray-500" />
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    key={field.id}
                    className="relative  w-[90%] lg:w-[70%] mx-auto"
                  >
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={inputData[field.id]}
                      onChange={handleInputChange}
                      placeholder={t(field.placeholder)}
                      onBlur={handleBlur}
                      className="peer bg-[#041c30] p-3 text-white rounded-none focus:outline-none w-full  border-b-2 border-gray-500"
                    />
                  </div>
                )
              )}
            </div>
            <div className="relative w-[90%] lg:w-[86%] mx-auto my-4">
              <input
                id="budget"
                type="text"
                required
                // onChange={handleInputChange}
                placeholder={t("budget")}
                // onBlur={handleBlur}
                className="peer bg-[#041c30] p-3 text-white rounded-none focus:outline-none w-full  border-b-2 border-gray-500"
              />
            </div>
            {/* Message Field */}
            <div className="relative w-[90%] lg:w-[86%] mx-auto ">
              <textarea
                id="message"
                rows="4"
                placeholder={t("message")}
                required
                className="peer p-3 min-h-[100px] max-h-[300px] bg-[#041c30] text-white  focus:outline-none w-full  border-2 rounded-lg mt-10 border-gray-500"
              ></textarea>
              {/* <label
            htmlFor="message"
            className="absolute left-1 top-3 text-gray-500  transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-white peer-focus:font-bold"
          >
            Message*
          </label> */}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center my-10 sm:my-20 ">
              <button
                type="submit"
                className="flex items-center justify-center w-[30%] py-3 bg-slate-800 text-white font-semibold rounded-xl transition-colors"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        src="/technologies/shade.png"
        alt="image"
        className="absolute z-[10]  h-[800px] right-[-200px] top-[550px] "
        // className="h-[400px] md:h-[500px] w-full md:w-[60%] object-contain"
      />
      <img
        src="/technologies/shade.png"
        alt="image"
        className="absolute z-[10]  h-[800px] right-[-200px] top-[550px] "
        // className="h-[400px] md:h-[500px] w-full md:w-[60%] object-contain"
      />
    </div>
  );
};

export default ContactForm;
