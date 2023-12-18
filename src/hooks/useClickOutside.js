import { useEffect, useRef } from "react";

export function usClickOutside(handler, listenCapture = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapture);
    },
    [handler, listenCapture],
  );
  return ref;
}
