import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DiscussionComment } from "@/types/discussions/discussion";
import { getAvatarColor } from "@/utils/generate-color-avatar";
import { generateFallbackFromName } from "@/utils/generate-name";
import { formatRelativeTime } from "@/utils/time-relative";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/lib/url";

interface CardListDiscussionCommentPrivateProps {
  data?: DiscussionComment[];
}

export default function CardListDiscussionCommentPrivate({
  data,
}: CardListDiscussionCommentPrivateProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {data.map((discussion) => (
        <Link key={discussion.id} href={`/dashboard/discussions/${discussion.id}/answers`}>
          <Card className="hover:shadow-lg transition-shadow duration-200 w-full cursor-pointer">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <CardTitle className="flex items-center gap-3">
                <Avatar className="h-12 w-12 rounded-full flex-shrink-0">
                  <AvatarFallback
                    className={`${getAvatarColor(discussion.user.id)} rounded-full text-xs font-semibold text-white`}
                  >
                    {generateFallbackFromName(discussion.user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0">
                  <h1 className="font-semibold text-sm sm:text-base break-words">
                    {discussion.user.name}
                  </h1>
                  <p className="text-muted-foreground text-xs sm:text-sm font-normal">
                    {formatRelativeTime(discussion.created_at)}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-2 sm:pt-0 space-y-2">
              <p className="text-sm sm:text-base break-words">{discussion.comment}</p>

              {discussion.image_path && (
                <div className="relative w-full md:max-w-lg lg:max-w-2xl h-64 sm:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={`${BASE_URL}/public/storage/${discussion.image_path}`}
                    alt="Lampiran diskusi"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}

              {/* Keterangan klik detail */}
              <p className="text-muted-foreground text-xs sm:text-sm italic mt-1">
                Klik untuk lihat detail pertanyaan
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
