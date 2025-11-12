// src/components/organisms/dashboard/medical/reports/history/screening-ckdsc/DashboardMedicalHistoryScreeningCKDSCDetailWrapper.tsx
"use client";

import { useSession } from "next-auth/react";
import { useGetScreeningCKDSCDetail } from "@/http/medical/screening-ckdsc/medical-get-screening-ckdsc-detail";
import CardDetailNameOnTest from "@/components/molecules/card/CardDetailNameOnTest";
import CardListHistoryQuestionScreeningCKDSC from "@/components/molecules/card/CardListHistoryQuestionScreeningCKDSCMedical";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle } from "lucide-react";

interface DashboardMedicalHistoryScreeningCKDSCDetailWrapperProps {
  id: string;
}

export default function DashboardMedicalHistoryScreeningCKDSCDetailWrapper({
  id,
}: DashboardMedicalHistoryScreeningCKDSCDetailWrapperProps) {
  const { data: session, status } = useSession();

  const { data, isPending, isError } = useGetScreeningCKDSCDetail(
    id,
    session?.access_token as string,
    { enabled: status === "authenticated" && !!session?.access_token },
  );

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-4 w-3/4 mt-2" />
            <Skeleton className="h-4 w-2/3 mt-2" />
          </div>
        ))}
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
        <AlertTriangle className="h-8 w-8 mb-2" />
        <p>Data tidak ditemukan atau terjadi kesalahan.</p>
      </div>
    );
  }

  const history = data.data;

  return (
    <div className="space-y-6">
      <CardDetailNameOnTest name={history.user?.name ?? ""} />
      <CardListHistoryQuestionScreeningCKDSC
        createdAt={history.created_at}
        score={history.score}
        interpretation={history.interpretation}
        description={history.description}
        answers={history.answers}
        isLoading={false}
      />
    </div>
  );
}
