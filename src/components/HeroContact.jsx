import React from "react";

const HeroContact = () => {
  return (
    <div className="h-[70vh] overflow-hidden min-h-[500px] max-h-[580px] bg-gradient-to-t from-[#0d1724] via-[#0d1724] to-[#000b17] relative">
      {/* Background image container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/contact.png"
          className="h-[62vh] mt-[5rem] min-h-[500px] max-h-[650px] object-contain"
          alt="Contact"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex container justify-center mt-[200px] flex-row gap-2">
        {/* Left Column */}
        <div className="flex-1 lg:w-1/2 flex-col flex justify-center">
          <div className="flex flex-col gap-5">
            <p className=" header hero_section_heading leading-tight main-heading text-white">
              <span className=" mr-2 header  leading-tight  main-heading text-blueColor">
                Get in Touch
              </span>
              <br/>
              with Us
            </p>
            <p className="main_hero_slogan text-[#ebeced]">
            Have questions or need assistance? We're here to help! Reach out to us for inquiries, collaborations, or support, and let’s grow together.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-1/2 "></div>
      </div>
    </div>
  );
};

export default HeroContact;
