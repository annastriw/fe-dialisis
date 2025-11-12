// src/http/history/screening-asbhd-avf/get-all-history-screening-asbhd-avf.ts

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { AdminScreeningASBHDAVFHistoryItem } from "@/types/screening-asbhd-avf/admin-screening-asbhd-avf";

// Tipe respons backend
interface GetAllHistoryScreeningASBHDAVFResponse {
  data: AdminScreeningASBHDAVFHistoryItem[];
}

// Fungsi handler untuk fetch data
export const GetAllHistoryScreeningASBHDAVFHandler = async (
  token: string,
): Promise<GetAllHistoryScreeningASBHDAVFResponse> => {
  const { data } = await api.get<GetAllHistoryScreeningASBHDAVFResponse>(
    "/admin/screening-asbhd-avf-histories",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

// React Query hook
export const useGetAllHistoryScreeningASBHDAVF = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllHistoryScreeningASBHDAVFResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["all-history-screening-asbhd-avf"],
    queryFn: () => GetAllHistoryScreeningASBHDAVFHandler(token),
    ...options,
  });
};
