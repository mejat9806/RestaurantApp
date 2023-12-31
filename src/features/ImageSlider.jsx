/* eslint-disable no-unused-vars */

import { useState } from "react";
import { IMAGE } from "../constants/BurgerImage";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "./Image";

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = IMAGE.length;

  return <div></div>;
}

export default ImageSlider;
