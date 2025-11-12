import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

/**
 * Tipe data satu riwayat screening ASBHD-AVF
 */
export interface ScreeningASBHDAVFHistoryItem {
  id: string;
  created_at: string;
}

/**
 * Response dari GET /screening-asbhd-avf
 */
interface GetAllScreeningASBHDAVFResponse {
  data: ScreeningASBHDAVFHistoryItem[];
}

/**
 * Handler GET /screening-asbhd-avf
 */
export const getAllScreeningASBHDAVFHandler = async (
  token: string,
): Promise<ScreeningASBHDAVFHistoryItem[]> => {
  const response = await api.get<GetAllScreeningASBHDAVFResponse>(
    "/screening-asbhd-avf",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.data;
};

/**
 * React Query hook: Ambil semua riwayat screening ASBHD-AVF
 */
export const useGetAllHistoryScreeningASBHDAVF = (
  token: string,
  options?: Partial<UseQueryOptions<ScreeningASBHDAVFHistoryItem[], AxiosError>>,
) => {
  return useQuery({
    queryKey: ["screening-asbhd-avf-history-all"],
    queryFn: () => getAllScreeningASBHDAVFHandler(token),
    enabled: !!token,
    ...options,
  });
};
