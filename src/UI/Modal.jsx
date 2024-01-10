import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModelContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModelContext.Provider value={{ openName, close, open }}>
      {children}
    </ModelContext.Provider>
  );
}
function OpenFunction({ children, opens: opensWindowName }) {
  console.log(opensWindowName);
  const { open } = useContext(ModelContext);
  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName), console.log("click");
    },
  });
}
function WindowFunction({ children, name }) {
  const { close, openName } = useContext(ModelContext);
  if (name !== openName) return null;
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-4 rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={close}
        >
          X
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}
Modal.Open = OpenFunction;
Modal.Window = WindowFunction;
export default Modal;
