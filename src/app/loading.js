"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Loading() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://cdn.lottielab.com/l/7rgZcdq4Lusops.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex justify-center lottie items-center h-screen bg-gray-100">
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: 400, height: 400 }}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
}
