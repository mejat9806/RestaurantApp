/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useMemo, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import DrinkMenu from "./DrinkMenu";
function DrinkSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useMemo(
    //useMemo will return the value of a function and avoid rerendering it unless the dependency is changed
    () => [
      { img: "/public/drink/drink (1).webp" },
      { img: "/public/drink/drink (2).webp" },
      { img: "/public/drink/drink (3).webp" },
      { img: "/public/drink/drink (4).webp" },
      { img: "/public/drink/drink (5).webp" },
    ],
    [],
  );

  const nextIndex = useCallback(
    //use callback is used for triggering function based on conditon and prevent unnessary rerender  ,it will make this fuction only run once unless there is a change in the dependecies
    (currentIndex) => {
      if (currentIndex >= slides.length - 1) return 0;
      return currentIndex + 1;
    },
    [slides],
  );
  useEffect(() => {
    const slideID = setInterval(() => {
      setCurrentIndex((index) => nextIndex(index));
    }, 30000);

    return () => {
      clearInterval(slideID);
    };
  }, [nextIndex]);
  function preIndex(currentIndex) {
    if (currentIndex === 0) return slides.length - 1;
    return currentIndex - 1;
  }
  if (currentIndex < 0 || currentIndex >= slides.length) {
    return null;
  }
  return (
    <div className=" m-auto pt-5 px-4  group drop-shadow-2xl    sm:h-[580px]  h-[400px]  sm:w-[26rem] w-[300px] mb-52 sm:mb-0">
      <div
        className="w-full h-full rounded-2xl bg-center bg-auto duration-500  "
        style={{
          backgroundImage: `url("${slides[currentIndex].img}") `,
          backgroundSize: "100%",
          backgroundPosition: "center top",
          animation: "panDown 30s infinite",

          loading: "lazy",
          objectFit: "cover",
        }}
      >
        <img
          src={slides[currentIndex].img}
          alt={`Slide ${currentIndex + 1}`}
          loading="lazy"
          style={{ display: "none" }}
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
