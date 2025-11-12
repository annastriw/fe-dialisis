import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

/**
 * Tipe data satu riwayat screening CKDSC
 */
export interface ScreeningCKDSCHistoryItem {
  id: string;
  created_at: string;
}

/**
 * Response dari GET /screening-ckdsc
 */
interface GetAllScreeningCKDSCResponse {
  data: ScreeningCKDSCHistoryItem[];
}

/**
 * Handler GET /screening-ckdsc
 */
export const getAllScreeningCKDSCHandler = async (
  token: string,
): Promise<ScreeningCKDSCHistoryItem[]> => {
  const response = await api.get<GetAllScreeningCKDSCResponse>(
    "/screening-ckdsc",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.data;
};

/**
 * React Query hook: Ambil semua riwayat screening CKDSC
 */
export const useGetAllHistoryScreeningCKDSC = (
  token: string,
  options?: Partial<UseQueryOptions<ScreeningCKDSCHistoryItem[], AxiosError>>,
) => {
  return useQuery({
    queryKey: ["screening-ckdsc-history-all"],
    queryFn: () => getAllScreeningCKDSCHandler(token),
    enabled: !!token,
    ...options,
  });
};
