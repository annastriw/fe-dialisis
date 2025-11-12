// src/http/medical/history/pre-test/get-history-pre-test-by-pretest-id.ts
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { HistoryPreTest } from "@/types/test/pre-test";

interface GetHistoryPreTestByPretestIdMedicalResponse {
  data: HistoryPreTest[];
}

export const GetHistoryPreTestByPretestIdMedicalHandler = async (
  preTestId: string,
  token: string,
): Promise<GetHistoryPreTestByPretestIdMedicalResponse> => {
  const { data } = await api.get<GetHistoryPreTestByPretestIdMedicalResponse>(
    `/medical/pre-test/users/${preTestId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetHistoryPreTestByPretestIdMedical = (
  preTestId: string,
  token: string,
  options?: Partial<
    UseQueryOptions<GetHistoryPreTestByPretestIdMedicalResponse, AxiosError>
  >,
) => {
  return useQuery({
    queryKey: ["history-pretest-by-pretest-id-medical", preTestId],
    queryFn: () => GetHistoryPreTestByPretestIdMedicalHandler(preTestId, token),
    ...options,
  });
};
