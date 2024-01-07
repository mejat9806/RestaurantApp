import { useForm } from "react-hook-form";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Text_area from "../../UI/Text_area";
import { useAddCustomer } from "./useCreateCustomer";

function BookingForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors, isSubmitting } = formState;
  const { addcustomer } = useAddCustomer();
  function onSubmit({ email, firstName, lastName, phone, request }) {
    console.log(email, firstName, lastName, phone, request);
    const newData = { email, firstName, lastName, phone };
    addcustomer(newData);
  }
  return (
    <form
      className="space-y-5 mt-8 text-center mb-3 w-full lg:flex lg:flex-col lg:justify-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex flex-col ">
        <h1 className="font-bold text-4xl mb-2 border-b-2 border-black">
          Contact Info
        </h1>
        <div className=" grid grid-cols-2 gap-3">
          <FormRow
            label="First Name"
            error={errors?.firstName?.message}
            type="booking"
            style="info"
          >
            <Input
              type="text"
              id="firstName"
              inputName="firstName"
              placeholder="your First Name"
              error={errors?.firstName?.message}
              register={register}
              disabled={isSubmitting}
            />
          </FormRow>
          <FormRow
            style="info"
            label="Last Name"
            error={errors?.lastName?.message}
            type="booking"
          >
            <Input
              type="text"
              id="lastName"
              error={errors?.lastName?.message}
              inputName="lastName"
              placeholder="Your Last Name"
              register={register}
              disabled={isSubmitting}
            />
          </FormRow>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FormRow
            label="Email"
            error={errors?.email?.message}
            type="booking"
            style="info"
          >
            <Input
              type="email"
              id="email"
              error={errors?.email?.message}
              inputName="email"
              placeholder=" Your Email"
              register={register}
              disabled={isSubmitting}
              pattern={{
                value: /\S+@\S+\.\S+/,
                message: "invalid email address",
              }}
            />
          </FormRow>
          <FormRow
            label="Phone Number"
            error={errors?.phone?.message}
            type="booking"
            style="info"
          >
            <Input
              type="tel"
              id="phone"
              inputName="phone"
              error={errors?.phone?.message}
              disabled={isSubmitting}
              register={register}
              placeholder="Enter phone number"
              pattern={{
                value: /^(\+?6?01|0[1-9])-?[0-9]{7}$|^(\+?6?01)[1]-?[0-9]{8}$/,
                message: "Invalid Phone number",
              }}
            />
          </FormRow>
        </div>
      </section>
      <section className="">
        <h1 className="font-bold text-4xl mb-2 border-b-2 border-black capitalize">
          booking Info
        </h1>
        <div className=" ">
          <div className="grid lg:grid-cols-4 grid-cols-2 justify-stretch">
            <div className="">
              {" "}
              <FormRow
                label="Date"
                error={errors?.date?.message}
                type="booking"
              >
                <Input
                  type="date"
                  id="date"
                  error={errors?.date?.message}
                  inputName="date"
                  register={register}
                  disabled={isSubmitting}
                />
              </FormRow>
            </div>

            <div className="justify-center">
              <FormRow
                label="Time"
                error={errors?.time?.message}
                type="booking"
              >
                <Input
                  type="select"
                  id="time"
                  inputName="time"
                  error={errors?.time?.message}
                  disabled={isSubmitting}
                  register={register}
                  pattern={{
                    value:
                      /^(\+?6?01|0[1-9])-?[0-9]{7}$|^(\+?6?01)[1]-?[0-9]{8}$/,
                    message: "Invalid Phone number",
                  }}
                />
              </FormRow>
            </div>
            <div className=" ">
              <FormRow
                label="How many people?"
                error={errors?.guestNo?.message}
                type="booking"
                style="numberGuest"
              >
                <Input
                  type="number"
                  id="guestNo"
                  inputName="guestNo"
                  error={errors?.guestNo?.message}
                  disabled={isSubmitting}
                  register={register}
                  minGuestNum={1}
                  maxGuestNum={20}
                  placeholder="Enter number of people"
                />
              </FormRow>
            </div>
          </div>
        </div>
      </section>

      <FormRow label="Notes" error={errors?.request?.message} type="booking">
        <Text_area
          id="notes"
          inputName="request"
          register={register}
          disabled={isSubmitting}
          error={errors?.question?.message}
          placeholder="Place your question here"
        />
      </FormRow>
      <div className="flex justify-end gap-x-7">
        <Button
          type="reset"
          design="buttonReset"
          onclick={reset}
          disable={isSubmitting}
        >
          Cancel
        </Button>
        <Button design="buttonConfirm" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default BookingForm;
