import BookingForm from "../features/Booking/BookingForm";

function Booking() {
  return (
    <div
      className="flex flex-col justify-center text-center items-center w-full space-y-7 mb-48 mt-16"
      id="contactpage"
    >
      <h1 className="font-menu sm:text-8xl text-5xl">Booking Now</h1>
      <p className="contactSubText">Ready to book your dinner </p>
      <div className=" px-6 bg-yellow-200/70 drop-shadow-2xl lg:w-max md:w-max sm:w-min rounded-md">
        <BookingForm />
      </div>
      {/*   <div className=" px-6 bg-yellow-200/70 drop-shadow-2xl lg:w-[1050px] md:w-max sm:w-min rounded-md">
        <BookingForm />
      </div> */}
    </div>
  );
}

export default Booking;
