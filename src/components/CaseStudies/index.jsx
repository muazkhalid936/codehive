'use client';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Card = ({ head, para, bgImg }) => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center h-[445px] md:h-[500px] w-[300px] md:w-[330px] rounded-lg shadow-lg"
      style={{
        backgroundImage: `${bgImg}`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="mt-4 ml-2 flex gap-2">
        <p className="twxt-white border-white py-1 w-fit border rounded-full px-2 text-sm">
          Web Development
        </p>
        <p className="text-white border-white py-1 w-fit border rounded-full px-2 text-sm">
          Flutter
        </p>
      </div>

      <div className="absolute backdrop-blur-md h-[170px] bottom-0 inset-0 bg-opacity-50 md:top-[66%] top-[62%] rounded-lg flex flex-col justify-center p-4 gap-2">
        <h2 className="text-white text-2xl font-bold">{head}</h2>
        <p className="text-white">{para}</p>
        <hr className="border border-white w-full" />
        <div className="flex gap-2 items-center justify-between">
          <p>View Complete Project</p>
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl" />
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  // Data for the slider
  const data = {
    title: 'Our More Case Studies',
    cards: [
       {
      name: 'Al Abour',
      description: 'Platform for booking desert adventures.',
      picture: '/Homapage/carosuel/al.jpg',
    },
    {
      name: 'Caption Gen',
      description: 'AI-driven platform generates tailored captions.',
      picture: '/Homapage/carosuel/caption.png',
    },
    {
      name: 'Clixpox',
      description: 'POS platform for wide range of business.',
      picture: '/Homapage/carosuel/clixpox.png',
    },
    {
      name: 'Doctor Booking App',
      description: 'Platform for booking Appointment.',
      picture: '/Homapage/carosuel/doctor.jpg',
    },
    ],
  };

  return (
    <div className="text-white ml-2 md:ml-24 z-50 pt-32 pb-32">
      <h2 className="text-4xl font-extrabold font-gilroy w-full text-white">
        Our More{' '}
        <span className="text-[#219DD9]">Case Studies</span>
      </h2>

      {/* Snap Scroll Container */}
      <div className="mt-12 overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 px-6 sm:px-12">
        {data.cards.map((item, index) => (
          <div key={index} className="snap-center shrink-0">
            <Card
              head={item.name} // Title for the card
              para={item.description} // Description for the card
              bgImg={`url(${item.picture})`} // Background image for the card
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
