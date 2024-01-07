import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomer } from "./AddBookingAPI";
import toast from "react-hot-toast";

export function useAddCustomer() {
  const queryClient = useQueryClient();
  const { mutate: addcustomer, isPending: isAddingCustomer } = useMutation({
    mutationFn: (newData) => createCustomer(newData),
    onSuccess: () => {
      toast.success("The customer is successfully added");
      queryClient.invalidateQueries({ query: ["customer"] });
    },
  });
  return { addcustomer, isAddingCustomer };
}
