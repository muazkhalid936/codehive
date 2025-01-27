// 'use client';
// import React from 'react';
// import { HiArrowUpRight, HiMiniCheck } from 'react-icons/hi2';

// const Packages = ({ packages = [] }) => {
//   if (!packages || packages.length === 0) {
//     return <div>No packages available</div>;
//   }

//   return (
//     <div className="flex flex-col items-center gap-6 p-6 bg-[#000C1A]" style={{ minHeight: '120vh' }}>
//       <h2 className="mb-20 mt-12 text-center text-5xl font-extrabold leading-[55px]">
//         <span className="text-white">Monthly </span>
//         <span className="text-[#1E90FF]">Packages</span>
//       </h2>

//       <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-full md:w-3/4">
//         {packages.map((pkg, index) => (
//           <div
//             key={index}
//             className={`relative text-white p-4 md:p-6 rounded-3xl shadow-lg w-full md:w-3/4 flex flex-col ${pkg.mostPopular ? 'transform -translate-y-5 scale-105' : 'transform translate-y-3 scale-95'
//               }`}
//             style={{
//               transition: 'all 0.3s ease-in-out',
//               border: '2px solid',
//               borderImageSource:
//                 'linear-gradient(133.88deg, rgba(1, 11, 23, 0.44) 1.04%, rgba(32, 147, 202, 0.44) 99.17%)',
//               borderImageSlice: 1,
//               backgroundColor: '#000C1A',
//               borderRadius: '200px',
//               height: '680px',
//               marginBottom: '0px',
//             }}
//           >
//             {pkg.mostPopular && (
//               <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-[#1FCB78] border border-[#1FCB78] px-5 py-3 text-lg font-semibold rounded-full z-20 my-6">
//                 Most Popular
//               </span>
//             )}

//             <h3 className={`text-2xl font-bold mb-4 text-center ${pkg.mostPopular ? 'mt-20' : ''}`}>
//               {pkg.title}
//             </h3>

//             <p className="text-[18px] md:text-[20px] mb-4 text-gray-400 text-center">{pkg.description}</p>

//             <div className="text-center mb-4">
//               <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
//                 <span className="truncate">Get Started</span>
//                 <span
//                   className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
//                   style={{ width: '24px', height: '24px' }}
//                 >
//                   <HiArrowUpRight size={16} />
//                 </span>
//               </button>
//             </div>

//             <hr className="border-t border-[rgba(255,255,255,0.17)] w-full my-3 md:my-4" />

//             <div className="flex-grow">
//               <ul className={`pr-2 overflow-hidden overflow-y-scroll ${index == 2 ? "h-[300px]" : "h-[400px]"}`}>
//                 {pkg.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-6 mb-3">
//                     <span
//                       className="flex items-center justify-center rounded-full bg-white text-black font-bold"
//                       style={{ width: '24px', height: '24px' }}
//                     >
//                       <HiMiniCheck size={16} />
//                     </span>
//                     <span className="text-gray-300 text-lg">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Packages;
import React from "react";
import { HiArrowUpRight, HiMiniCheck } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";

import "./style.css";
const index = () => {
  const features = [
    { name: "Basic appointment scheduling", available: true },
    { name: "Online payments", available: true },
    { name: "Customer management", available: true },
    { name: "Map Location", available: true },
    { name: "Appointment Notifications", available: true },
    { name: "Profile management", available: true },
    { name: "iOS and Android apps", available: true },
    { name: "Loyalty program integration", available: false },
    { name: "Chat Support", available: false },
    { name: "Customized notification", available: false },
    { name: "Custom branding", available: false },
    { name: "SMS and Email Reminders", available: false },
    { name: "Inventory management", available: false },
  ];

  return (
    <div className=" py-[55px]  bg-[#000B17] ">
      <div className="container mx-auto   text-white">
        <div className="">
          <h2 className=" pb-[55px] text-center text-[45px] gilray-font leading-[55px]">
            <span className="text-white">Monthly </span>
            <span className="text-[#1E90FF]">Packages</span>
          </h2>

          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-1/3 md:mt-[10vh] mx-auto  bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  Basic
                </p>
                <p className="text-center main_hero_slogan leading-none my-8">
                  When she reached the first hills of the italic mountains{" "}
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">Get Started</span>
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>
                </button>

                <hr className="my-10 border-slate-500 " />

                <div className="h-[40vh]  ab mt-5 overflow-y-scroll">
                  {features.map((features, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-6 mb-3 main_hero_slogan"
                    >
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <HiMiniArrowUpRight size={16} />
                      </span>
                      {features.name}
                    </li>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/3 mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-r  relative from-[#0a1929]   to-[#051e33] w-full h-full   mx-auto shadow-lg ">
                <p className="w-1/2 mx-auto text-center text-[#1FCB78] border border-[#1FCB78] px-5 py-3 text-lg font-semibold rounded-full z-20 my-6">
                  Most Popular
                </p>

                <p className="gilray-font text-[30px] mx-auto text-center">
                  Advanced
                </p>
                <p className="text-center main_hero_slogan leading-none my-8">
                  When she reached the first hills of the italic mountains{" "}
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">Get Started</span>
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>
                </button>
                <hr className="my-10 border-slate-500 " />

                <div className="h-[40vh] ab mt-5 overflow-y-scroll">
                  {features.map((features, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-6 mb-3 main_hero_slogan"
                    >
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <HiMiniCheck size={16} />
                      </span>
                      {features.name}
                    </li>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/3  md:mt-[10vh] mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  Enterprise
                </p>
                <p className="text-center main_hero_slogan leading-none my-8">
                  When she reached the first hills of the italic mountains{" "}
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">Get Started</span>
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>
                </button>
                <hr className="my-10 border-slate-500 " />
                <div className="h-[40vh] ab mt-5 overflow-y-scroll">
                  {features.map((features, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-6 mb-3 main_hero_slogan"
                    >
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <HiMiniCheck size={16} />
                      </span>
                      {features.name}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
