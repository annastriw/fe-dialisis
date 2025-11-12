// src/components/organisms/dashboard/medical/reports/history/screening-ckdsc/DashboardMedicalReportHistoryScreeningCKDSCWrapper.tsx
"use client";

import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";

import { DataTable } from "@/components/molecules/datatable/DataTable";
import HistorySearch from "@/components/molecules/search/ReportDetailSearch";

import { historyScreeningCKDSCColumns } from "@/components/atoms/datacolumn/DataHistoryScreeningCKDSCMedical";
import { useGetAllHistoryScreeningCKDSC } from "@/http/history/screening-ckdsc/get-all-history-screening-ckdsc-medical";

import { MedicalScreeningCKDSCHistoryItem } from "@/types/screening-ckdsc/medical-screening-ckdsc";

export default function DashboardMedicalReportHistoryScreeningCKDSCWrapper() {
  const { data: session, status } = useSession();
  const token = session?.access_token as string;

  const [search, setSearch] = useState("");

  const { data, isPending } = useGetAllHistoryScreeningCKDSC(token, {
    enabled: status === "authenticated",
  });

  const filteredData = useMemo(() => {
    const list = data?.data ?? [];
    return list.filter((item: MedicalScreeningCKDSCHistoryItem) =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data?.data, search]);

  const queryClient = useQueryClient();

  return (
    <div>
      <HistorySearch search={search} setSearch={setSearch} />
      <DataTable
        data={filteredData}
        columns={historyScreeningCKDSCColumns()}
        isLoading={isPending}
      />
    </div>
  );
}
