"use client";

import DashboardTitleBold from "@/components/atoms/typography/DashboardTitleBold";
import VideoYoutubeEmbed from "@/components/atoms/video/VideoYoutubeEmbed";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetDetailBooklet } from "@/http/booklet/get-detail-booklet";
import { BASE_URL } from "@/lib/url";
import { Loader2, Maximize } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DashboardModulesBookletWrapperProps {
  id: string;
}

export default function DashboardModulesBookletWrapper({
  id,
}: DashboardModulesBookletWrapperProps) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetDetailBooklet(
    id,
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  return (
    <>
      <DashboardTitleBold head={data?.data?.name ?? ""} />
      <div className="space-y-6">
        {/* Video Section */}
        <AnimatePresence mode="wait">
          {isPending ? (
            <motion.div
              key="video-loader"
              className="flex h-60 w-full items-center justify-center md:h-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
            </motion.div>
          ) : (
            <motion.div
              key="video-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VideoYoutubeEmbed
                url={data?.data?.video_url ?? ""}
                isLoading={isPending}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Tabs defaultValue="module-contents" className="w-full">
          {/* Tab Header */}
          <TabsList className="mb-4 grid w-full max-w-md grid-cols-2 rounded-xl border bg-muted p-1">
            <TabsTrigger
              value="module-contents"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"
            >
              Baca Booklet
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"
            >
              Penjelasan Singkat
            </TabsTrigger>
          </TabsList>

          {/* Penjelasan Singkat */}
          <TabsContent
            value="content"
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {isPending ? (
                <motion.div
                  key="content-loader"
                  className="flex h-40 w-full items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="content-loaded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.content ?? "",
                    }}
                    className="prose max-w-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>

          {/* Booklet */}
          <TabsContent
            value="module-contents"
            className="rounded-xl border bg-white p-4 shadow-sm space-y-4"
          >
            <div>
              <Link
                href={`${BASE_URL}/public/storage/${data?.data?.file_path}`}
                target="_blank"
                className="block w-full md:w-auto"
              >
                <Button
                  className="flex w-full md:w-auto items-center justify-center gap-2 rounded-lg shadow-sm"
                  variant="default"
                  disabled={isPending}
                >
                  <Maximize className="h-5 w-5" /> Perbesar Booklet
                </Button>
              </Link>
            </div>

            <AnimatePresence mode="wait">
              {isPending ? (
                <motion.div
                  key="pdf-loader"
                  className="flex h-[500px] w-full items-center justify-center md:h-[800px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
                </motion.div>
              ) : (
                <motion.iframe
                  key="pdf-loaded"
                  src={`https://docs.google.com/gview?url=${BASE_URL}/public/storage/${data?.data?.file_path}&embedded=true`}
                  className="h-[500px] w-full rounded-lg border md:h-[800px]"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
