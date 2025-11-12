import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

export interface ScreeningCKDSCLatest {
  id: string;
  latest_submitted_at: string | null;
}

interface GetLatestScreeningCKDSCResponse {
  data: ScreeningCKDSCLatest;
}

export const getLatestScreeningCKDSCHandler = async (
  token: string,
): Promise<ScreeningCKDSCLatest> => {
  const { data } = await api.get<GetLatestScreeningCKDSCResponse>(
    "/screening-ckdsc/latest",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data.data;
};

export const useGetLatestScreeningCKDSC = (
  token: string,
  options?: Partial<UseQueryOptions<ScreeningCKDSCLatest, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["screening-ckdsc-latest"],
    queryFn: () => getLatestScreeningCKDSCHandler(token),
    enabled: !!token,
    ...options,
  });
};
