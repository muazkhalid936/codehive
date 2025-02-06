"use client";
import React, { useRef, useEffect } from "react";

const PhoneInput = () => {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    // This code will run only on the client side
    // Dynamically import intl-tel-input
    import("intl-tel-input").then((module) => {
      // Some versions export it as default
      const intlTelInput = module.default || module;

      // Initialize the plugin on the input element
      intlTelInput(phoneInputRef.current, {
        initialCountry: "auto",
        geoIpLookup: function (callback) {
          // Optionally, auto-detect the user's country
          // Replace '<YOUR_TOKEN_HERE>' with your token if needed
          fetch("https://ipinfo.io/json?token=<YOUR_TOKEN_HERE>")
            .then((resp) => resp.json())
            .then((data) => {
              const countryCode =
                data && data.country ? data.country.toLowerCase() : "us";
              callback(countryCode);
            })
            .catch(() => callback("us"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // For formatting and validation
      });
    });
  }, []);

  return (
    <input
      type="tel"
      ref={phoneInputRef}
      placeholder="Enter your phone number"
      className="!px-0   !bg-[#041c30] focus:outline-none focus:ring-0 focus:border-0 focus:ring-transparent focus:ring-0 focus:border-0 focus:ring w-[200%]"
      //   style={{ padding: "8px", fontSize: "16px", width: "" }}
    />
  );
};

export default PhoneInput;
