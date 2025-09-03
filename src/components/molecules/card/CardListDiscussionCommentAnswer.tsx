import MessageDiscussionAnswer from "@/components/atoms/message/MessageDiscussionAnswer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BASE_URL } from "@/lib/url";
import { DiscussionCommentAnswer } from "@/types/discussions/discussion";
import { getAvatarColor } from "@/utils/generate-color-avatar";
import { generateFallbackFromName } from "@/utils/generate-name";
import { formatRelativeTime } from "@/utils/time-relative";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CardListDiscussionCommentAnswerProps {
  data: DiscussionCommentAnswer[];
  isLoading: boolean;
  id: string;
}

export default function CardListDiscussionCommentAnswer({ data, id, isLoading }: CardListDiscussionCommentAnswerProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-3 w-full">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-48 w-full rounded-xl md:max-w-xs" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h1 className="text-xl font-semibold">Balasan</h1>
        <Button onClick={() => setShowReplyForm((prev) => !prev)}>
          {showReplyForm ? "Tutup" : "Beri Balasan"}
        </Button>
      </div>

      {showReplyForm && <MessageDiscussionAnswer id={id} />}

      <div className="flex flex-col gap-6">
        {data.length === 0 ? (
          <div className="text-muted-foreground flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-6 text-center">
            <MessagesSquare className="h-10 w-10" />
            <p className="text-sm">Belum ada balasan diskusi nih! Mulai bales yuk ✨</p>
          </div>
        ) : (
          data.map((comment) => (
            <div key={comment.id} className="flex flex-col sm:flex-row gap-3">
              <Avatar className="h-10 w-10 rounded-full flex-shrink-0">
                <AvatarFallback className={`${getAvatarColor(comment.user.id)} rounded-full text-xs font-semibold text-white`}>
                  {generateFallbackFromName(comment.user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Card className="bg-muted w-full border-0 p-2 shadow-none">
                  <CardContent className="px-3 py-2 space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <h1 className="font-semibold">{comment.user.name}</h1>
                      <p className="text-muted-foreground text-sm">{formatRelativeTime(comment.created_at)}</p>
                    </div>
                    {comment.image_path && (
                      <Image
                        src={`${BASE_URL}/public/storage/${comment.image_path}`}
                        alt="Foto"
                        width={1000}
                        height={1000}
                        className="mt-2 rounded-xl md:max-w-xs w-full object-cover"
                      />
                    )}
                    <p className="break-words mt-1">{comment.comment}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
