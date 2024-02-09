/* eslint-disable react-hooks/exhaustive-deps */
import BurgerPromo from "../features/BurgerPromo";
import DrinkSlider from "../features/DrinkSlider";
import PizzaPromo from "../features/BBQPromo";
import Special from "../features/Special";
import { useItems } from "../context/contextItem";

import { useEffect, useRef } from "react";
import useObserver from "../hooks/useObserver";
import LogoForSection from "../UI/LogoForSection";
import MenuHome from "../features/MenuHome";

function Home() {
  const { PromoData: burgerData } = useItems("Burger");
  const { PromoData: BBQData } = useItems("BBQ");

  const specialRef = useRef();
  const menuRef = useRef();
  const drinkRef = useRef();

  const { observeElement, disconnectObserver, visibilityStates } =
    useObserver();
  useEffect(() => {
    observeElement(specialRef.current);
    observeElement(menuRef.current);
    observeElement(drinkRef.current);
    return () => {
      disconnectObserver(specialRef.current);
      disconnectObserver(menuRef.current);
      disconnectObserver(drinkRef.current);
    };
  }, [disconnectObserver, observeElement]);
  const specialVisible = visibilityStates.get(specialRef.current) || false;
  const MenuVisible = visibilityStates.get(menuRef.current) || false;
  const DrinkVisible = visibilityStates.get(drinkRef.current) || false;

  return (
    <div className="max-w-[110%] w-full  mx-auto my-0 flex flex-col  relative mb-[50%] sm:mb-0">
      <div className="">
        <BurgerPromo data={burgerData[0]} />
        <PizzaPromo data={BBQData[0]} />
      </div>

      <div className="bg-black items-center align-middle pb-2 flex justify-center">
        <LogoForSection>OUR SPECIAL </LogoForSection>
      </div>
      <div
        className={`flex justify-center mt-7  ${
          specialVisible
            ? "opacity-100   translate-y-0 transition-all duration-300 delay-100 z-10"
            : "translate-y-[10%] opacity-0 transition-all duration-300 delay-100 -z-50"
        }`}
        ref={specialRef}
      >
        <Special />
      </div>
      <div className="bg-black items-center align-middle pb-2 flex justify-center">
        <LogoForSection>OUR MENU </LogoForSection>
      </div>
      <div
        className={` bg-black h-full w-full  ${
          MenuVisible
            ? "opacity-100   translate-y-0 transition-all duration-300 delay-100 z-10"
            : "translate-y-[10%] opacity-0 transition-all duration-300 delay-100 -z-50"
        }`}
        ref={menuRef}
      >
        <MenuHome />
      </div>
      <div className="flex justify-center bg-black items-center align-middle pb-2 ">
        <LogoForSection> TRY OUR DRINK</LogoForSection>
      </div>
      <div
        className={`${
          DrinkVisible
            ? "opacity-100   translate-y-0 transition-all duration-300 delay-100 z-10"
            : "translate-y-[10%] opacity-0 transition-all duration-300 delay-100 -z-50"
        } `}
        ref={drinkRef}
      >
        <DrinkSlider />
      </div>
    </div>
  );
}

export default Home;
