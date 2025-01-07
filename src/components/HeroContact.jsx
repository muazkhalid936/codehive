import React from "react";

const HeroContact = () => {
  return (
    <div className=" h-[70vh] min-h-[500px]  bg-gradient-to-t  from-[#0A1520] to-black ">
      <div
        style={{
          backgroundImage: "url(/contactmask.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute right-0 top-24 ">
          <img src="/contactvector.png" className=" w-[55%]" />
        </div>
        <div className="flex container flex-row gap-2">
          <div className="flex-1 lg:w-1/2  flex-col  flex  justify-start  ">
            <div className="flex justify-center flex-col min-h-[500px] h-[70vh] gap-5 ">
              {" "}
              <p className="text-[20px] header  sm:text-3xl  md:text-[50px] leading-tight  main-heading  text-white">
                <span className="text-[20px] mr-2  header md:text-[50px] leading-tight sm:text-3xl    main-heading  text-blueColor">
                  Contact us
                </span>
                and
                <br />
                Unleash your idea
              </p>
              <p className="main_hero_slogan text-white ">
                Connecting with out valued customers is at the core of our
                business approach. Wheater you have a query, feedback, or simply
                want to share you rexperience. Our dedicated support team us
                just a message away
              </p>
            </div>
          </div>

          <div className="flex w-1/2">a</div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
