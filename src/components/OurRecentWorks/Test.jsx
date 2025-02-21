"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useRouter } from '../../i18n/routing';

import useStore from "../../store/useUserStore";
import Lenis from "@studio-freight/lenis"; // Import Lenis
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);
import { FaArrowRightLong } from "react-icons/fa6";

const HorizontalScroll = () => {
  const { language } = useStore();
  const router = useRouter();
  const containerRef = useRef(null);

  const cardsData = [
    {
      head: "Al Abour",
      ahead: "العبور",

      para: "Efficient camel transport with tracking.",
      apara: "نقل الھجن الموثوق مع التتبع",
      bgImg: "/Homapage/carosuel/1.jpeg",
      Img: "/Homapage/carosuel/a1.png",
      link: "/our-work/al-abour-app",
      tech1: "Mobile App",
      tech2: "Flutter",
    },
    {
      tech1: "Website",
      tech2: ".Net",
      head: "Faoolun",
      ahead: "فعولن",
      para: "Master Arabic poetry with ease.",
      apara: "تعلم الشعر العربي بسھولة",
      bgImg: "/Homapage/carosuel/2.jpeg",
      Img: "/Homapage/carosuel/a2.png",
      link: "/our-work/faoolun-website",
    },
    {
      tech1: "Mobile App",
      tech2: "Flutter",
      head: "MedEase",
      ahead: "حجزموعد مع الطبيب",
      para: "Book doctor appointments with ease.",
      apara: "احجز موعد مع طبيبك بسھولة",
      bgImg: "/Homapage/carosuel/3.jpeg",
      link: "/our-work/doctor-booking-app",
      Img: "/Homapage/carosuel/a3.png",
    },
    {
      head: "Solwave",
      ahead: "سولويف",
      tech1: "Website",
      tech2: ".Net",
      para: "Unlock your potential, boost success.",
      apara: "أطلق العنان مكاناتك، وعزز نجاحك.",
      bgImg: "/Homapage/carosuel/4.jpeg",
      Img: "/Homapage/carosuel/a4.png",
      link: "/our-work/solwave-website",
    },
    {
      head: "Mr Take",
      ahead: "Mr Take",
      para: "Fast, reliable food delivery service.",
      apara: "خدمة توصيل الطعام بسرعة وموثوقية.",
      bgImg: "/Homapage/carosuel/5.jpeg",
      Img: "/Homapage/carosuel/a5.png",
      link: "/",
      tech1: "Mobile App",
      tech2: "Flutter",
    },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
    });

    const update = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
    };

    requestAnimationFrame(function raf(time) {
      update(time);
      requestAnimationFrame(raf);
    });

    const container = containerRef.current;
    const cards = container.querySelector(".card-row");
    const totalScrollWidth = cards.scrollWidth - container.clientWidth;

    gsap.to(cards, {
      x: -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${cards.scrollWidth}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div
        ref={containerRef}
        className=""
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="card-row"
          style={{
            display: "flex",
            gap: "20px",
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            willChange: "transform",
          }}
        >
          {cardsData.map(
            (
              { head, para, bgImg, ahead, apara, Img, link, tech1, tech2 },
              index
            ) => (
              <Card
                key={index}
                head={language === "English" ? head : ahead}
                tech1={tech1}
                tech2={tech2}
                para={language === "English" ? para : apara}
                bgImg={`url(${bgImg})`}
                Img={Img}
                link={link}
              />
            )
          )}

          {/* View More Button */}
          <div
            className="view-more-btn flex justify-center items-center"
            style={{
              minWidth: "200px",
              // height: '300px',
              // backgroundColor: '#f3f4f6',
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <button
              onClick={() => router.push("/our-work")}
              className="text-white bg-blueColor px-3 rounded-full flex gap-5 justify-center items-center font-lato py-2"
            >
              View More{" "}
              <FaArrowRightLong className="bg-white  text-blueColor w-8 h-8 p-2 rounded-full text-4xl " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
