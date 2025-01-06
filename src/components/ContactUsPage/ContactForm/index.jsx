"use client";
import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import PhoneInput from "react-phone-input-2";
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
    <div className="contact-form bg-[#020b17] py-20">
      <h3 className="text-center text-white text-2xl font-semibold mb-8">
        Alternatively, you can fill out the form below, and we’ll get back to
        you as soon as possible.
      </h3>
      <form
        className="max-w-5xl mx-auto p-8 mt-8 bg-[#041c30] text-white rounded-3xl overflow-hidden shadow-lg"
        style={{
          transition: "all 0.3s ease-in-out",
          border: "2px solid",
          borderImageSource:
            "linear-gradient(133.88deg, rgba(1, 11, 23, 0.44) 1.04%, rgba(32, 147, 202, 0.44) 99.17%)",
          borderImageSlice: 1,
        }}
      >
        <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-8">
          {[
            // Map over the fields and create input fields
            { id: "name", placeholder: "Name*", type: "text" },
            { id: "email", placeholder: "Email*", type: "email" },
            { id: "phone", placeholder: "Phone*", type: "tel" }, // Phone field moved to third position
            { id: "businessName", placeholder: "Business Name*", type: "text" },
            {
              id: "yearsInBusiness",
              placeholder: "Years in Business*",
              type: "text",
            },
            {
              id: "businessCategory",
              placeholder: "Business Category*",
              type: "text",
            },
            {
              id: "currentWebsite",
              placeholder: "Current Website*",
              type: "url",
            },
            {
              id: "interestedIn",
              placeholder: "I’m interested in (e.g., Website Design)*",
              type: "text",
            },
            { id: "businessSize", placeholder: "Business Size*", type: "text" },
            { id: "budget", placeholder: "Budget*", type: "text" },
          ].map((field, index) =>
            field.id === "phone" ? (
              <div key={field.id} className="relative w-[70%] mx-auto">
                <PhoneInput
                  country={"us"} // Default country code
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    width: "100%",
                    backgroundColor: "#041c30",
                    color: "white",
                    border: "none",
                    borderBottom: "2px solid gray",
                    borderRadius: 0,
                    padding: "12px",
                    fontSize: "14px",
                    paddingRight: "0px",
                    // marginLeft: "-10px", // Align the input text to make room for the flag
                  }}
                  buttonStyle={{
                    position: "absolute",
                    right: "10px", // Flag on the right side
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "transparent",
                    border: "none",
                    marginLeft: "0",
                  }}
                  dropdownStyle={{
                    backgroundColor: "#041c30",
                    color: "white",
                  }}
                  containerClass="phone-input-container"
                  inputClass="phone-input-field"
                  enableSearch={true} // Allows searching for countries
                  disableCountryCode={true} // Hides the country code in the input field
                  disableDropdown={false} // Keeps the dropdown for flags
                  placeholder="Phone*" // Placeholder updated to Phone
                />
              </div>
            ) : (
              <div key={field.id} className="relative w-[70%] mx-auto">
                <input
                  id={field.id}
                  type={field.type}
                  placeholder=" "
                  required
                  value={inputData[field.id]}
                  onChange={handleInputChange}
                  onBlur={handleBlur} // Check if the field has a value when it loses focus
                  className="peer p-3 bg-[#041c30] text-white rounded-none focus:outline-none w-full  border-b-2 border-gray-500"
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-1 top-3 text-gray-500  transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-white peer-focus:font-bold peer-valid:top-0 peer-valid:text-white peer-valid:font-bold"
                >
                  {field.placeholder}
                </label>
              </div>
            )
          )}
        </div>

        {/* Message Field */}
        <div className="relative w-[86%] mx-auto mb-28">
          <textarea
            id="message"
            rows="4"
            placeholder=" "
            required
            className="peer p-3 bg-[#041c30] text-white rounded-none focus:outline-none w-full  border-b-2 border-gray-500"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-1 top-3 text-gray-500  transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-white peer-focus:font-bold"
          >
            Message*
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-20">
          <button
            type="submit"
            className="flex items-center justify-center w-[500px] py-3 bg-slate-800 text-white font-semibold rounded-xl transition-colors"
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
