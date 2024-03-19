import { PhoneCallIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  /*   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2500||window.scrollY > innerHeight*0.5 ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 */
  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight;
      /*      console.log(
        "scrollY:",
        window.scrollY,
        "window.innerHeight:",
        window.innerHeight,
        "document height:",
        document.documentElement.scrollHeight,
      ); */
      if (isAtBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-14 bg-black bottom-0 z-50 flex items-center justify-between mt-10  fixed ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="bg-yellow-300 rounded-full p-1 mx-5 hover:bg-white cursor-pointer">
        <PhoneCallIcon
          width={20}
          height={20}
          color="black"
          onClick={() => navigate("/contact")}
        />
      </div>
      <h1 className="text-yellow-300 mx-5">
        This is just a test page for my frontend study{" "}
      </h1>
    </div>
  );
}

export default Footer;
