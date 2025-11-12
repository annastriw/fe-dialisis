// src/http/screening/get-history-screening-by-screening-id-medical.ts
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { HistoryScreening } from "@/types/screening/screening";

interface GetHistoryScreeningByScreeningIdMedicalResponse {
  data: HistoryScreening[];
}

export const GetHistoryScreeningByScreeningIdMedicalHandler = async (
  id: string,
  token: string,
): Promise<GetHistoryScreeningByScreeningIdMedicalResponse> => {
  const { data } =
    await api.get<GetHistoryScreeningByScreeningIdMedicalResponse>(
      `/medical/screening/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

  return data;
};

export const useGetHistoryScreeningByScreeningIdMedical = (
  id: string,
  token: string,
  options?: Partial<
    UseQueryOptions<
      GetHistoryScreeningByScreeningIdMedicalResponse,
      AxiosError
    >
  >,
) => {
  return useQuery({
    queryKey: ["history-screening-by-screening-id-medical", id],
    queryFn: () =>
      GetHistoryScreeningByScreeningIdMedicalHandler(id, token),
    ...options,
  });
};
