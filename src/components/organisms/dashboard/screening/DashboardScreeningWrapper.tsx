"use client";

import CardListScreening from "@/components/molecules/card/CardListScreening";
import CardListScreeningASBHDAVF from "@/components/molecules/card/CardListScreeningASBHDAVF";
import CardListScreeningCKDSC from "@/components/molecules/card/CardListScreeningCKDSC";
import { useGetAllScreening } from "@/http/screening/get-all-screening";
import { useGetAllHistoryScreening } from "@/http/screening/get-history-all-screening";
import { useSession } from "next-auth/react";

export default function DashboardScreeningWrapper() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllScreening(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const { data: historyScreening } = useGetAllHistoryScreening(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  return (
    <div className="space-y-4">
      {/* Screening Umum */}
      <CardListScreening
        data={data?.data || []}
        isLoading={isPending}
        history={historyScreening?.data || []}
      />

      {/* Screening ASBHD-AVF */}
      <CardListScreeningASBHDAVF />

      {/* Screening CKDSC */}
      <CardListScreeningCKDSC /> {/* ✅ Ditambahkan di bawah ASBHD-AVF */}
    </div>
  );
}
