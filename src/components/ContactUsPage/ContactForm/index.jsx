"use client";
import React, { useState } from "react";
import { HiArrowUpRight, HiChevronDown } from "react-icons/hi2"; // Import the chevron icon
import PhoneInput from "../../PhoneInput";
import "react-phone-input-2/lib/style.css"; // Import styles for the PhoneInput

const ContactForm = () => {
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
    <div className="w-[75%] mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#010B1770]   p-[2px] rounded-2xl">
      <form
        className=" mx-auto py-20   bg-[#041c30] text-white rounded-2xl overflow-hidden shadow-lg"
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
          <h2 className="text-lg font-bold text-white xl:text-2xl text-center ">
            Let's Talk
          </h2>
          <h3 className="!font-light text-3xl header md:text-[45px] mb-6 text-center">
            <span className="main-heading bg-gradient-to-r from-white via-white to-blueColor bg-clip-text text-transparent">
              Connect
            </span>{" "}
            <span className="text-blueColor main-heading">with us</span>
          </h3>
        </div>
        <div className="form-grid grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mt-8">
          {[
            // Map over the fields and create input fields
            { id: "name", placeholder: "Full Name*", type: "text" },
            { id: "email", placeholder: "Email", type: "email" },
            { id: "phone", placeholder: "Phone*", type: "tel" }, // Phone field moved to third position
            { id: "businessName", placeholder: "Business Name", type: "text" },
            {
              id: "yearsInBusiness",
              placeholder: "Years in Business",
              type: "text",
            },
            {
              id: "businessCategory",
              placeholder: "Business Category",
              type: "text",
            },
            {
              id: "currentWebsite",
              placeholder: "Current Insstagram/Website",
              type: "url",
            },
            {
              id: "interestedIn",
              placeholder: "I’m interested in ",
              type: "select",
              options: [
                "UI/UX Design",
                "App Development",
                "Website Development",
                "Software Development",
                "Consultation",
                "Other",
              ],
            },
            { id: "businessSize", placeholder: "Business Size", type: "text" },
            { id: "budget", placeholder: "Budget", type: "text" },
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
              <div key={field.id} className="relative w-[90%] lg:w-[70%] mx-auto">
                <select
                  id={field.id}
                  required
                  value={inputData[field.id]}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="peer p-3 bg-[#041c30] text-white rounded-none focus:outline-none w-full border-b-2 border-gray-500 appearance-none pr-8 invalid:text-gray-400" // Added invalid:text-gray-400
                >
                  <option value="" disabled selected>
                    {field.placeholder}
                  </option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option} className="text-white">
                      {option}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <HiChevronDown className="text-gray-500" />{" "}
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
                  placeholder={field.placeholder}
                  onBlur={handleBlur}
                  className="peer bg-[#041c30] p-3 text-white rounded-none focus:outline-none w-full  border-b-2 border-gray-500"
                />
              </div>
            )
          )}
        </div>

        {/* Message Field */}
        <div className="relative w-[90%] lg:w-[86%] mx-auto mb-28">
          <textarea
            id="message"
            rows="4"
            placeholder="Message*"
            required
            className="peer p-3 min-h-[100px] max-h-[300px] bg-[#041c30] text-white rounded-none focus:outline-none w-full  border-b-2 border-gray-500"
          ></textarea>
          {/* <label
            htmlFor="message"
            className="absolute left-1 top-3 text-gray-500  transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-white peer-focus:font-bold"
          >
            Message*
          </label> */}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-20">
          <button
            type="submit"
            className="flex items-center justify-center w-[50%] py-3 bg-slate-800 text-white font-semibold rounded-xl transition-colors"
          >
            Get Started
            <span className="ml-2 flex items-center justify-center w-5 h-5 bg-white text-black rounded-full">
              <HiArrowUpRight />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
