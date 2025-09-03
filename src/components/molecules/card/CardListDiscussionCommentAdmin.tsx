import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BASE_URL } from "@/lib/url";
import { DiscussionComment } from "@/types/discussions/discussion";
import { getAvatarColor } from "@/utils/generate-color-avatar";
import { generateFallbackFromName } from "@/utils/generate-name";
import { formatRelativeTime } from "@/utils/time-relative";
import { MessagesSquare, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardListDiscussionCommentAdminProps {
  data: DiscussionComment[];
  isLoading: boolean;
  deleteDiscussionCommentHandler: (data: DiscussionComment) => void;
}

export default function CardListDiscussionCommentAdmin({
  data,
  isLoading,
  deleteDiscussionCommentHandler,
}: CardListDiscussionCommentAdminProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-3 w-full">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Card className="bg-muted w-full border-0 p-2 shadow-none">
                <CardContent className="space-y-4 px-3 py-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-48 w-full rounded-xl md:max-w-sm" />
                  <Skeleton className="h-4 w-64" />
                </CardContent>
              </Card>
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-40" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-muted-foreground flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-6 text-center">
        <MessagesSquare className="h-10 w-10" />
        <p className="text-sm">
          Belum ada obrolan diskusi nih! Mulai diskusi yuk ✨
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {data.map((comment) => (
        <div key={comment.id} className="flex flex-col sm:flex-row gap-3 w-full">
          <Avatar className="h-10 w-10 rounded-full flex-shrink-0">
            <AvatarFallback className={`${getAvatarColor(comment.user.id)} rounded-full text-xs font-semibold text-white`}>
              {generateFallbackFromName(comment.user.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <Card className="bg-muted w-full border-0 p-2 shadow-none">
              <CardContent className="px-3 py-2 space-y-2">
                <div className="flex justify-between items-start sm:items-center gap-3">
                  <h1 className="font-semibold break-words">{comment.user.name}</h1>
                  <Trash2
                    className="text-destructive h-5 w-5 cursor-pointer"
                    onClick={() => deleteDiscussionCommentHandler(comment)}
                  />
                </div>

                {comment.image_path && (
                  <Image
                    src={`${BASE_URL}/public/storage/${comment.image_path}`}
                    alt="Foto"
                    width={1000}
                    height={1000}
                    className="rounded-xl md:max-w-sm w-full object-cover"
                  />
                )}
                <p>{comment.comment}</p>
              </CardContent>
            </Card>

            {/* Waktu */}
            <p className="text-muted-foreground text-sm">
              {formatRelativeTime(comment.created_at)}
            </p>

            {/* Link Balasan berada DI BAWAH waktu */}
            <Link
              href={`/dashboard/discussions/${comment.id}/answers`}
              className="text-muted-foreground hover:underline text-sm"
            >
              Lihat semua {comment.answers.length} Balasan
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
