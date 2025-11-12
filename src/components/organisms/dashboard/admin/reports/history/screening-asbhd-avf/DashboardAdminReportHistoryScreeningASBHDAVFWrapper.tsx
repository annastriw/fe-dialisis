// src/components/organisms/dashboard/admin/reports/history/screening-asbhd-avf/DashboardAdminReportHistoryScreeningASBHDAVFWrapper.tsx
"use client";

import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { DataTable } from "@/components/molecules/datatable/DataTable";
import HistorySearch from "@/components/molecules/search/ReportDetailSearch";
import AlertDialogDeleteHistoryScreeningASBHDAVF from "@/components/atoms/alert/AlertDialogDeleteHistoryScreeningASBHDAVF";

import { historyScreeningASBHDAVFColumns } from "@/components/atoms/datacolumn/DataHistoryScreeningASBHDAVFAdmin";

import { useGetAllHistoryScreeningASBHDAVF } from "@/http/history/screening-asbhd-avf/get-all-history-screening-asbhd-avf";
import { useDeleteAdminHistoryScreeningASBHDAVF } from "@/http/history/screening-asbhd-avf/delete-history-screening-asbhd-avf";

import { AdminScreeningASBHDAVFHistoryItem } from "@/types/screening-asbhd-avf/admin-screening-asbhd-avf";

export default function DashboardAdminReportHistoryScreeningASBHDAVFWrapper() {
  const { data: session, status } = useSession();
  const token = session?.access_token as string;

  const [search, setSearch] = useState("");
  const [selectedHistory, setSelectedHistory] =
    useState<AdminScreeningASBHDAVFHistoryItem | null>(null);
  const [openAlertDelete, setOpenAlertDelete] = useState(false);

  const { data, isPending } = useGetAllHistoryScreeningASBHDAVF(token, {
    enabled: status === "authenticated",
  });

  const filteredData = useMemo(() => {
    const list = data?.data ?? [];
    return list.filter((item: AdminScreeningASBHDAVFHistoryItem) =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data?.data, search]);

  const queryClient = useQueryClient();

  const { mutate: deleteHistoryScreening, isPending: isDeletePending } =
    useDeleteAdminHistoryScreeningASBHDAVF({
      onError: () => {
        toast.error("Gagal menghapus riwayat screening ASBHD-AVF pasien.");
      },
      onSuccess: () => {
        toast.success("Berhasil menghapus riwayat screening ASBHD-AVF pasien.");
        setSelectedHistory(null);
        queryClient.invalidateQueries({
          queryKey: ["all-history-screening-asbhd-avf"],
        });
      },
    });

  const handleDeleteHistoryScreening = () => {
    if (selectedHistory?.history_id && token) {
      deleteHistoryScreening({
        id: selectedHistory.history_id,
        token,
      });
    }
  };

  return (
    <div>
      <HistorySearch search={search} setSearch={setSearch} />
      <DataTable
        data={filteredData}
        columns={historyScreeningASBHDAVFColumns({
          deleteHistoryScreeningHandler: (data) => {
            setSelectedHistory(data);
            setOpenAlertDelete(true);
          },
        })}
        isLoading={isPending}
      />
      {selectedHistory && (
        <AlertDialogDeleteHistoryScreeningASBHDAVF
          open={openAlertDelete}
          setOpen={setOpenAlertDelete}
          confirmDelete={handleDeleteHistoryScreening}
          isPending={isDeletePending}
          data={selectedHistory}
        />
      )}
    </div>
  );
}
