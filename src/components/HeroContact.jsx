import React from "react";

const HeroContact = () => {
  return (
    <div className=" h-[70vh]  bg-gradient-to-t  from-[#0A1520] to-black ">
      <div
        style={{
          backgroundImage: "url(/contactmask.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute lg:top-[110px] 2xl:top-[120px] lg:right-[14%]  2xl:right-[14%]">
          <img src="/contactvector.png" className="lg:w-[400px] 2xl:w-[550px]" />
        </div>
        <div className="flex container flex-row gap-2">
          <div className="px-10 w-1/2  flex-col  flex  justify-start  ">
            <div className="flex justify-center flex-col h-[70vh] gap-5 ">
              {" "}
              <p className="text-[20px] header xl:text-6xl sm:text-3xl  md:text-[50px] leading-tight  main-heading  text-white">
                <span className="text-[20px] mr-4  header xl:text-6xl sm:text-3xl    main-heading  text-blueColor">
                  Contact us
                </span>
                and
                <br />
                Unleash your idea
              </p>
              <p className="main_hero_slogan text-white ">
                Connectung with out valued customers is at the core of our
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
