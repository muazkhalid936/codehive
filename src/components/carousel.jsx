import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "./Card";
import "@splidejs/react-splide/css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides for larger screens
    slidesToScroll: 1,
    gap: "1rem", // Optional: Add space between slides
    breakpoints: {
      1024: {
        slidesToShow: 2, // For tablet and smaller screens, show 2 slides
      },
      768: {
        slidesToShow: 1, // For mobile and very small screens, show 1 slide
      },
    },
  };

  return (
    <Splide
      options={settings}
      aria-label="My Favorite Images"
      className="container flex justify-center items-center px-40 mx-auto"
    >
      <SplideSlide>
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
      <SplideSlide>
        <Card
          head="Laam – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/laam.jpg')"
        />
      </SplideSlide>
      <SplideSlide>
        <Card
          head="Legal Wise – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/legal wise.jpg')"
        />
      </SplideSlide>
      <SplideSlide>
        <Card
          head="Saloon Booking – Flutter"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/saloon booking.jpg')"
        />
      </SplideSlide>
      <SplideSlide>
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
      <SplideSlide>
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
      <SplideSlide>
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
