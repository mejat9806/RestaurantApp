import { useEffect, useRef, useState } from "react";

function useObserver(rootMargin = "0px") {
  const observers = useRef(new Map());
  const [visibilityStates, setVisibilityStates] = useState(new Map());

  const observeElement = (element) => {
    if (!observers.current.has(element)) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setVisibilityStates(
              (prevState) => new Map(prevState.set(element, true)),
            );
            observer.disconnect(); // Disconnect the observer once the element is visible
            observers.current.delete(element);
          }
        },
        { rootMargin, threshold: "0.1" },
      );
      observer.observe(element);
      observers.current.set(element, observer);
    }
    console.log(visibilityStates);
  };

  const disconnectObserver = (element) => {
    const observer = observers.current.get(element);
    if (observer) {
      observer.disconnect();
      observers.current.delete(element);
    }
  };

  useEffect(() => {
    return () => {
      observers.current.forEach((observer) => {
        observer.disconnect();
      });
      observers.current.clear();
    };
  }, []);

  return { observeElement, disconnectObserver, visibilityStates };
}

export default useObserver;