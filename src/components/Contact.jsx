import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const ContactForm = () => {
  return (
    <div className="bg-[#000b17] flex justify-center items-center mx-auto container   py-32 relative z-10 mb-24">
      <div className="absolute bottom_right_vector -right-20 -bottom-20">
        <img
          src="/feature/VectorWithBG.png "
          alt=""
          className="origin-center -rotate-[125deg] w-[200px] md:w-[300px]"
        />
      </div>
      <div className="absolute top_left_vector left-3 -top-10">
        <img
          src="/feature/VectorWithoutBG.png"
          alt=""
          className="origin-center w-[200px] md:w-[300px] rotate-[-20deg]"
        />
      </div>
      <div class="w-[75%] mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#010B1770]  p-1 rounded-2xl">
        <div className="p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg">
          <div className="my-20">
            {" "}
            <h2 className="text-lg font-bold text-white xl:text-2xl text-center ">
              Let's Talk
            </h2>
            <h3 className="!font-light text-3xl header md:text-3xl lg:text-5xl xl:text-6xl mb-6 text-center">
              <span className="main-heading bg-gradient-to-r from-white via-white to-blueColor bg-clip-text text-transparent">
                Connect
              </span>{" "}
              <span className="text-blueColor main-heading">with us</span>
            </h3>
          </div>
          <form className="flex form-input flex-col gap-2 md:gap-5 xl:gap-10 px-6">
            <div className="flex flex-col md:flex-row gap-28">
              {" "}
              <div className="w-full border-b-2 border-slate-500 md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name*"
                  className=" rounded py-1"
                  required
                />
                {/* <hr className="border border-slate-500 py-1" /> */}
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="tel"
                  placeholder="Email*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-28 ">
              {" "}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Phone*"
                  className="py-1 rounded text-gray-600"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="url"
                  placeholder="Business name*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-28">
              {" "}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Years in Business*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Business Category*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-28">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Current Website*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="I'm interested in (e.g. Website Design)*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-28 ">
              {" "}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Business Size*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Budget*"
                  className="py-1 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                placeholder="Message*"
                className="py-1 rounded border-none outline-none bg-transparent text-white"
                required
              ></textarea>
              <hr className="border border-slate-500" />
            </div>
            <div className="flex justify-center lg:my-32   w-[70%] mx-auto">
              <button
                type="submit"
                className="bg-[#0c1b2c] flex gap-2 mx-auto justify-center items-center w-full text-white py-4 text-lg rounded-xl mt-4 "
              >
                Get Started
                <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
