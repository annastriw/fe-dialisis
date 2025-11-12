"use client";

import { useSession } from "next-auth/react";
import { useGetDetailHistoryScreeningDetail } from "@/http/screening/get-history-detail-screening";
import CardListHistoryQuestionScreening from "@/components/molecules/card/CardListHistoryQuestionScreening";
import CardHistoryTimeScreening from "@/components/molecules/card/CardHistoryTimeScreening";

interface DashboardHistoryScreeningDetailWrapperProps {
  id: string;
}

export default function DashboardHistoryScreeningDetailWrapper({
  id,
}: DashboardHistoryScreeningDetailWrapperProps) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetDetailHistoryScreeningDetail(
    id,
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const history = data?.data;

  return (
    <div className="w-full px-0 space-y-6">
      {/* Card Waktu Pengerjaan */}
      {history && (
        <CardHistoryTimeScreening history={history} />
      )}

      {/* Card Jawaban */}
      {history && (
        <CardListHistoryQuestionScreening
          data={history} // kirim objek lengkap
          isLoading={isPending}
        />
      )}
    </div>
  );
}
