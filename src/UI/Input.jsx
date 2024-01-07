/* eslint-disable no-unused-vars */
function Input({
  type,
  id,
  disabled,
  inputName,
  register,
  pattern,
  big,
  error,
}) {
  return (
    <input
      type={type}
      id={id}
      {...register(inputName, {
        required: "This is required",
        pattern: pattern,
      })}
      disabled={disabled}
      className={` inputBox ${big ? "h-20" : ""} ${
        error ? "bg-red-300" : ""
      } text-center`}
    />
  );
}

export default Input;
