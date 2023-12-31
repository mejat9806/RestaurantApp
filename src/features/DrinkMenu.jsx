import { useScroll } from "framer-motion";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function DrinkMenu() {
  const navigate = useNavigate();
  useScroll("gotoMenu");
  return (
    <div className=" m-auto   group drop-shadow-2xl sm:max-w-[100%] sm:w-[100%] sm:h-[480px] w-full mb-8 ">
      <div className="w-full  rounded-2xl bg-center bg-auto duration-500 ">
        <h1 className="text-black font-extrabold p-4 text-5xl text-center">
          Drink
        </h1>
        <p className=" text-center text-lg">
          At My Borgur ,we always try to give something new to our
          customer.Check out out collection of Drink that can help you to
          extinguish your thirst for something new to drink
        </p>
      </div>
      <div className="flex justify-center pt-4 ">
        <Button design="buttonSpecial" onclick={() => navigate("/menu/drink")}>
          Drink Menu
        </Button>
      </div>
    </div>
  );
}

export default DrinkMenu;
