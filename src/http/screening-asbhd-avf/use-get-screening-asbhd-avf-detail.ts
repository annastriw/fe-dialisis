import { useQuery } from "@tanstack/react-query";
import { getScreeningASBHDAVFDetail } from "./get-screening-asbhd-avf-detail";
import { ScreeningASBHDAVFDetail } from "@/types/screening-asbhd-avf/screening-asbhd-avf-detail";

export function useGetScreeningASBHDAVFDetail(
  id: string,
  token: string,
  options?: { enabled?: boolean },
) {
  return useQuery<{
    data: ScreeningASBHDAVFDetail;
  }>({
    queryKey: ["screening-asbhd-avf-detail", id],
    queryFn: async () => {
      const data = await getScreeningASBHDAVFDetail(id, token);
      return { data };
    },
    enabled: options?.enabled,
  });
}
