import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Booking } from "@/types/booking/booking";

interface GetAllBookingFromAdminResponse {
  data: Booking[];
}

export const GetAllBookingFromAdminHandler = async (
  token: string,
): Promise<GetAllBookingFromAdminResponse> => {
  const { data } = await api.get<GetAllBookingFromAdminResponse>(
    "/admin/bookings",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetAllBookingFromAdmin = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllBookingFromAdminResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["booking-admin-list"],
    queryFn: () => GetAllBookingFromAdminHandler(token),
    ...options,
  });
};
