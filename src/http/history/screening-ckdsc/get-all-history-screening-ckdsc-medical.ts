// src/http/history/screening-ckdsc/get-all-history-screening-ckdsc-medical.ts

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { MedicalScreeningCKDSCHistoryItem } from "@/types/screening-ckdsc/medical-screening-ckdsc";

// Tipe respons backend
interface GetAllHistoryScreeningCKDSCResponse {
  data: MedicalScreeningCKDSCHistoryItem[];
}

// Fungsi handler untuk fetch data
export const GetAllHistoryScreeningCKDSCHandler = async (
  token: string,
): Promise<GetAllHistoryScreeningCKDSCResponse> => {
  const { data } = await api.get<GetAllHistoryScreeningCKDSCResponse>(
    "/medical/screening-ckdsc-histories",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

// React Query hook
export const useGetAllHistoryScreeningCKDSC = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllHistoryScreeningCKDSCResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["all-history-screening-ckdsc-medical"],
    queryFn: () => GetAllHistoryScreeningCKDSCHandler(token),
    ...options,
  });
};
