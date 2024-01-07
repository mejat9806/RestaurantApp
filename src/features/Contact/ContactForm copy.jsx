/* eslint-disable no-unused-vars */
import FormRow from "../../UI/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Text_area from "../../UI/Text_area";
import toast from "react-hot-toast";
function ContactForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors, isSubmitting } = formState;
  async function onSubmit(data) {
    data.access_key = "e5731306-0cbc-4953-b965-46971d7d2d0e";
    console.log(data);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Success");
      reset();
    }
  }

  return (
    <form
      className="space-y-5 mt-8 text-center mb-3 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="First Name" error={errors?.firstName?.message}>
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
      <FormRow label="Last Name" error={errors?.lastName?.message}>
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
      <FormRow label="Email" error={errors?.email?.message}>
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
      <FormRow label="Phone Number" error={errors?.phone?.message}>
        <Input
          type="tel"
          id="phone"
          inputName="phone"
          error={errors?.phone?.message}
          disabled={isSubmitting}
          register={register}
          placeholder="Enter phone number"
          pattern={{
            value: /^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/,
            message: "invalid Phone number",
          }}
        />
      </FormRow>
      {/* <FormRow label="Questions" error={errors?.question?.message}>
        <Input
          type="text"
          id="question"
          inputName="question"
          register={register}
          big={true}
        />
      </FormRow> */}
      <FormRow label="Questions" error={errors?.question?.message}>
        <Text_area
          id="question"
          inputName="question"
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

export default ContactForm;
