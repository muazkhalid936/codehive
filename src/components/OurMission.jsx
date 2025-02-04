"use client"; // If you’re using Next.js 13 App Router, enable client‐side code

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // -- 2) Setup GSAP animations/positions --
  useEffect(() => {
    // Set initial positions:
    // card1: left, card2: center, card3: right
    gsap.set(card1Ref.current, {
      xPercent: -70,
      scale: 0.6,
      filter: "blur(2px)",
      zIndex: 1,
    });
    gsap.set(card2Ref.current, {
      xPercent: 0,
      scale: 1,
      filter: "none",
      zIndex: 2,
    });
    gsap.set(card3Ref.current, {
      xPercent: 70,
      scale: 0.6,
      filter: "blur(2px)",
      zIndex: 1,
    });

    // Hover handler: Adjust positions depending on which card is hovered
    const onEnter = (el) => {
      if (el === card1Ref.current) {
        // Hovering card1: card1 moves to center; card2 swaps to left; card3 remains on the right.
        gsap.to(card1Ref.current, {
          xPercent: 0,
          scale: 1,
          filter: "none",
          zIndex: 3,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(card2Ref.current, {
          xPercent: -70,
          scale: 0.6,
          filter: "blur(2px)",
          zIndex: 1,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(card3Ref.current, {
          xPercent: 70,
          scale: 0.6,
          filter: "blur(2px)",
          zIndex: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      } else if (el === card3Ref.current) {
        // Hovering card3: card3 moves to center; card2 swaps to right; card1 remains on the left.
        gsap.to(card3Ref.current, {
          xPercent: 0,
          scale: 1,
          filter: "none",
          zIndex: 3,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(card2Ref.current, {
          xPercent: 70,
          scale: 0.6,
          filter: "blur(2px)",
          zIndex: 1,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(card1Ref.current, {
          xPercent: -70,
          scale: 0.6,
          filter: "blur(2px)",
          zIndex: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      } else if (el === card2Ref.current) {
        // Hovering card2 (center) leaves everything unchanged.
        gsap.to(card2Ref.current, {
          xPercent: 0,
          scale: 1,
          filter: "none",
          zIndex: 3,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(card1Ref.current, {
          xPercent: -70,
          scale: 0.6,
          filter: "blur(2px)",
          zIndex: 1,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(card3Ref.current, {
          xPercent: 70,
          scale: 0.6,
          filter: "blur(2px)",
          zIndex: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    // Hover out handler: Reset all cards to their original positions.
    const onLeave = () => {
      gsap.to(card1Ref.current, {
        xPercent: -70,
        scale: 0.6,
        filter: "blur(2px)",
        zIndex: 1,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(card2Ref.current, {
        xPercent: 0,
        scale: 1,
        filter: "none",
        zIndex: 2,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(card3Ref.current, {
        xPercent: 70,
        scale: 0.6,
        filter: "blur(2px)",
        zIndex: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    // Store handler functions in variables for cleanup
    const handleCard1Enter = () => onEnter(card1Ref.current);
    const handleCard2Enter = () => onEnter(card2Ref.current);
    const handleCard3Enter = () => onEnter(card3Ref.current);

    // Attach event listeners for hover in and out.
    card1Ref.current.addEventListener("mouseenter", handleCard1Enter);
    card2Ref.current.addEventListener("mouseenter", handleCard2Enter);
    card3Ref.current.addEventListener("mouseenter", handleCard3Enter);

    card1Ref.current.addEventListener("mouseleave", onLeave);
    card2Ref.current.addEventListener("mouseleave", onLeave);
    card3Ref.current.addEventListener("mouseleave", onLeave);

    // Cleanup event listeners when the component unmounts.
    return () => {
      card1Ref.current.removeEventListener("mouseenter", handleCard1Enter);
      card2Ref.current.removeEventListener("mouseenter", handleCard2Enter);
      card3Ref.current.removeEventListener("mouseenter", handleCard3Enter);

      card1Ref.current.removeEventListener("mouseleave", onLeave);
      card2Ref.current.removeEventListener("mouseleave", onLeave);
      card3Ref.current.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <main style={styles.main}>
      <div style={styles.wrapper}>
        <div
          ref={card1Ref}
          style={{
            ...styles.card,
            backgroundImage:
            "linear-gradient( 135deg, transparent, #219DD9), url('/back.png')",
            // backgroundSize: " cover", // Make the gradient cover the full element, image covers normally
            // backgroundPosition: "center, center",

            borderRadius: "25px",
            // border: "5px solid transparent", // Increase border width if needed to show the gradient properly

            // Use background-clip to apply the gradient to the border and the image to the padding
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
          className="p-[2px] "
        >
          <div
            className="w-full h-full flex flex-col gap-5 justify-center px-5  rounded-3xl"
            style={{
              backgroundImage: "url('/back.png')",
            }}
          >
            <h2 className="font-extrabold text-[25px] bg-gradient-to-r from-[#173857] to-blueColor bg-clip-text text-transparent ">
              Our Vision
            </h2>
            <p className="main_hero_slogan">
              Our vision is to become leaders in the app development industry,
              breaking down barriers to market entry for businesses of all
              sizes. We aspire to create a world where every business,
              regardless of its budget or resources, has access to high-quality,
              custom-built digital solutions that enhance their competitiveness
              and success.",
            </p>
          </div>
        </div>
        <div
          ref={card2Ref}
          style={{
            ...styles.card,
            backgroundImage:
              "linear-gradient( 135deg, transparent, #219DD9), url('/back.png')",
            // backgroundSize: " cover", // Make the gradient cover the full element, image covers normally
            // backgroundPosition: "center, center",

            borderRadius: "25px",
            // border: "5px solid transparent", // Increase border width if needed to show the gradient properly

            // Use background-clip to apply the gradient to the border and the image to the padding
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
          className="p-[2px] "
        >
          <div
            className="w-full h-full flex flex-col gap-5 justify-center px-5  rounded-3xl"
            style={{
              backgroundImage: "url('/back.png')",
            }}
          >
            <h2 className="font-extrabold text-[25px] bg-gradient-to-r from-[#173857] to-blueColor bg-clip-text text-transparent ">
              Our Mission
            </h2>
            <p className="main_hero_slogan text-center">
              Our mission is to transform innovative visions into dynamic
              applications for emerging businesses. We strive to deliver
              top-tier, cost-effective app development services, equipping every
              business with the digital tools they need to thrive in today’s
              fast-paced market.
            </p>
          </div>
        </div>
        <div
          ref={card3Ref}
          style={{
            ...styles.card,
            backgroundImage:
            "linear-gradient( 135deg, transparent, #219DD9), url('/back.png')",
            // backgroundSize: " cover", // Make the gradient cover the full element, image covers normally
            // backgroundPosition: "center, center",

            borderRadius: "25px",
            // border: "5px solid transparent", // Increase border width if needed to show the gradient properly

            // Use background-clip to apply the gradient to the border and the image to the padding
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
          className="p-[2px] "
        >
          <div
            className="w-full h-full flex flex-col gap-5 justify-center px-5  rounded-3xl"
            style={{
              backgroundImage: "url('/back.png')",
            }}
          >
            <h2 className="font-extrabold text-[25px] bg-gradient-to-r from-[#173857] to-blueColor bg-clip-text text-transparent ">
              Our Values
            </h2>
            <p className="main_hero_slogan">
              Our values drive every decision, strategy, and service we provide.
              We prioritize transparent relationships built on shared goals and
              mutual respect, recognizing that our success is tied to our
              clients' achievements. Committed to supporting them at every step,
              we harness the transformative power of technology and ideas to
              deliver tailored digital solutions accessible to businesses of all
              sizes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  wrapper: {
    position: "relative",
    // width: "80vw",
    width: "100%",
    height: "600px",
    overflow: "visible",
  },
  card: {
    position: "absolute",
    top: "40%",
    left: "40%",
    cursor: "pointer",
    width: "40%",
    height: "280px",
    margin: "-100px 0 0 -150px",
    // borderRadius: "25px",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    // padding: "1rem",
    textAlign: "center",
    transition: "transform 0.3s, filter 0.3s",
  },
};
