import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const CardCarousel = ({ cards }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 px-2 py-8 w-full overflow-hidden"
      >
        {cards.map((card, index) => (
          <div key={index} className="w-[20vw]">
            <Card
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10"
        style={{ zIndex: 10 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10"
        style={{ zIndex: 10 }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default CardCarousel;
