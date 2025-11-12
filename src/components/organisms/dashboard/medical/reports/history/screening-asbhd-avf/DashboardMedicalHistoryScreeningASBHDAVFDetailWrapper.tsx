// src/components/organisms/dashboard/medical/reports/history/screening-asbhd-avf/DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper.tsx

"use client";

import { useSession } from "next-auth/react";
import { useGetScreeningASBHDAVFDetail } from "@/http/medical/screening-asbhd-avf/medical-get-screening-asbhd-avf-detail";
import CardDetailNameOnTest from "@/components/molecules/card/CardDetailNameOnTest";
import CardListHistoryQuestionScreeningASBHDAVF from "@/components/molecules/card/CardListHistoryQuestionScreeningASBHDAVFMedical";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle } from "lucide-react";

interface DashboardMedicalHistoryScreeningASBHDAVFDetailWrapperProps {
  id: string;
}

export default function DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper({
  id,
}: DashboardMedicalHistoryScreeningASBHDAVFDetailWrapperProps) {
  const { data: session, status } = useSession();

  const { data, isPending, isError } = useGetScreeningASBHDAVFDetail(
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
      <CardListHistoryQuestionScreeningASBHDAVF
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
