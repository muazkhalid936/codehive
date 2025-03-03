"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
const testimonialsData = [
  {
    id: 2,
    name: "Ayesha Khan ",
    role: "CEO, Tech Innovations Ltd ",
    content:
      "The team at CodeHive demonstrated exceptional teamwork and creativity throughout our collaboration. They took the time to understand our needs and provided valuable insights, helping us achieve our project goals. I am grateful for their support and highly recommend them.",
    contentAr:
      "أظهر فريق CodeHive روح العمل الجماعي والإبداع بشكل استثنائي طوال فترة تعاوننا. لقد حرصوا على فهم احتياجاتنا وقدموا رؤى قيمة ساعدتنا في تحقيق أهداف مشروعنا. أنا ممتنة لدعمهم وأوصي بهم بشدة.",
  },
  {
    id: 3,
    name: "Ahmed Raza ",
    role: "Project Manager, Global Solutions Inc. ",
    content:
      "Working with CodeHive was an absolute pleasure. Their team was not only skilled but also highly professional, ensuring that all deadlines were met and that the final product exceeded our expectations. Their attention to detail and customer-first attitude made them stand out.",
    contentAr:
      "كان العمل مع CodeHive تجربة رائعة. لم يكن فريقهم ماهرًا فحسب، بل كان أيضًا محترفًا للغاية، مما ضمن الالتزام بالمواعيد النهائية وتقديم منتج يفوق توقعاتنا. لقد تميزوا باهتمامهم بالتفاصيل ونهجهم الذي يضع العميل في المقام الأول.",
  },
  {
    id: 4,
    name: "Sara Ali ",
    role: "Head of Operations, NextGen Enterprises ",
    content:
      "From the initial consultation to the final delivery, CodeHive showed outstanding communication and problem-solving skills. They were always available to discuss concerns and were quick to adapt to any changes in the project. Their work ethic and results were truly impressive.",
    contentAr:
      "من الاستشارة الأولية إلى التسليم النهائي، أظهر CodeHive تواصلًا متميزًا ومهارات استثنائية في حل المشكلات. كانوا دائمًا متاحين لمناقشة أي مخاوف وسرعان ما تأقلموا مع أي تغييرات في المشروع. كان التزامهم بالعمل ونتائجهم مذهلة بحق.",
  },
];

export default function StackingCards() {
  const [cards, setCards] = useState(testimonialsData);

  useEffect(() => {
    gsap.set(".stacking-card", { opacity: 1 });
    positionCards();
  }, [cards]);

  const positionCards = () => {
    gsap.to(".stacking-card", { duration: 0.5, opacity: 1 });
    cards.forEach((_, index) => {
      let pos = index - 1; // Center the active card
      let zIndex = 3 - Math.abs(pos);
      let yOffset = pos * 5;
      let rotation = pos * 5; // Slight rotation for previous and next cards
      gsap.to(`#stacking-card-${index}`, {
        y: yOffset,
        rotation: rotation,
        scale: 1,
        zIndex,
        duration: 0.5,
      });
    });
  };

  const handleNext = () => {
    setCards((prev) => {
      const newCards = [...prev];
      newCards.unshift(newCards.pop());
      return [...newCards];
    });
  };

  const handlePrev = () => {
    setCards((prev) => {
      const newCards = [...prev];
      newCards.push(newCards.shift());
      return [...newCards];
    });
  };

  const getCardColor = (index) => {
    if (index === 0) return "bg-[#219DD9]"; // Top card
    if (index === 1) return "bg-[#000C1A]"; // Previous card
    return "bg-[#125784]"; // Last card
  };

  return (
    <div className="flex flex-col items-center justify-center h-[500px] relative  ">

<h2
            className=" text-left  absolute top-[40px]  sub_heading font-gilroy"
            style={{
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            What They <span className="text-blueColor">Say</span> About Us
          </h2>

      <div className="relative w-full flex items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={card.id}
            id={`stacking-card-${index}`}
            className={`stacking-card absolute overflow-hidden h-[260px] w-[350px] testinomial-card text-white flex items-center justify-center rounded-xl shadow-lg ${getCardColor(
              index
            )}`}
          >
            <div>
              <img
                src="/PartnerLogo.png"
                alt="Vector Image"
                className="absolute object-contain top-0 right-[-2vw] w-16 h-20 sm:h-22 mr-2"
              />
            </div>
            <div className="p-4">
              <p className="main_hero_slogan ">{card.content}</p>
              {/* {card.contentAr && <p className="text-lg mt-4">{card.contentAr}</p>} */}
              <p className="font-bold mt-4  ">{card.name}</p>
              <p className="main_hero_slogan">{card.role}</p>
            </div>
            <img
              src="/technologies/shade.png"
              alt="image"
              className="absolute bottom-[-50px] left-[-50px]"
            />{" "}
            <img
              src="/quote.png"
              alt="Quotation Marks"
              className="w-8 absolute top-2 left-4 h-8"
            />
          </div>
        ))}
      </div>

      <div className=" gap-2 flex absolute bottom-0 justify-center mb-5 sm:hidden sm:mt-0">
        <button
          className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
          onClick={handlePrev} // Slide to previous
        >
          <HiChevronLeft className="text-white text-xl sm:text-2xl font-bold" />
        </button>
        <button
          className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center ease-in-out duration-300 justify-center hover:bg-blueColor"
          onClick={handleNext} // Slide to next
        >
          <HiChevronRight className="text-white text-xl sm:text-2xl font-bold" />
        </button>
      </div>
    </div>
  );
}
