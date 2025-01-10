import React from "react";

const WhoWeAre = () => {
  return (
    <div className="container py-[55px] rounded-lg">
      <div className="bg-[url('/whoweare/bgImage.png')] bg-cover h-[200px] sm:min-h-[350px] md:max-h-[450px]  bg-center sm:h-[50vh] w-full rounded-[20px] items-center md:items-center justify-start sm:justify-center flex md:justify-around  sm:gap-32 gap:4 px-6 sm:px-0">
        <div className="flex flex-col text-white w-full sm:w-1/2 sm:pl-20">
          <h2 className="md:text-[45px] font-bold flex-1 gilray-font  ">
            Who are <span className="  text-[#219DD9] "> we? </span>
          </h2>
          <p className=" w-[90%] leading-[20px] mt-5 main_hero_slogan ">
            Code Hive is driven by dynamism, client focus, and technological
            strength. Since inception, it has been dedicated to building
            cutting-edge iOS and Android applications, helping emerging
            businesses bring products to market efficiently, even with tight
            time and budget constraints.
          </p>
        </div>
        <img
          src="/whoweare/play-button.png"
          alt="bgImage"
          className="w-12  md:w-24 d-none mx-auto md:d-block"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
