  "use client";

  import { useGetDetailHistoryPreTest } from "@/http/history/pre-test/get-detail-pre-test";
  import { useSession } from "next-auth/react";
  import CardListHistoryQuestion from "@/components/molecules/card/CardListHistoryQuestion";
  import CardHistoryPreTestInfo from "@/components/molecules/card/CardHistoryPreTestInfo";

  interface DashboardHistoryPreTestDetailWrapperProps {
    id: string;
  }

  export default function DashboardHistoryPreTestDetailWrapper({
    id,
  }: DashboardHistoryPreTestDetailWrapperProps) {
    const { data: session, status } = useSession();
    const { data, isPending } = useGetDetailHistoryPreTest(
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
        {history && <CardHistoryPreTestInfo history={history} />}

        {/* Card Jawaban */}
        {history && (
          <CardListHistoryQuestion data={history} isLoading={isPending} />
        )}
      </div>
    );
  }
