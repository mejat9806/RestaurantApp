/* eslint-disable no-unused-vars */
/* function Input({
  type,
  id,
  disabled,
  inputName,
  register,
  pattern,
  big,
  error,
  minGuestNum,
  maxGuestNum,
}) {
  if (type === "select") {
    return (
      <select name="time" className={`inputBox w-full text-center `}>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    );
  }
  console.log(minGuestNum);
  return (
    <input
      type={type}
      min={0}
      max={20}
      id={id}
      {...register(inputName, {
        required: "This is required",
        pattern: pattern,
        min: {
          value: minGuestNum,
          message: "Please atleast 1 guest",
        },
        max: { value: maxGuestNum, message: "max guest is 20" },
      })}
      disabled={disabled}
      className={` inputBox ${big ? "h-20" : ""}  text-center`}
    />
  );
} */
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
  minGuestNum,
  maxGuestNum,
}) {
  if (type === "select") {
    return (
      <select name="time" className={`inputBox w-max text-center mb-3 `}>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    );
  }
  console.log(minGuestNum);
  return (
    <input
      type={type}
      min={0}
      max={20}
      id={id}
      {...register(inputName, {
        required: "Required",
        pattern: pattern,
        min: {
          value: minGuestNum,
          message: "Please atleast 1 guest",
        },
        max: { value: maxGuestNum, message: "max guest is 20" },
      })}
      disabled={disabled}
      className={` inputBox ${
        big ? "h-20" : ""
      }  text-center sm:w-max w-full  ${error ? "bg-red-200 " : ""} `}
    />
  );
}

export default Input;
