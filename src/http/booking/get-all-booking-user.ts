import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Booking } from "@/types/booking/booking";

interface GetAllBookingResponse {
  data: Booking[];
}

export const GetAllBookingHandler = async (
  token: string,
): Promise<GetAllBookingResponse> => {
  const { data } = await api.get<GetAllBookingResponse>("/bookings/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllBooking = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllBookingResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["booking-list"],
    queryFn: () => GetAllBookingHandler(token),
    ...options,
  });
};
