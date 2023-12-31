/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { formatCurrency } from "../utils/helper";

function MenuItem({ title, imagesrc, description, imageSmall, price }) {
  useEffect(() => {
    const blurDiv = document.querySelectorAll(".blur-load");
    blurDiv.forEach((div) => {
      const img = div.querySelector("img");
      function loaded() {
        div.classList.add("loaded");
      }
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }, []);

  return (
    <div
      className={`menuItem  shadow-xl shadow-black/30 bg-yellow-200/80 pb-6  `}
    >
      <div className="w-full  h-[15%]  top-0 bg-black mb-2 flex self-center justify-center ">
        <h1 className="menuItemTittle text-yellow-300 my-2 z-10 ">{title}</h1>
      </div>

      <div
        className="blur-load "
        style={{
          backgroundImage: `url(${imageSmall})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "1/1",
          boxSizing: "border-box",
        }}
      >
        <img
          src={imagesrc}
          alt={title}
          loading="lazy"
          className={`aspect-square  object-cover object-center `}
        />
      </div>
      <p className="menuItemWord w-full capitalize">{description}</p>
      {price && <p className="font-extrabold">{formatCurrency(price)}</p>}
    </div>
  );
}

export default MenuItem;

/* import { useState } from "react";

function MenuItem({ title, imagesrc, description }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    console.log("Image loaded");
    setIsLoading(false);
  };

  const handleImageError = (e) => {
    console.error("Image failed to load:", e);
    setIsLoading(false);
  };

  return (
    <div className="menuItem">
      <h1 className="menuItemTittle">{title}</h1>
      {isLoading ? <h1>Loading...</h1> : null}
      <img
        src={imagesrc}
        alt={title}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <p className="menuItemWord">{description}</p>
    </div>
  );
}

export default MenuItem;
 */
