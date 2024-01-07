// eslint-disable-next-line no-unused-vars
function FormRow({ label, error, children }) {
  return (
    <div className="border-b-2 border-black/20 pb-6 lg:border-none">
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
