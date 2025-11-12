import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { SubmitScreeningASBHDAVFValidatorType } from "@/validators/screening-asbhd-avf/submit-screening-asbhd-avf-validator";

export interface SubmitScreeningASBHDAVFResponse {
  data: {
    id: string; // UUID hasil screening
  };
}

export const submitScreeningASBHDAVFHandler = async (
  body: SubmitScreeningASBHDAVFValidatorType,
): Promise<SubmitScreeningASBHDAVFResponse> => {
  const { data } = await api.post("/screening-asbhd-avf/submit", body); // endpoint backend Laravel kamu
  return data;
};

export const useSubmitScreeningASBHDAVF = (
  options?: UseMutationOptions<
    SubmitScreeningASBHDAVFResponse,
    AxiosError<SubmitScreeningASBHDAVFResponse>,
    SubmitScreeningASBHDAVFValidatorType
  >,
) => {
  return useMutation({
    mutationFn: submitScreeningASBHDAVFHandler,
    ...options,
  });
};
