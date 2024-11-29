"use client";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import Carousel from "../components/carousel";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <OurProcess />
        <div className="text-white text-xl font-bold text-center my-10">
          Our Recent Work
        </div>
        <Carousel />
      </div>
    </>
  );
}
