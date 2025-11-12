// src/components/organisms/dashboard/medical/reports/history/screening-asbhd-avf/DashboardMedicalReportHistoryScreeningASBHDAVFWrapper.tsx
"use client";

import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";

import { DataTable } from "@/components/molecules/datatable/DataTable";
import HistorySearch from "@/components/molecules/search/ReportDetailSearch";

import { historyScreeningASBHDAVFColumns } from "@/components/atoms/datacolumn/DataHistoryScreeningASBHDAVFMedical";

import { useGetAllHistoryScreeningASBHDAVFMedical } from "@/http/history/screening-asbhd-avf/get-all-history-screening-asbhd-avf-medical";
import { MedicalScreeningASBHDAVFHistoryItem } from "@/types/screening-asbhd-avf/medical-screening-asbhd-avf";

export default function DashboardMedicalReportHistoryScreeningASBHDAVFWrapper() {
  const { data: session, status } = useSession();
  const token = session?.access_token as string;

  const [search, setSearch] = useState("");

  const { data, isPending } = useGetAllHistoryScreeningASBHDAVFMedical(token, {
    enabled: status === "authenticated",
  });

  const filteredData = useMemo(() => {
    const list = data?.data ?? [];
    return list.filter((item: MedicalScreeningASBHDAVFHistoryItem) =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data?.data, search]);

  return (
    <div>
      <HistorySearch search={search} setSearch={setSearch} />
      <DataTable
        data={filteredData}
        columns={historyScreeningASBHDAVFColumns()} // tanpa delete handler
        isLoading={isPending}
      />
    </div>
  );
}
