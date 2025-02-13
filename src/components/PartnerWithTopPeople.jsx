"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";
const data = [
  {
    name: "Saif AL Alwar",
    position: "CEO",
    description:
      "As the CEO of Code Hive, Saif Alawar leads with a focus on digital transformation, data analytics, and customized software solutions. His expertise drives innovation, efficiency, and strategic decision-making, establishing Code Hive as a trusted leader in the tech industry. ",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/boss.png",
  },
  {
    name: "Shoaib Ahmad",
    position: "General Manager",
    description:
      "A strategic leader focused on operational excellence, efficiency, and innovation. With strong business management expertise, he ensures seamless execution, fosters collaboration, and strengthens client relationships to drive success.",
    linkedin: "https://www.linkedin.com/in/omaralfahad/",
    twitter: "https://twitter.com/omaralfahad",
    picture: "/partnerwithtoppeople/Sohaib.png",
  },

  {
    name: "Yousef Issa",
    position: "Project Manager",
    description:
      "An expert in strategic planning and team coordination, our Project Manager ensures smooth project execution. Focused on innovation and client satisfaction, they drive success while maintaining quality and timely delivery.",
    linkedin: "https://www.linkedin.com/in/hassan-sayed/",
    twitter: "https://twitter.com/hassan_sayed",
    picture: "/partnerwithtoppeople/Yousef.png",
  },
  {
    name: "Balawal Hussain",
    position: "Technical Lead",
    description:
      "A leader in innovation and technical excellence, our Technical Lead provides expert guidance, solves problems efficiently, and ensures seamless project execution. With a focus on quality and performance, they lead teams to deliver cutting-edge solutions. ",
    linkedin: "https://www.linkedin.com/in/youssef-al-mansoori/",
    twitter: "https://twitter.com/youssef_almansoori",
    picture: "/partnerwithtoppeople/Bilawal.png",
  },
  {
    name: "Muskaan Iqbal",
    position: "Head of Designer",
    description:
      "A creative visionary, our Head of Design ensures innovative, user-centered designs that elevate brand identity and enhance user experience. With a balance of aesthetics and functionality, they drive design excellence across all projects.",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/Muskan.png",
  },
  {
    name: "Asfand Naveed",
    position: "DevOps Engineer",
    description:
      "Our DevOps Engineer streamlines integration, automation, and deployment, optimizing infrastructure for efficiency and scalability. Focused on reliability and performance, they bridge development and operations, driving continuous improvement and innovation.",
    linkedin: "https://www.linkedin.com/in/omaralfahad/",
    twitter: "https://twitter.com/omaralfahad",
    picture: "/partnerwithtoppeople/Asfand.png",
  },

  {
    name: "Hina Liaqat",
    position: "Product Manager",
    description:
      "Our Dotnet Developer specializes in building robust, scalable applications using the latest .NET technologies. With a focus on performance, security, and seamless integration, they deliver high-quality solutions tailored to meet business needs.",
    linkedin: "https://www.linkedin.com/in/hassan-sayed/",
    twitter: "https://twitter.com/hassan_sayed",
    picture: "/partnerwithtoppeople/Hina.png",
  },
  {
    name: "Muhammad Hamwi",
    position: "Content Creater",
    description:
      "Our Content Creator produces engaging, high-quality content that strengthens brand storytelling and boosts audience engagement. With a blend of creativity and strategy, they craft compelling visuals and copy to drive brand awareness and impact.",
    linkedin: "https://www.linkedin.com/in/youssef-al-mansoori/",
    twitter: "https://twitter.com/youssef_almansoori",
    picture: "/partnerwithtoppeople/Hamvi.png",
  },
  {
    name: "Samer Alhelou",
    position: "Senior Developer",
    description:
      "Bringing advanced technical expertise and problem-solving skills, the Senior Developer delivers high-quality, scalable solutions. With a focus on efficiency and innovation, they mentor teams, ensure code quality, and drive complex projects to successful completion. ",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/Samer.png",
  },
];

