'use client';

export const ourIndustriesData = [
  {
    title: 'Car Wash',
    des1: 'Transform your vehicle with state-of-the-art car wash techniques that clean every corner thoroughly. Our team uses advanced equipment to ensure even the toughest grime is removed.',
    des2: 'Eco-friendly solutions protect your car’s paint while delivering a brilliant shine.',
    des3: 'Experience professional care that preserves the quality of your vehicle’s finish, ensuring longevity. Enjoy the satisfaction of driving a spotless and polished car every day.',
    des4: 'From exterior cleaning to interior detailing, we provide a comprehensive service that stands out. Let us bring your car back to life with unmatched quality and care.',
    image: '/Industry/1.png',
  },
  {
    title: 'Delivery',
    des1: "Experience reliable logistics with delivery services designed to handle your parcels with care. Whether it's urgent documents or large packages, we’ve got you covered.",
    des2: 'Our network ensures timely deliveries while maintaining high standards of security and tracking.',
    des3: 'From personal packages to business consignments, we focus on precision and punctuality.',
    des4: 'With seamless processes and excellent customer support, your delivery experience will be stress-free. Count on us for all your logistics and shipping needs.',
    image: '/Industry/2.png',
  },
  {
    title: 'Health Care',
    des1: 'Revolutionize patient care with our innovative healthcare solutions tailored to meet the needs of modern medical practices. From clinics to hospitals, we ensure efficient service delivery.',
    des2: 'Seamlessly manage appointments, patient records, and billing with secure and compliant systems.',
    des3: 'Enable telemedicine services, real-time consultations, and access to health records for enhanced patient engagement.',
    des4: 'Leverage advanced analytics to monitor trends, optimize workflows, and improve operational efficiency.',

    des5: 'Trust us to provide scalable and user-friendly solutions to elevate your healthcare services.',

    image: '/Industry/3.png',
  },
  {
    title: 'Booking',
    des1: 'Simplify your reservations with our user-friendly booking platform. From hotels to events, we’ve made it easier than ever to secure your spot.',
    des2: 'Enjoy real-time availability checks and instant confirmations that save you time and effort.',
    des3: 'Our transparent pricing ensures there are no hidden surprises, giving you peace of mind.',
    des4: 'Let us handle the details while you focus on enjoying your experience. Seamless booking, tailored to your needs.',
    image: '/Industry/4.png',
  },
  {
    title: 'Ecommerce',
    des1: 'Deliver seamless shopping experiences with our tailored ecommerce solutions, designed to meet the demands of modern consumers. From small businesses to large enterprises, we’ve got you covered.',
    des2: 'Our robust platform ensures secure transactions, optimized product management, and user-friendly navigation to enhance customer satisfaction.',
    des3: 'Enable real-time inventory tracking, personalized recommendations, and streamlined checkout processes to boost sales and retention.',
    des4: 'With mobile-first designs, advanced analytics, and marketing tools, we empower you to stay ahead in the competitive ecommerce landscape.',
    des5: 'Count on us for comprehensive support and innovative solutions to grow your online business with confidence.',
    image: '/Industry/5.png',
  },
  {
    title: 'Fitness',
    des1: 'Empower fitness enthusiasts with cutting-edge digital solutions designed to transform their wellness journey.',
    des2: 'Offer intuitive features like personalized workout plans, progress tracking, and exercise demonstrations to keep users motivated.',
    des3: 'Integrate wearable devices and nutrition tracking for a comprehensive fitness experience.',
    des4: 'Enable easy class scheduling, membership management, and seamless payment systems for gyms and fitness centers.',
    des5: 'With data-driven insights and user-friendly designs, we help you create impactful fitness platforms that inspire and retain your customers.',
    image: '/Industry/6.png',
  },
];

import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { FiArrowUpRight } from 'react-icons/fi';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import dynamic from 'next/dynamic';

gsap.registerPlugin(ScrollTrigger);

// Lazy load the IphoneModel component
const IphoneModel = dynamic(() =>
  import('../../components/IphoneModel', {
    loading: () => null,
    ssr: false,
  })
);

