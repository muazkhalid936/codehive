'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoLogoXbox } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import { IoLogoVk } from "react-icons/io";

import Lenis from '@studio-freight/lenis'; // Import Lenis
import { IoLogoApple } from 'react-icons/io5'; // Import the icon
import Card from './Card';
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  const cardsData = [
    {
      head: 'Al Abour',
      para: 'Your description for Al Abour.',
      bgImg: '/Homapage/carosuel/al.jpg',
      icon: IoLogoApple, // Pass the icon
    },
    {
      head: 'Caption Gen',
      para: 'Your description for Caption Gen.',
      bgImg: '/Homapage/carosuel/caption.png',
      icon: IoLogoXbox, // Pass the icon
    },
    {
      head: 'Clixpox',
      para: 'Your description for Clixpox.',
      bgImg: '/Homapage/carosuel/clixpox.png',
      icon: IoLogoVue, // Pass the icon
    },
    {
      head: 'Doctor Booking App',
      para: 'Your description for Doctor Booking App.',
      bgImg: '/Homapage/carosuel/doctor.jpg',
      icon: IoLogoVk, // Pass the icon
    },
    {
      head: 'Email App',
      para: 'Your description for Email App.',
      bgImg: '/Homapage/carosuel/Email.jpg',
      icon: IoLogoApple, // Pass the icon
    },
    // {
    //   head: "Faaolun",
    //   para: "Your description for Faaolun.",
    //   bgImg: "/Homapage/carosuel/faaolun.jpg",
    // },
    // {
    //   head: "Fitverse",
    //   para: "Your description for Fitverse.",
    //   bgImg: "/Homapage/carosuel/fitverse.png",
    // },
    // {
    //   head: "Food Inventory",
    //   para: "Your description for Food Inventory.",
    //   bgImg: "/Homapage/carosuel/food.jpg",
    // },
    // {
    //   head: "Instant Save",
    //   para: "Your description for Instant Save.",
    //   bgImg: "/Homapage/carosuel/instantsave.png",
    // },
    // {
    //   head: "Laam",
    //   para: "Your description for Laam.",
    //   bgImg: "/Homapage/carosuel/laam.jpg",
    // },
    // {
    //   head: "Legal Wise",
    //   para: "Your description for Legal Wise.",
    //   bgImg: "/Homapage/carosuel/legal.jpg",
    // },
    // {
    //   head: "Saloon Booking",
    //   para: "Your description for Saloon Booking.",
    //   bgImg: "/Homapage/carosuel/saloon.jpg",
    // },
    // {
    //   head: "Wordsmith AI",
    //   para: "Your description for Wordsmith AI.",
    //   bgImg: "/Homapage/carosuel/wordsmith.png",
    // },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothTouch: true, // Ensures smooth scrolling on touch devices
      direction: 'vertical', // Lenis scroll direction
    });

    // Update Lenis and ScrollTrigger on each animation frame
    const update = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
    };

    // Start the Lenis animation
    requestAnimationFrame(function raf(time) {
      update(time);
      requestAnimationFrame(raf);
    });

    const container = containerRef.current;
    const cards = container.querySelector('.card-row');
    const totalScrollWidth = cards.scrollWidth - container.clientWidth;

    gsap.to(cards, {
      x: -totalScrollWidth, // Horizontal scroll effect
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${cards.scrollWidth}`, // Total scroll amount
        scrub: true,
        pin: true,
        invalidateOnRefresh: true, // Recalculates on viewport resize
      },
    });

    return () => {
      lenis.destroy(); // Clean up Lenis on unmount
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div
        ref={containerRef}
        className=""
        style={{
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          className="card-row"
          style={{
            display: 'flex',
            gap: '20px',
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            willChange: 'transform', // GPU acceleration
          }}
        >
          {cardsData.map(({ head, para, bgImg, icon }, index) => (
            <Card key={index} head={head} para={para} bgImg={`url(${bgImg})`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
