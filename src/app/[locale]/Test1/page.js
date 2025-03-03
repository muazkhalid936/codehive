// 'use client';

// import { useState, useEffect } from 'react';
// import { gsap } from 'gsap';

// const cardsData = [1, 2, 3, 4, 5];

// export default function StackingCards() {
//   const [cards, setCards] = useState(cardsData);

//   useEffect(() => {
//     gsap.set('.card', { opacity: 1 });
//     positionCards();
//   }, [cards]);

//   const positionCards = () => {
//     gsap.to('.card', { duration: 0.5, opacity: 1 });
//     cards.forEach((_, index) => {
//       let pos = index - 2; // Center the active card
//       let zIndex = 5 - Math.abs(pos);
//       let xOffset = pos * 50;
//       if (pos < -1) xOffset -= 20; // Shift more to left when stacked
//       if (pos > 1) xOffset += 20; // Shift more to right when stacked
//       gsap.to(`#card-${index}`, {
//         x: xOffset,
//         scale: pos === 0 ? 1 : 0.9,
//         zIndex,
//         duration: 0.5,
//       });
//     });
//   };

//   const handleNext = () => {
//     setCards((prev) => {
//       const newCards = [...prev];
//       newCards.unshift(newCards.pop());
//       return [...newCards];
//     });
//   };

//   const handlePrev = () => {
//     setCards((prev) => {
//       const newCards = [...prev];
//       newCards.push(newCards.shift());
//       return [...newCards];
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="relative w-64 h-80 flex items-center justify-center">
//         {cards.map((card, index) => (
//           <div
//             key={card}
//             id={`card-${index}`}
//             className="card absolute w-48 h-64 bg-blue-500 text-white flex items-center justify-center rounded-xl shadow-lg"
//           >
//             {card}
//           </div>
//         ))}
//       </div>
//       <div className="mt-4 flex gap-4">
//         <button onClick={handlePrev}>Prev</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import OurIndustries from '../../../components/OurIndustries/OurIndustries'
const page = () => {
  return (
    <div className='bg-[#000B17]'>

<OurIndustries />
    </div>
  ) 
}

export default page
