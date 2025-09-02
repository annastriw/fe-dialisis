"use client";

import CardListDiscussionCommentPrivate from "@/components/molecules/card/CardListDiscussionCommentPrivate";
import { useGetAllDiscussionPrivate } from "@/http/discussions/get-discussion-private";
import { useSession } from "next-auth/react";
import { MessageSquareText } from "lucide-react";

export default function DashboardMedicalDiscussionPrivateWrapper() {
  const { data: session, status } = useSession();

  const { data, isLoading } = useGetAllDiscussionPrivate(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  const discussions = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-muted-foreground text-sm">Memuat diskusi...</p>
      </div>
    );
  }

  if (discussions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-40 text-center space-y-2">
        <MessageSquareText className="w-10 h-10 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Belum ada diskusi pribadi.
        </p>
      </div>
    );
  }

  return (
    <div>
      <CardListDiscussionCommentPrivate data={discussions} />
    </div>
  );
}
