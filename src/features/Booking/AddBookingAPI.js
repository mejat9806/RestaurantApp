import supabase from "../../services/supabase";

export async function createBooking(newData) {
  console.log(newData);
  const { data, error } = await supabase
    .from("bookings")
    .insert([newData])
    .select();
  if (error) {
    console.log(error);
    throw new Error("Booking could not be made");
  }
  return data;
}

export async function createCustomer(newData) {
  console.log(newData);
  const { data, error } = await supabase
    .from("customers")
    .insert([newData])
    .select();
  if (error) {
    console.log(error);
    throw new Error("Booking could not be made");
  }
  return data;
}
