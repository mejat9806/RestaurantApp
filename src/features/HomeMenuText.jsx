import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

function HomeMenuText() {
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center ">
        Fresh Meat EveryDay
      </h1>
      <p className="w-[50%] text-center mx-auto">
        We&apos;re American Style restaurant that serves fresh America styled
        BBQ,burger and Pizza and many more.
      </p>
      <Button design="buttonBlack" onclick={() => navigate("/menu")}>
        Peek the Menu
      </Button>
    </div>
  );
}

export default HomeMenuText;
