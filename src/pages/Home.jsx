import BurgerPromo from "../UI/BurgerPromo";
import DrinkSlider from "../UI/DrinkSlider";
import PizzaPromo from "../UI/PizzaPromo";
import Special from "../UI/Special";
import { useItems } from "../context/contextItem";
import LogoForSection from "../UI/LogoForSection";
import Footer from "../UI/Footer";

function Home() {
  const { PromoData: burgerData } = useItems("Burger");
  const { PromoData: pizzaData } = useItems("Pizza");
  console.log(pizzaData);
  return (
    <div className="max-w-[150%] w-full  mx-auto my-0 flex flex-col h-full relative">
      <div className="">
        <BurgerPromo data={burgerData[0]} />
        <PizzaPromo data={pizzaData[0]} />
      </div>

      <div className="bg-black items-center align-middle pb-2 flex justify-center">
        <LogoForSection>OUR SPECIAL </LogoForSection>
      </div>
      <div className="flex justify-center mt-7">
        <Special />
      </div>
      <div className="flex justify-center bg-black items-center align-middle pb-2">
        <LogoForSection> TRY OUR DRINK</LogoForSection>
      </div>
      <div className="">
        <DrinkSlider />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
