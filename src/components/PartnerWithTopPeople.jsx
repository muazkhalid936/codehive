"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";

const data = [
  {
    name: "Shohaib Ahmad",
    position: "General Manager",
    description:
      "As a general manager, I oversee operations, drive strategic growth, and ensure team alignment with business objectives. My focus on leadership, efficiency, and innovation fosters success across all areas of the organization.",
    linkedin: "https://www.linkedin.com/in/omaralfahad/",
    twitter: "https://twitter.com/omaralfahad",
    picture: "/partnerwithtoppeople/Sohaib.png",
  },

  {
    name: "Yousef Issa",
    position: "Project Manager",
    description:
      "As a project manager, I oversee planning and execution to deliver projects on time and within scope. My focus on leadership, organization, and collaboration ensures seamless workflows and successful outcomes. ",
    linkedin: "https://www.linkedin.com/in/hassan-sayed/",
    twitter: "https://twitter.com/hassan_sayed",
    picture: "/partnerwithtoppeople/Yousef.png",
  },
  {
    name: "Balawal Hussain",
    position: "Technical Lead",
    description:
      "As a technical lead, I guide teams in delivering high-quality, scalable solutions while ensuring technical excellence. My focus on innovation, collaboration, and mentorship drives success in complex projects.",
    linkedin: "https://www.linkedin.com/in/youssef-al-mansoori/",
    twitter: "https://twitter.com/youssef_almansoori",
    picture: "/partnerwithtoppeople/Bilawal.png",
  },
  {
    name: "Muskaan Iqbal",
    position: "Head of Designer",
    description:
      "Aisha is a marketing specialist with a passion for creating innovative and user-friendly marketing strategies. She has worked with clients from a wide range of industries to develop custom marketing solutions that meet their unique needs.",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/Muskan.png",
  },
  {
    name: "Asfand Naveed",
    position: "DevOps Engineer",
    description:
      "As a DevOps Engineer, I streamline development and deployment processes, ensuring efficient workflows and reliable systems. My focus on automation, scalability, and collaboration drives seamless integration and operational excellence.",
    linkedin: "https://www.linkedin.com/in/omaralfahad/",
    twitter: "https://twitter.com/omaralfahad",
    picture: "/partnerwithtoppeople/Asfand.png",
  },

  {
    name: "Hina Liaqat",
    position: "Product Manager",
    description:
      "As a product manager, I drive ideas into impactful solutions, ensuring seamless user experiences and aligning business goals with customer needs. My focus on innovation and collaboration delivers results in an ever-evolving market.",
    linkedin: "https://www.linkedin.com/in/hassan-sayed/",
    twitter: "https://twitter.com/hassan_sayed",
    picture: "/partnerwithtoppeople/Hina.png",
  },
  {
    name: "Muhammad Hamwi",
    position: "Content Creater",
    description:
      "As a content creator, I craft engaging and impactful content that connects with audiences and drives brand growth. My focus on creativity, storytelling, and strategy ensures meaningful and lasting impressions.",
    linkedin: "https://www.linkedin.com/in/youssef-al-mansoori/",
    twitter: "https://twitter.com/youssef_almansoori",
    picture: "/partnerwithtoppeople/Hamvi.png",
  },
  {
    name: "Samer Alhelou",
    position: "Senior Developer",
    description:
      "As a senior developer, I transform ideas into scalable solutions with a focus on seamless user experiences and high-quality code. My passion for innovation and learning keeps me ahead in the evolving tech landscape.",
    linkedin: "https://www.linkedin.com/in/aisha-al-hassan/",
    twitter: "https://twitter.com/aisha_alhassan",
    picture: "/partnerwithtoppeople/Samer.png",
  },
];

const PartnerWithTopPeople = () => {
  const [hoveredSlide, setHoveredSlide] = React.useState("");

  return (
    <div className="bg-[#010B17] py-20 text-white ">
      <h2 className="text-center sub_heading gilray-font ">
        Partnered with Most of the Top <br /> People at Each{" "}
        <span className="text-[#219DD9]">Industry</span>
      </h2>

      <div className="container mt-12" onMouseEnter={() => setHoveredSlide("")}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          // centeredSlides={true}
          modules={[EffectFade, History, EffectCards, Autoplay]}
          autoplay={{ delay: 3000 }}
          // loopAddBlankSlides={false}
          // loopPreventsSliding={false}
          // rewind={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
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
                onMouseEnter={() => setHoveredSlide(item.name)}
                onMouseLeave={() => setHoveredSlide("")}
                className={`flex flex-col text-center transition-transform duration-500 ease-in-out transform gap-2
                bg-gradient-to-b from-[#010B1770]  to-[#2093CA70] relative rounded-xl min-h-[350px] h-[45vh] cursor-pointer pt-8
                overflow-hidden hover:scale-105
                `}
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
                  <div className=" bg-gradient-to-t from-black to-transparent w-full px-6 py-6 m-auto">
                    <h3
                      className={`text-white text-[22px] font-semibold text-left w-full `}
                    >
                      {item.name}
                    </h3>
                    <h3
                      className={`text-[#219DD9] main_hero_slogan font-semibold  text-left w-full gap-2  ${
                        hoveredSlide === item.name ? "mb-10" : "mb-0"
                      }`}
                    >
                      {item.position}
                    </h3>
                    {hoveredSlide === item.name && (
                      <h3
                        className={`text-white  text-[15px] font-light text-left w-full opacity-90 transition-opacity duration-500`}
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
  );
};

export default PartnerWithTopPeople;
