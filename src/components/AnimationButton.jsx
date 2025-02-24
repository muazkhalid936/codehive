"use client"; // For Next.js to enable animations

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";

export default function AnimatedButton({ button1 }) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const icon = iconRef.current;

    // Hover Animation
    const hoverAnimation = () => {
      gsap.to(text, { x: 80, duration: 0.3,  });
      gsap.to(icon, { x: -80, duration: 0.3,  });
    };

    // Reset Animation
    const resetAnimation = () => {
      gsap.to(text, { x: 0, duration: 0.3,  });
      gsap.to(icon, { x: 0, duration: 0.3,  });
    };

    button.addEventListener("mouseenter", hoverAnimation);
    button.addEventListener("mouseleave", resetAnimation);

    return () => {
      button.removeEventListener("mouseenter", hoverAnimation);
      button.removeEventListener("mouseleave", resetAnimation);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="flex items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition relative overflow-hidden"
    >
      <p ref={textRef} className="text-white transition-transform">
        {button1}
      </p>
      <div
        ref={iconRef}
        className="bg-white rounded-full p-1 sm:p-2 transition-transform"
      >
        <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px]" />
      </div>
    </button>
  );
}
