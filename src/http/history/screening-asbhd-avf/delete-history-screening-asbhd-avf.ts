// src/http/history/screening-asbhd-avf/delete-history-screening-asbhd-avf.ts

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { AdminScreeningASBHDAVFHistoryItem } from "@/types/screening-asbhd-avf/admin-screening-asbhd-avf";

// Payload yang dikirim ke handler
interface DeleteAdminHistoryScreeningASBHDAVFPayload {
  id: string;
  token: string;
}

// Respons dari backend
type DeleteAdminHistoryScreeningASBHDAVFResponse = {
  data: AdminScreeningASBHDAVFHistoryItem;
};

// Fungsi delete request
export const deleteAdminHistoryScreeningASBHDAVFHandler = async ({
  id,
  token,
}: DeleteAdminHistoryScreeningASBHDAVFPayload): Promise<DeleteAdminHistoryScreeningASBHDAVFResponse> => {
  const { data } = await api.delete<DeleteAdminHistoryScreeningASBHDAVFResponse>(
    `/admin/screening-asbhd-avf-histories/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

// React Query mutation hook
export const useDeleteAdminHistoryScreeningASBHDAVF = (
  options?: UseMutationOptions<
    DeleteAdminHistoryScreeningASBHDAVFResponse,
    AxiosError,
    DeleteAdminHistoryScreeningASBHDAVFPayload
  >,
) => {
  return useMutation({
    mutationFn: deleteAdminHistoryScreeningASBHDAVFHandler,
    ...options,
  });
};
