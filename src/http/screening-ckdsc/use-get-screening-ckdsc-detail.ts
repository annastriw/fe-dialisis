import { useQuery } from "@tanstack/react-query";
import { getScreeningCKDSCDetail } from "./get-screening-ckdsc-detail";
import { ScreeningCKDSCDetail } from "@/types/screening-ckdsc/screening-ckdsc-detail";

export function useGetScreeningCKDSCDetail(
  id: string,
  token: string,
  options?: { enabled?: boolean },
) {
  return useQuery<{
    data: ScreeningCKDSCDetail;
  }>({
    queryKey: ["screening-ckdsc-detail", id],
    queryFn: async () => {
      const data = await getScreeningCKDSCDetail(id, token);
      return { data };
    },
    enabled: options?.enabled,
  });
}
