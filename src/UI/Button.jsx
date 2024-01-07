function Button({ children, onclick, design, to, type, disabled }) {
  const styles = {
    normal: "",
    button:
      " border-black border-2 p-2 font-semibold  hover:bg-black hover:text-yellow-300   transition-all duration-500 sm:w-[170px] mt-4 ",
    buttonClose: "z-50 ",
    buttonConfirm:
      " border-black border-2 p-2 font-semibold  hover:bg-black hover:text-yellow-300   transition-all duration-500 sm:w-[170px]  bg-teal-200 ",
    buttonReset:
      " border-black border-2 p-2 font-semibold  hover:bg-black hover:text-yellow-300   transition-all duration-500 sm:w-[170px] bg-red-500",
    buttonBlack:
      " border-yellow-300 border-2 p-2 font-semibold bg-yellow-300  text-black hover:bg-yellow-300 hover:text-black   transition-all duration-500 w-[170px]  mt-4 ",
    buttonSpecial:
      " border-black border-2 p-3  font-semibold  hover:bg-black hover:text-yellow-300   transition-all duration-500 	w-[40%] sm:w-[160px] mt-4",
  };
  if (to) {
    <button className={`${styles[design]}`}>{children}</button>;
  }
  return (
    <button
      onClick={onclick}
      className={`${styles[design]} disabled:opacity-75`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
