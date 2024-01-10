import ContactForm from "../features/Contact/ContactForm";
import useScroll from "../hooks/useScroll";

function Contact() {
  useScroll("contactpage");
  return (
    <div
      className="flex flex-col justify-center text-center items-center w-full space-y-7 mb-48 mt-16"
      id="contactpage"
    >
      <h1 className="font-menu sm:text-8xl text-5xl">Contact Us</h1>
      <p className="contactSubText">Have question about us .Just ask away!!!</p>
      <div className=" px-6 bg-yellow-200/70 drop-shadow-2xl lg:w-[1050px] md:w-max sm:w-min rounded-md ">
        <ContactForm />
      </div>
      {/*   <div className=" px-6 bg-yellow-200/70 drop-shadow-2xl md:w-max sm:w-max rounded-md">
        <ContactForm />
      </div> */}
    </div>
  );
}

export default Contact;
