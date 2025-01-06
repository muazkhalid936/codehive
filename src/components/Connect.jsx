import React from "react";

const Connect = () => {
  return (
    <div className="container h-screen mx-auto ">
      <div>
        <form className=" mx-auto py-10 flex-col xl:px-32 rounded-[25px]  w-[90%] bg-gradient-to-br p-5  from-[#051e32] to-[#021322]">
          <div className="flex flex-col gap-2 ">
            <p className="text-white mx-auto xl:text-4xl font-extrabold font-gilroy">
              Let's Talk
            </p>
            <div className="flex mx-auto text-white gap-2 xl:gap-5 ">
              {" "}
              <h1 className="header text-blue-400 text-2xl md:text-4xl lg:text-6xl font-gilroy">
                {" "}
                Connect{" "}
              </h1>
              <h1 className="header text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-gilroy">
                with us
              </h1>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex gap-10 flex-1">
              <input
                type="text"
                placeholder="Name"
                className=" w-full outline-none  focus:text-[#1d8bc2] px-10 py-5 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
              />
              <input
                type="text"
                placeholder="Email Address*"
                className=" w-full outline-none focus:text-[#1d8bc2] px-10 py-2 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
              />
            </div>
            <div className="flex gap-10 flex-1">
              <input
                type="text"
                placeholder="Phone*"
                className=" w-full outline-none  focus:text-[#1d8bc2] px-10 py-5 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
              />
              <input
                type="text"
                placeholder="Current Website*"
                className=" w-full outline-none focus:text-[#1d8bc2] px-10 py-2 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
              />
            </div>
            <div className="flex gap-10 flex-1">
              <input
                type="text"
                placeholder="Name"
                className=" w-full outline-none  focus:text-[#1d8bc2] px-10 py-5 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
              />
              <input
                type="text"
                placeholder="Email*"
                className=" w-full outline-none focus:text-[#1d8bc2] px-10 py-2 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
