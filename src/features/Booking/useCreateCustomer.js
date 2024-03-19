import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking } from "./AddBookingAPI";
import toast from "react-hot-toast";

export function useAddBooking() {
  const queryClient = useQueryClient();
  const { mutate: addBooking, isPending: isAddingBooking } = useMutation({
    mutationFn: (newData) => createBooking(newData),
    onSuccess: () => {
      toast.success("The customer is successfully added");
      queryClient.invalidateQueries({ query: ["customer"] });
    },
  });
  return { isAddingBooking, addBooking };
}
