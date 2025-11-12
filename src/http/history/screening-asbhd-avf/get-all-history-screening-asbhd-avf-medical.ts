// src/http/history/screening-asbhd-avf/get-all-history-screening-asbhd-avf-medical.ts

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { MedicalScreeningASBHDAVFHistoryItem } from "@/types/screening-asbhd-avf/medical-screening-asbhd-avf";

// Tipe respons backend
interface GetAllHistoryScreeningASBHDAVFMedicalResponse {
  data: MedicalScreeningASBHDAVFHistoryItem[];
}

// Fungsi handler untuk fetch data
export const GetAllHistoryScreeningASBHDAVFMedicalHandler = async (
  token: string,
): Promise<GetAllHistoryScreeningASBHDAVFMedicalResponse> => {
  const { data } = await api.get<GetAllHistoryScreeningASBHDAVFMedicalResponse>(
    "/medical/screening-asbhd-avf-histories",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

// React Query hook
export const useGetAllHistoryScreeningASBHDAVFMedical = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllHistoryScreeningASBHDAVFMedicalResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["all-history-screening-asbhd-avf-medical"],
    queryFn: () => GetAllHistoryScreeningASBHDAVFMedicalHandler(token),
    ...options,
  });
};
