// eslint-disable-next-line no-unused-vars
function FormRow({ label, error, children, type, style }) {
  if (type === "booking") {
    return (
      <div className=" lg:pb-3 pb-6 lg:border-none ">
        <div className="flex items-center ">
          <div className="flex flex-col text-start relative">
            {" "}
            {label && (
              <label className="" htmlFor={children.props.id}>
                {label}
              </label>
            )}
            {children}
            {error && (
              <span
                className={`${
                  style === "info" ? " -bottom-5  right-0" : "-bottom-5 right-0"
                } absolute text-red-500 font-extrabold ${
                  style === "numberGuest"
                    ? "bottom-2 left-20 whitespace-nowrap"
                    : ""
                }`}
              >
                {error}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="border-b-2 border-black/20 lg:pb-3 pb-6 lg:border-none">
      <div className="relative grid md:grid-cols-formCol grid-cols-formColSmall gap-3 right ">
        {label && (
          <label className="contactLabel " htmlFor={children.props.id}>
            {label}
          </label>
        )}
        {children}
        {error && (
          <span
            className={`md:text-sm text-sm col-span-2 md:col-span-1 text-red-500 font-extrabold capitalize absolute right-0 -bottom-5 md:static md:flex md:flex-col justify-center`}
          >
            {error}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormRow;
