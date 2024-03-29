function Text_area({
  id,
  inputName,
  register,
  pattern,
  placeholder,
  disabled,
  error,
}) {
  if (inputName === "request") {
    return (
      <textarea
        disabled={disabled}
        className={`h-[90px] lg:w-[600px] sm:w-[500px] w-[340px]  rounded-sm focus:outline-none focus:ring border-black border-2 focus:ring-yellow-500  focus:border-none focus:scale-[1.01] transition-all ease-in-out drop-shadow-xl disabled:bg-yellow-400/30 ${
          error ? "bg-red-300" : ""
        }`}
        id={id}
        {...register(inputName, {
          pattern: pattern,
        })}
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <textarea
      disabled={disabled}
      className={`h-[90px] lg:w-[600px]  rounded-sm focus:outline-none focus:ring border-black border-2 focus:ring-yellow-500  focus:border-none focus:scale-[1.01] transition-all ease-in-out drop-shadow-xl disabled:bg-yellow-400/30 ${
        error ? "bg-red-300" : ""
      }`}
      id={id}
      {...register(inputName, {
        required: "This is required",
        pattern: pattern,
      })}
      placeholder={placeholder}
    ></textarea>
  );
}

export default Text_area;
