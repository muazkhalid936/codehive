"use client";
import { useEffect } from "react";
import "./Stack.css";
import gsap from "gsap";
import useStore from "../../store/useUserStore";
import StackCard from "./StackCard";

const StackingImages = () => {
  const { language,setModel } = useStore();
  useEffect(() => {
    const cardCount = 6; // Total numbers of cards
    const cards = Array.from(
      { length: cardCount },
      (_, index) => `.card-${index + 1}`
    );

    gsap.set(cards, {
      yPercent: 0,
      scale: 1,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=6000",
        scrub: 2,
      },
    });

    cards.forEach((card, index) => {
      timeline.to(
        card,
        {
          yPercent: -100,
          duration: 5,
        },
        index * 2 // Delay each card's animation
      );
    });
  }, []);
  return (
    <div
      className="container  mx-auto flex flex-col gap-10"
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="cards h-[100vh] min-h-[400px]  container mx-auto">
        <div className="card card-6">
          <StackCard
            imgLink="/services/6.jpg"
            bg="/services/bg-ai.png"
            type="Security"
            heading={
              language === "en"
                ? "Business Intelligence & Data Analysis"
                : "تحليل البيانات وذكاء الأعمال"
            }
            para={
              language === "en"
                ? "Our BI and data analysis solutions turn raw data into actionable insights, streamlining collection and visualization to drive growth and optimize performance."
                : "تحوّل حلولنا في ذكاء الأعمال وتحليل البيانات المعلومات الخام إلى رؤى قابلة للتنفيذ، مما يسهل جمع البيانات وعرضها بطرق مبتكرة لدفع النمو وتحسين الأداء."
            }
            num="06"
            link="/service/business-intelligence"
          />
        </div>

        <div className="card card-5">
          <StackCard
            imgLink="/services/5.jpg"
            bg="/services/bg-digital.png"
            type="Cloud"
            heading={
              language === "en"
                ? "Digital Consultation"
                : "استشارات الرقمية"
            }
            para={
              language === "en"
                ? "Strategic guidance to align technology with your business goals and maximize efficiency."
                : "توجيه استراتجي لملاءمة التكنولوجا مع أھداف عملك .وتعزز الكفاءة إلى أقصى حد"
            }
            num="05"
            link="/service/digital-consultation"
          />
        </div>

        <div className="card card-4">
          <StackCard
            bg="/services/bg-ai.png"
            imgLink="/services/4.jpg"
            type="Web"
            heading={
              language === "en"
                ? "Digital Transformation & Automation"
                : "التحول الرقمي والأتمتة"
            }
            para={
              language === "en"
                ? "Digital transformation and automation improve efficiency, cut costs, and enable innovation through real-time insights for smarter decision-making."
                : "يعمل التحول الرقمي والأتمتة على تحسين الكفاءة، وتقليل التكاليف، وتعزيز الابتكار من خلال التحليلات الفورية لاتخاذ قرارات أكثر ذكاءً."
            }
            num="04"
            link="/service/digital-transformation"
          />
        </div>

        <div className="card card-3">
          <StackCard
            para={
              language === "en"
                ? "Developing software that optimizes business and ensures a smooth user experience."
                : "نطور برمجيات تعزز كفاءة اعمال وتوفر تجربة مستخدم .سلسة"
            }
            imgLink="/services/3.jpg"
            bg="/services/bg-digital.png"
            type="Digital"
            num="03"
            heading={
              language === "en"
                ? " Software Development"
                : "تطوير البرمجيات"
            }
            link="/service/software-development"
          />
        </div>

        <div className="card card-2">
          <StackCard
            bg="/services/bg-ai.png"
            imgLink="/services/2.jpg"
            type="Consulting"
            num="02"
            heading={
              language === "en"
                ? "Website Development"
                : "تطوير المواقع الكترونية"
            }
            link="/service/website-development"
            para={
              language === "en"
                ? "Dynamic, Responsive web applications that captivate your audience and serves business needs."
                : "تطبيقات ويب ديناميكية ومتجاوبة تجذب جمهورك وتلبي احتياجات الأعمال."
            }
          />
        </div>
        <div className="card card-1">
          <StackCard
            bg="/services/bg-digital.png"
            type="AI"
            imgLink="/services/1.jpg"
            num="01"
            heading={
              language === "en"
                ? "Mobile App Development"
                : "تطوير تطبقات الھواتف المحمولة"
            }
            link="/service/mobile-app-development"
            para={
              language === "en"
                ? "Custom built mobile apps for Android and iOS, tailored to your needs."
                : "،iOS و Android تطبيقات مخصصة للھواتف بنظامي"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
