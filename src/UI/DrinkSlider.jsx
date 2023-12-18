/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import DrinkMenu from "./DrinkMenu";
function DrinkSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { img: "/drink/drink (1).jpg" },
    { img: "/drink/drink (2).jpg" },
    { img: "/drink/drink (3).jpg" },
    { img: "/drink/drink (4).jpg" },
    { img: "/drink/drink (5).jpg" },
  ];

  useEffect(() => {
    const slideID = setInterval(() => {
      setCurrentIndex((index) => nextIndex(index));
    }, 30000);
  }, []);
  function nextIndex(currentIndex) {
    if (currentIndex >= slides.length - 1) return 0;
    return currentIndex + 1;
  }
  function preIndex(currentIndex) {
    if (currentIndex === 0) return slides.length - 1;
    return currentIndex - 1;
  }
  if (currentIndex < 0 || currentIndex >= slides.length) {
    return null; // or render a loading state or default content
  }
  return (
    <div className=" m-auto pt-5 px-4  group drop-shadow-2xl   h-[580px]    w-[26rem] ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-auto duration-500 "
        style={{
          backgroundImage: `url("${slides[currentIndex].img}") `,
          backgroundSize: "100%",
          backgroundPosition: "center top",
          animation: "panDown 30s infinite",
          // Add lazy loading to the background image
          loading: "lazy",
          objectFit: "cover",
        }}
      >
        {/* You can also add an img element with lazy loading if needed */}
        <img
          src={slides[currentIndex].img}
          alt={`Slide ${currentIndex + 1}`}
          loading="lazy"
          style={{ display: "none" }} // Hide the img element
        />
      </div>

      <div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft
            size={30}
            onClick={() => setCurrentIndex((index) => preIndex(index))}
          />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight
            size={30}
            onClick={() => setCurrentIndex((index) => nextIndex(index))}
          />
        </div>
      </div>
      <DrinkMenu />
    </div>
  );
}
export default DrinkSlider;
