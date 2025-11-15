import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { Booking } from "@/types/booking/booking";
import { BookingType } from "@/validators/booking/booking-validator";

interface CreateBookingResponse {
  data: Booking;
}

export const addCreateBookingHandler = async (
  body: BookingType,
  token: string,
): Promise<CreateBookingResponse> => {
  const { data } = await api.post("/bookings", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAddCreateBooking = (
  options?: UseMutationOptions<
    CreateBookingResponse,
    AxiosError<CreateBookingResponse>,
    BookingType
  >,
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: BookingType) =>
      addCreateBookingHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
