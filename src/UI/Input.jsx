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
  dateError,
}) {
  if (type === "select") {
    return (
      <select
        disabled={disabled}
        name="time"
        className={`inputBox w-max text-center mb-3 disabled:bg-yellow-400/30`}
        {...register(inputName, {
          required: "Required",
        })}
      >
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    );
  }
  return (
    <input
      type={type}
      min={minGuestNum}
      max={maxGuestNum}
      id={id}
      disabled={disabled}
      {...register(inputName, {
        required: "Required",
        pattern: pattern,
        min: {
          value: minGuestNum,
          message: "Please atleast 1 guest",
        },
        max: { value: maxGuestNum, message: "max guest is 20" },
      })}
      className={` inputBox ${
        big ? "h-20" : ""
      }  text-center sm:w-max w-full  ${error ? "bg-red-200 " : ""} ${
        dateError ? "bg-red-200" : ""
      } disabled:bg-yellow-400/30 `}
    />
  );
}

export default Input;
