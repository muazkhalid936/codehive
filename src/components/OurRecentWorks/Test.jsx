"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import useStore from "../../store/useUserStore";
import Card from "./Card";
import { useRouter } from "next/navigation";
import Lenis from "@studio-freight/lenis";
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
    link: "/our-work/Mr-app",
    tech1: "Mobile App",
    tech2: "Flutter",
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const { language } = useStore();
  const router = useRouter();

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smooth: true,
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  
    // ✅ Sync GSAP with Lenis
    lenis.on("scroll", () => {
      ScrollTrigger.update(); // Ensure GSAP updates positions
    });
  
    // ✅ Force GSAP to recalculate once page is loaded
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  
    return () => {
      ScrollTrigger.killAll(); // Cleanup on unmount
    };
  }, []);
  
  useEffect(() => {
    

    const section = sectionRef.current;
    const trigger = triggerRef.current;

    gsap.to(section, {
      x: () =>
        `${language === "en" ? "-" : ""}${
          section.scrollWidth - trigger.offsetWidth + 50
        }px`, // Ensures correct RTL scrolling for Arabic
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${section.scrollWidth}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1, // Prevents glitching
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [language]);

  return (
    <section
      className="scroll-section-outer mx-auto relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div ref={triggerRef} className="container mx-auto overflow-hidden">
        <div
          ref={sectionRef}
          className="scroll-section-inner flex space-x-10 w-max"
        >
          {cardsData.map(
            (
              { head, para, bgImg, ahead, apara, Img, link, tech1, tech2 },
              index
            ) => (
              <div key={index} className="scroll-section">
                <Card
                  head={language === "en" ? head : ahead}
                  tech1={tech1}
                  tech2={tech2}
                  para={language === "en" ? para : apara}
                  bgImg={`url(${bgImg})`}
                  Img={Img}
                  link={link}
                />
              </div>
            )
          )}
          {/* View More Button */}
          <div
            className="view-more-btn flex justify-center items-center"
            style={{
              minWidth: "200px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <button
              onClick={() => router.push("/our-work")}
              className="text-white bg-blueColor px-3 rounded-full flex gap-5 justify-center items-center font-lato py-2"
            >
              {language === "en" ? "View More" : "عرض المزيد"}
              {language === "en" ? (
                <FaArrowRightLong className="bg-white text-blueColor w-8 h-8 p-2 rounded-full text-4xl " />
              ) : (
                <FaArrowLeftLong className="bg-white text-blueColor w-8 h-8 p-2 rounded-full text-4xl " />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
