"use client";

import { historyScreeningColumns } from "@/components/atoms/datacolumn/DataHistoryScreeningMedical";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import HistorySearch from "@/components/molecules/search/ReportDetailSearch";
import { useGetHistoryScreeningByScreeningIdMedical } from "@/http/screening/get-history-screening-by-screening-id-medical";
import { HistoryScreening } from "@/types/screening/screening";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

interface DashboardMedicalReportHistoryScreeningWrapperProps {
  id: string;
}

export default function DashboardMedicalReportHistoryScreeningWrapper({
  id,
}: DashboardMedicalReportHistoryScreeningWrapperProps) {
  const { data: session, status } = useSession();
  const [search, setSearch] = useState("");

  const { data, isPending } = useGetHistoryScreeningByScreeningIdMedical(
    id,
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const filteredData = useMemo(() => {
    return (data?.data ?? []).filter((item: HistoryScreening) =>
      item.user?.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data?.data, search]);

  const queryClient = useQueryClient();

  return (
    <div>
      <HistorySearch search={search} setSearch={setSearch} />
      <DataTable
        data={filteredData}
        columns={historyScreeningColumns()}
        isLoading={isPending}
      />
    </div>
  );
}
