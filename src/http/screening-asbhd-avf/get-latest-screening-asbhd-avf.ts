import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

export interface ScreeningASBHDAVFLatest {
  id: string;
  latest_submitted_at: string | null;
}

interface GetLatestScreeningASBHDAVFResponse {
  data: ScreeningASBHDAVFLatest;
}

export const getLatestScreeningASBHDAVFHandler = async (
  token: string,
): Promise<ScreeningASBHDAVFLatest> => {
  const { data } = await api.get<GetLatestScreeningASBHDAVFResponse>(
    "/screening-asbhd-avf/latest",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data.data;
};

export const useGetLatestScreeningASBHDAVF = (
  token: string,
  options?: Partial<UseQueryOptions<ScreeningASBHDAVFLatest, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["screening-asbhd-avf-latest"],
    queryFn: () => getLatestScreeningASBHDAVFHandler(token),
    enabled: !!token,
    ...options,
  });
};
