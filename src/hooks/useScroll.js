import { useEffect } from "react";

function useScroll(targetID) {
  useEffect(() => {
    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToTarget();
  }, [targetID]);

  return null;
}

export default useScroll;
