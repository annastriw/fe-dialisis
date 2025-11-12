// src/components/organisms/dashboard/admin/reports/history/screening-ckdsc/DashboardAdminReportHistoryScreeningCKDSCWrapper.tsx
"use client";

import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { DataTable } from "@/components/molecules/datatable/DataTable";
import HistorySearch from "@/components/molecules/search/ReportDetailSearch";
import AlertDialogDeleteHistoryScreeningCKDSC from "@/components/atoms/alert/AlertDialogDeleteHistoryScreeningCKDSC";

import { historyScreeningCKDSCColumns } from "@/components/atoms/datacolumn/DataHistoryScreeningCKDSCAdmin";

import { useGetAllHistoryScreeningCKDSC } from "@/http/history/screening-ckdsc/get-all-history-screening-ckdsc";
import { useDeleteAdminHistoryScreeningCKDSC } from "@/http/history/screening-ckdsc/delete-history-screening-ckdsc";

import { AdminScreeningCKDSCHistoryItem } from "@/types/screening-ckdsc/admin-screening-ckdsc";

export default function DashboardAdminReportHistoryScreeningCKDSCWrapper() {
  const { data: session, status } = useSession();
  const token = session?.access_token as string;

  const [search, setSearch] = useState("");
  const [selectedHistory, setSelectedHistory] =
    useState<AdminScreeningCKDSCHistoryItem | null>(null);
  const [openAlertDelete, setOpenAlertDelete] = useState(false);

  const { data, isPending } = useGetAllHistoryScreeningCKDSC(token, {
    enabled: status === "authenticated",
  });

  const filteredData = useMemo(() => {
    const list = data?.data ?? [];
    return list.filter((item: AdminScreeningCKDSCHistoryItem) =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data?.data, search]);

  const queryClient = useQueryClient();

  const { mutate: deleteHistoryScreening, isPending: isDeletePending } =
    useDeleteAdminHistoryScreeningCKDSC({
      onError: () => {
        toast.error("Gagal menghapus riwayat screening CKDSC pasien.");
      },
      onSuccess: () => {
        toast.success("Berhasil menghapus riwayat screening CKDSC pasien.");
        setSelectedHistory(null);
        queryClient.invalidateQueries({
          queryKey: ["all-history-screening-ckdsc"],
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
        columns={historyScreeningCKDSCColumns({
          deleteHistoryScreeningHandler: (data) => {
            setSelectedHistory(data);
            setOpenAlertDelete(true);
          },
        })}
        isLoading={isPending}
      />
      {selectedHistory && (
        <AlertDialogDeleteHistoryScreeningCKDSC
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
