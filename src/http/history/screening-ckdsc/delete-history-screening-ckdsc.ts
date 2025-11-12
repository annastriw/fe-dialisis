// src/http/history/screening-ckdsc/delete-history-screening-ckdsc.ts

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { AdminScreeningCKDSCHistoryItem } from "@/types/screening-ckdsc/admin-screening-ckdsc";

// Payload yang dikirim ke handler
interface DeleteAdminHistoryScreeningCKDSCPayload {
  id: string;
  token: string;
}

// Respons dari backend
type DeleteAdminHistoryScreeningCKDSCResponse = {
  data: AdminScreeningCKDSCHistoryItem;
};

// Fungsi delete request
export const deleteAdminHistoryScreeningCKDSCHandler = async ({
  id,
  token,
}: DeleteAdminHistoryScreeningCKDSCPayload): Promise<DeleteAdminHistoryScreeningCKDSCResponse> => {
  const { data } = await api.delete<DeleteAdminHistoryScreeningCKDSCResponse>(
    `/admin/screening-ckdsc-histories/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

// React Query mutation hook
export const useDeleteAdminHistoryScreeningCKDSC = (
  options?: UseMutationOptions<
    DeleteAdminHistoryScreeningCKDSCResponse,
    AxiosError,
    DeleteAdminHistoryScreeningCKDSCPayload
  >,
) => {
  return useMutation({
    mutationFn: deleteAdminHistoryScreeningCKDSCHandler,
    ...options,
  });
};
