import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { SubmitScreeningCKDSCValidatorType } from "@/validators/screening-ckdsc/submit-screening-ckdsc-validator";

export interface SubmitScreeningCKDSCResponse {
  data: {
    id: string; // UUID hasil screening
  };
}

export const submitScreeningCKDSCHandler = async (
  body: SubmitScreeningCKDSCValidatorType,
): Promise<SubmitScreeningCKDSCResponse> => {
  const { data } = await api.post("/screening-ckdsc/submit", body);
  return data;
};

export const useSubmitScreeningCKDSC = (
  options?: UseMutationOptions<
    SubmitScreeningCKDSCResponse,
    AxiosError<SubmitScreeningCKDSCResponse>,
    SubmitScreeningCKDSCValidatorType
  >,
) => {
  return useMutation({
    mutationFn: submitScreeningCKDSCHandler,
    ...options,
  });
};