const PartnerWithTopPeople = () => {
  // Track which member is selected
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedMember = data[selectedIndex];
  const [hoveredSlide, setHoveredSlide] = React.useState("");

  return (
    <div className="bg-[#000B17] py-10 font-lato  sm:py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 sm:w-[70%] mx-auto sub_heading leading-tight gilray-font">
          Meet the
          <span className="text-[#219DD9] mx-2">Creative Minds</span>
          Behind Our Most Successful Projects
        </h2>

        {/* Main layout: big card on the left, details & swiper on the right */}
        <div className="sm:flex hidden mt-10 h-[350px] sm:h-[500px] flex-col lg:flex-row gap-8 items-start">
          {/* Left side: Big "card" with the same style as the small ones */}
          <div className="w-full  lg:w-[30%]">
            <div
              className="relative overflow-hidden h-[350px] sm:h-[500px]  rounded-md "
              style={{
                border: "1px solid transparent",
                borderRadius: " 26px",
                background: `linear-gradient(to right, #052036, #02101f),linear-gradient(30deg, transparent, #2194cd ,transparent)`,
                backgroundClip: "padding-box, border-box",
                backgroundOrigin: "padding-box, border-box",
              }}
            >
              {/* Example "Profile-3" label at top-left (optional) */}
              {/* <div className="absolute top-2 left-2 text-gray-200 text-sm">Profile-3</div> */}

              <img
                src={selectedMember.picture}
                alt={selectedMember.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right side: two stacked sections */}
          <div className="w-full lg:w-[70%]  flex flex-col justify-between h-[350px] sm:h-[500px] ">
            {/* Top section: details (name, position, desc) */}
            <div>
              <h3 className="text-[22px] font-bold">{selectedMember.name}</h3>
              <h4 className="text-[19px] text-[#219DD9] font-semibold my-2 ">
                {selectedMember.position}
              </h4>
              <p className=" text-[14px] leading-relaxed">
                {selectedMember.description}
              </p>
            </div>

            {/* Bottom section: Swiper with smaller cards */}
            <div>
              <Swiper
                // spaceBetween={20}
                slidesPerView={3}
                modules={[EffectFade, History, EffectCards, Autoplay]}
                breakpoints={{
                  240: {
                    slidesPerView: 1.3,
                  },
                  768: {
                    slidesPerView: 3.3,
                  },
                }}
              >
                {data.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      marginRight: 0,
                    }}
                  >
                    <div
                      onClick={() => {
                        setHoveredSlide(item.name);
                        setSelectedIndex(index);
                      }}
                      onMouseEnter={() => setHoveredSlide(item.name)}
                      //  onClick={() => }
                      onMouseLeave={() => setHoveredSlide("")}
                      className={`flex flex-col text-center transition-transform duration-500 ease-in-out transform gap-2
                        scale-90 
                 bg-gradient-to-b from-[#010B1770]   to-[#2093CA70] relative  rounded-xl sm:min-h-[350px] h-[45vh] cursor-pointer pt-4 
                 overflow-hidden hover:scale-100 
                 `}
                      style={{
                        border: "1px solid transparent",
                        borderRadius: " 26px",
                        background: `linear-gradient(to right, #052036, #02101f),linear-gradient(30deg, black, #2194cd ,black)`,
                        backgroundClip: "padding-box, border-box",
                        backgroundOrigin: "padding-box, border-box",
                      }}
                    >
                      {hoveredSlide !== item.name && (
                        <img
                          src={item.picture}
                          alt={item.name}
                          className="w-full h-full object-contain absolute transition-transform duration-500 ease-in-out transform "
                        />
                      )}
                      {hoveredSlide === item.name && (
                        <img
                          src={"/gray-vector.png"}
                          alt={item.name}
                          className="w-40 h-40 object-cover -z-10 absolute -right-5 top-20 "
                        />
                      )}

                      <div
                        className={`absolute bottom-0 w-full flex flex-col items-center justify-center`}
                      >
                        <div className=" bg-gradient-to-t from-black  to-transparent w-full px-2 sm:px-6 py-6 m-auto">
                          <h3
                            className={`text-white text-[15px] sm:text-[22px] font-semibold text-left w-full`}
                          >
                            {item.name}
                          </h3>
                          <h3
                            className={`text-[#219DD9] main_hero_slogan font-semibold  text-left w-full gap-2  ${
                              hoveredSlide === item.name ? " sm:mb-10" : "mb-0"
                            }`}
                          >
                            {item.position}
                          </h3>
                          {hoveredSlide === item.name && (
                            <h3
                              className={`text-white text-[10px]  sm:text-[13px] font-light text-left w-full opacity-90 transition-opacity duration-500`}
                            >
                              {item.description}
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="sm:hidden mt-10">
          <Swiper
            // spaceBetween={20}
            slidesPerView={3}
            modules={[EffectFade, History, EffectCards, Autoplay]}
            breakpoints={{
              240: {
                slidesPerView: 1.3,
              },
              768: {
                slidesPerView: 3.3,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{
                  marginRight: 0,
                }}
              >
                <div
                  onClick={() => {
                    setHoveredSlide(item.name);
                    setSelectedIndex(index);
                  }}
                  onMouseEnter={() => setHoveredSlide(item.name)}
                  //  onClick={() => }
                  onMouseLeave={() => setHoveredSlide("")}
                  className={`flex flex-col text-center transition-transform duration-500 ease-in-out transform gap-2
                        scale-90 
                 bg-gradient-to-b from-[#010B1770]   to-[#2093CA70] relative  rounded-xl sm:min-h-[350px] h-[45vh] cursor-pointer pt-4 
                 overflow-hidden hover:scale-100 
                 `}
                  style={{
                    border: "1px solid transparent",
                    borderRadius: " 26px",
                    background: `linear-gradient(to right, #052036, #02101f),linear-gradient(30deg, black, #2194cd ,black)`,
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "padding-box, border-box",
                  }}
                >
                  {hoveredSlide !== item.name && (
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="w-full h-full object-contain absolute transition-transform duration-500 ease-in-out transform "
                    />
                  )}
                  {hoveredSlide === item.name && (
                    <img
                      src={"/gray-vector.png"}
                      alt={item.name}
                      className="w-40 h-40 object-cover -z-10 absolute -right-5 top-20 "
                    />
                  )}

                  <div
                    className={`absolute bottom-0 w-full flex flex-col items-center justify-center`}
                  >
                    <div className=" bg-gradient-to-t from-black  to-transparent w-full px-2 sm:px-6 py-6 m-auto">
                      <h3
                        className={`text-white text-[15px] sm:text-[22px] font-semibold text-left w-full`}
                      >
                        {item.name}
                      </h3>
                      <h3
                        className={`text-[#219DD9] main_hero_slogan font-semibold  text-left w-full gap-2  ${
                          hoveredSlide === item.name ? " sm:mb-10" : "mb-0"
                        }`}
                      >
                        {item.position}
                      </h3>
                      {hoveredSlide === item.name && (
                        <h3
                          className={`text-white mt-10 sm:mt-0 text-[13px] font-light text-left w-full opacity-90 transition-opacity duration-500`}
                        >
                          {item.description}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithTopPeople;
