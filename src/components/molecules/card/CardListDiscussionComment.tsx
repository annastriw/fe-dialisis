import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BASE_URL } from "@/lib/url";
import { DiscussionComment } from "@/types/discussions/discussion";
import { getAvatarColor } from "@/utils/generate-color-avatar";
import { generateFallbackFromName } from "@/utils/generate-name";
import { formatRelativeTime } from "@/utils/time-relative";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardListDiscussionCommentProps {
  data: DiscussionComment[];
  isLoading: boolean;
}

export default function CardListDiscussionComment({
  data,
  isLoading,
}: CardListDiscussionCommentProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            className="flex flex-col sm:flex-row w-full gap-3 space-y-4 sm:space-y-0"
            key={i}
          >
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Card className="bg-muted w-full border-0 p-2 shadow-none">
                <CardContent className="space-y-4 px-3 py-2">
                  <Skeleton className="h-4 w-32" /> {/* Nama */}
                  <Skeleton className="h-48 w-full rounded-xl md:max-w-sm" /> {/* Gambar */}
                  <Skeleton className="h-4 w-64" /> {/* Komentar */}
                </CardContent>
              </Card>
              <Skeleton className="h-3 w-24" /> {/* Waktu */}
              <Skeleton className="h-3 w-40" /> {/* Link Balasan */}
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
        <div
          key={comment.id}
          className="flex flex-col sm:flex-row w-full gap-3 space-y-2 sm:space-y-0"
        >
          <Avatar className="h-10 w-10 rounded-full flex-shrink-0">
            <AvatarFallback
              className={`${getAvatarColor(comment.user.id)} rounded-full text-xs font-semibold text-white`}
            >
              {generateFallbackFromName(comment.user.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <Card className="bg-muted w-full border-0 p-2 shadow-none">
              <CardContent className="px-3 py-2 space-y-2">
                <h1 className="font-semibold break-words">{comment.user.name}</h1>
                {comment.image_path && (
                  <Image
                    src={`${BASE_URL}/public/storage/${comment.image_path}`}
                    alt="Foto"
                    width={1000}
                    height={1000}
                    className="rounded-xl max-w-full h-auto md:max-w-sm"
                  />
                )}
                <p>{comment.comment}</p>
              </CardContent>
            </Card>
            <p className="text-muted-foreground text-sm">
              {formatRelativeTime(comment.created_at)}
            </p>
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
