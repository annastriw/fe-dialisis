// src/app/dashboard/history/post-test/DashboardHistoryPostTestDetailWrapper.tsx
"use client";

import { useSession } from "next-auth/react";
import CardListHistoryQuestion from "@/components/molecules/card/CardListHistoryQuestion";
import CardHistoryPostTestInfo from "@/components/molecules/card/CardHistoryPostTestInfo";
import { useGetDetailHistoryPostTest } from "@/http/history/post-test/get-detail-history-post-test";

interface DashboardHistoryPostTestDetailWrapperProps {
  id: string;
}

export default function DashboardHistoryPostTestDetailWrapper({
  id,
}: DashboardHistoryPostTestDetailWrapperProps) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetDetailHistoryPostTest(
    id,
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const history = data?.data;

  return (
    <div className="w-full px-0 space-y-6">
      {/* Card Waktu & Total Skor */}
      {history && <CardHistoryPostTestInfo history={history} />}

      {/* Card Jawaban */}
      {history && (
        <CardListHistoryQuestion data={history} isLoading={isPending} />
      )}
    </div>
  );
}
