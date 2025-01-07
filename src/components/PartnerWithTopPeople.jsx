'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, History, EffectCards } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/bundle';

const data = [
  {
    name: 'Omar Al-Fahad',
    position: 'Web and App Developer',
    description:
      'As a web and app developer, Omar has worked with many clients to create beautiful and functional websites and applications. An expert in HTML, CSS, and JavaScript, he is always looking for new ways to improve his skills.',
    linkedin: 'https://www.linkedin.com/in/omaralfahad/',
    twitter: 'https://twitter.com/omaralfahad',
    picture: '/partnerwithtoppeople/web-dev.png',
  },

  {
    name: 'Hassan Sayed',
    position: 'Software Developer',
    description:
      'Hassan is a software developer with a passion for creating innovative and user-friendly applications. He has worked with clients from a wide range of industries to develop custom software solutions that meet their unique needs.',
    linkedin: 'https://www.linkedin.com/in/hassan-sayed/',
    twitter: 'https://twitter.com/hassan_sayed',
    picture: '/partnerwithtoppeople/software-dev.png',
  },
  {
    name: 'Youssef Al-Mansoori',
    position: 'Software Developer',
    description:
      'Youssef is a software developer with a passion for creating innovative and user-friendly applications. He has worked with clients from a wide range of industries to develop custom software solutions that meet their unique needs.',
    linkedin: 'https://www.linkedin.com/in/youssef-al-mansoori/',
    twitter: 'https://twitter.com/youssef_almansoori',
    picture: '/partnerwithtoppeople/software-dev.png',
  },
  {
    name: 'Aisha Al-Hassan',
    position: 'Marketing Specialist',
    description:
      'Aisha is a marketing specialist with a passion for creating innovative and user-friendly marketing strategies. She has worked with clients from a wide range of industries to develop custom marketing solutions that meet their unique needs.',
    linkedin: 'https://www.linkedin.com/in/aisha-al-hassan/',
    twitter: 'https://twitter.com/aisha_alhassan',
    picture: '/partnerwithtoppeople/marketing-manager.png',
  },
  {
    name: 'Omar Al-Fahad',
    position: 'Web and App Developer',
    description:
      'As a web and app developer, Omar has worked with many clients to create beautiful and functional websites and applications. An expert in HTML, CSS, and JavaScript, he is always looking for new ways to improve his skills.',
    linkedin: 'https://www.linkedin.com/in/omaralfahad/',
    twitter: 'https://twitter.com/omaralfahad',
    picture: '/partnerwithtoppeople/web-dev.png',
  },

  {
    name: 'Hassan Sayed',
    position: 'Software Developer',
    description:
      'Hassan is a software developer with a passion for creating innovative and user-friendly applications. He has worked with clients from a wide range of industries to develop custom software solutions that meet their unique needs.',
    linkedin: 'https://www.linkedin.com/in/hassan-sayed/',
    twitter: 'https://twitter.com/hassan_sayed',
    picture: '/partnerwithtoppeople/software-dev.png',
  },
  {
    name: 'Youssef Al-Mansoori',
    position: 'Software Developer',
    description:
      'Youssef is a software developer with a passion for creating innovative and user-friendly applications. He has worked with clients from a wide range of industries to develop custom software solutions that meet their unique needs.',
    linkedin: 'https://www.linkedin.com/in/youssef-al-mansoori/',
    twitter: 'https://twitter.com/youssef_almansoori',
    picture: '/partnerwithtoppeople/software-dev.png',
  },
  {
    name: 'Aisha Al-Hassan',
    position: 'Marketing Specialist',
    description:
      'Aisha is a marketing specialist with a passion for creating innovative and user-friendly marketing strategies. She has worked with clients from a wide range of industries to develop custom marketing solutions that meet their unique needs.',
    linkedin: 'https://www.linkedin.com/in/aisha-al-hassan/',
    twitter: 'https://twitter.com/aisha_alhassan',
    picture: '/partnerwithtoppeople/marketing-manager.png',
  },
];

const PartnerWithTopPeople = () => {
  const [hoveredSlide, setHoveredSlide] = React.useState('');

  return (
    <div className="bg-[#010B17] py-20 text-white ">
      <h2 className="text-center text-2xl md:text-[45px] gilray-font ">
        Partnered with Most of the Top <br /> People at Each{' '}
        <span className="text-[#219DD9]">Industry</span>
      </h2>

      <div className="container mt-12" onMouseEnter={() => setHoveredSlide('')}>
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
                onMouseLeave={() => setHoveredSlide('')}
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
                    src={'/gray-vector.png'}
                    alt={item.name}
                    className="w-56 h-56 object-cover -z-10 absolute -right-5 top-20 "
                  />
                )}

                <div
                  className={`absolute bottom-0 w-full flex flex-col items-center justify-center`}
                >
                  <div className=" bg-gradient-to-t from-black to-transparent w-full px-6 py-6 m-auto">
                    <h3
                      className={`text-white text-2xl font-bold text-left w-full font-gilroy`}
                    >
                      {item.name}
                    </h3>
                    <h3
                      className={`text-[#219DD9] text-xl font-bold text-left w-full gap-2 font-gilroy ${hoveredSlide === item.name ? 'mb-10' : 'mb-0'
                        }`}
                    >
                      {item.position}
                    </h3>
                    {hoveredSlide === item.name && (
                      <h3
                        className={`text-white  text-sm font-light text-left w-full opacity-90 transition-opacity duration-500`}
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