const ScrollAnimation = () => {
  const imagePaths = [
    '/iphoneModel/Car wash.jpg',
    '/iphoneModel/Delivery.png',
    '/iphoneModel/Health Care.jpg',
    '/iphoneModel/Booking.jpg',
    '/iphoneModel/Ecommerce.jpg',
    '/iphoneModel/Fitness.png',
  ];
  let progress;

  const containerRef = useRef();
  const isInViewRef = useRef(false); // Ref instead of state for performance
  const textureUrlRef = useRef(imagePaths[0]);
  const [textureUrl, setTextureUrl] = useState(imagePaths[0]);
  const meshRef = useRef();

  const imageObjectsRef = useRef([]);

  useEffect(() => {
    // Preload images and store them in a ref
    imageObjectsRef.current = imagePaths.map((path) => {
      const img = new Image();
      img.src = path;
      return img;
    });

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = containerRef.current.querySelectorAll('.section');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=5000',
        scrub: 1,
        pin: true,
        toggleActions: 'play none none none',
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector('.heading');
      if (index === 0) {
        tl.fromTo(
          heading,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.2 },
          0
        );
        tl.fromTo(
          'iphone',
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.2 },
          0
        );
      }
      if (index > 0) {
        tl.to(
          sections[index - 1].querySelector('.heading'),
          { x: -50, opacity: 0, duration: 0.5 },
          index
        );

        tl.fromTo(
          heading,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          index + 0.5
        );
        const startRotation = Math.floor(index / 2) * Math.PI * 4;
        const endRotation = startRotation + Math.PI * 2;
        tl.to(
          {},
          {
            onUpdate: () => {
              const sectionProgress = tl.progress() * sections.length - index;
              if (
                (tl.progress() * sections.length - index).toFixed(3) == 0.002
              ) {
                progress = tl.progress() * sections.length - index;
              }

              if (sectionProgress >= progress) {
                progress = tl.progress() * sections.length - index;

                const rotationValue = gsap.utils.interpolate(
                  startRotation,
                  endRotation,
                  sectionProgress
                );

                meshRef.current.rotation.y = rotationValue;
                const earlyPoint = startRotation + Math.PI * 0.5;
                if (Math.abs(rotationValue - earlyPoint) < 0.1) {
                  setTextureUrl(imagePaths[index]);
                }
              } else {
                progress = tl.progress() * sections.length - index;
                const rotationValue = gsap.utils.interpolate(
                  startRotation,
                  endRotation,
                  sectionProgress
                );
                meshRef.current.rotation.y = rotationValue;
                const earlyPoint = startRotation + Math.PI * 0.5;
                if (Math.abs(rotationValue - earlyPoint) < 0.1) {
                  setTextureUrl(imagePaths[index - 1]);
                }
              }
            },

            ease: 'none',
          },
          index
        );
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInViewRef.current = true; // Ref update
          } else {
            isInViewRef.current = false; // Ref update
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center  h-[100vh] min-h-[400px]  main22 overflow-hidden"
      >
        {ourIndustriesData.map((item, index) => (
          <div
            key={index}
            className="section  absolute flex flex-row-reverse items-center justify-between gap-8  px-16"
          >
            <div className="w-[640px] heading">
              <h2 className="font-bold bg-gradient-to-r from-white via-blueColor to-blueColor bg-clip-text text-transparent main-heading text-[20px] sm:text-3xl md:text-5xl xl:text-6xl ">
                {item.title}
              </h2>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des1}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des2}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des3}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des4}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">
                {item?.des5}
              </p>
              <div className="flex justify-start items-center gap-3">
                <button className="mt-2 xl:text-xl text-white">
                  Contact Us
                </button>
                <div className="bg-white text-black mt-2 rounded-full">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <Canvas
                dpr={[0.5, 1]}
                camera={{ position: [25, 0, 0], fov: 50 }}
                style={{
                  height: '70vh',
                  minHeight: '400px',
                  maxHeight: '700px',
                }}
              >
                <Stage intensity={0.2} environment={'city'}>
                  <Suspense fallback={null}>
                    <IphoneModel textureUrl={textureUrl} meshRef={meshRef} />
                  </Suspense>
                </Stage>
              </Canvas>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimation;
