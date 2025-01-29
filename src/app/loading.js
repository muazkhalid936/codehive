"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import lottie-react with SSR disabled.
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function Loading() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://cdn.lottielab.com/l/7rgZcdq4Lusops.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex overflow-hidden lottie justify-center items-center h-screen bg-gray-100">
      {animationData ? (
        <Lottie animationData={animationData} loop className="h-[40vh]" />
      ) : (
        <p></p>
      )}
    </div>
  );
}
