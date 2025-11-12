// src/http/medical/history/post-test/get-history-post-test-by-posttest-id.ts
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { HistoryPostTest } from "@/types/test/post-test";

interface GetHistoryPostTestByPostTestIdMedicalResponse {
  data: HistoryPostTest[];
}

export const GetHistoryPostTestByPostTestIdMedicalHandler = async (
  postTestId: string,
  token: string,
): Promise<GetHistoryPostTestByPostTestIdMedicalResponse> => {
  const { data } = await api.get<GetHistoryPostTestByPostTestIdMedicalResponse>(
    `/medical/post-test/users/${postTestId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetHistoryPostTestByPostTestIdMedical = (
  postTestId: string,
  token: string,
  options?: Partial<
    UseQueryOptions<GetHistoryPostTestByPostTestIdMedicalResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["history-posttest-by-posttest-id-medical", postTestId],
    queryFn: () => GetHistoryPostTestByPostTestIdMedicalHandler(postTestId, token),
    ...options,
  });
};
