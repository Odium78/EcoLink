import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ children }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden w-full px-20 pb-13" ref={emblaRef}>
      <div className="flex">
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="flex-[0_0_100%] flex justify-center items-center p-4"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
