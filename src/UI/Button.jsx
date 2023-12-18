function Button({ children, onclick, design, to }) {
  const styles = {
    normal: "",
    button:
      " border-black border-2 p-2 rounded-lg font-semibold  hover:bg-black hover:text-yellow-300   transition-all duration-500 	w-[40%] sm:w-[110px] mt-4 wrap",
  };
  if (to) {
    <button className={`${styles[design]}`}>{children}</button>;
  }
  return (
    <button onClick={onclick} className={`${styles[design]}`}>
      {children}
    </button>
  );
}

export default Button;
