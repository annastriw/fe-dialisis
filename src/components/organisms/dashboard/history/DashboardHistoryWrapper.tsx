"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// 🧩 Komponen Card List
import CardListHistoryScreening from "@/components/molecules/card/CardListHistoryScreening";
import CardListHistoryScreeningASBHDAVF from "@/components/molecules/card/CardListHistoryScreeningASBHDAVF";
import CardListHistoryScreeningCKDSC from "@/components/molecules/card/CardListHistoryScreeningCKDSC";
import CardListHistoryPreTest from "@/components/molecules/card/CardListHistoryPreTest";
import CardListHistoryPostTest from "@/components/molecules/card/CardListHistoryPostTest";

// 🧠 Hooks Data
import { useGetAllHistoryScreening } from "@/http/screening/get-history-all-screening";
import { useGetAllHistoryScreeningASBHDAVF } from "@/http/screening-asbhd-avf/get-history-all-screening-asbhd-avf";
import { useGetAllHistoryScreeningCKDSC } from "@/http/screening-ckdsc/get-history-all-screening-ckdsc";
import { useGetAllHistoryPreTest } from "@/http/test/get-history-pre-test";
import { useGetAllHistoryPostTest } from "@/http/history/post-test/get-history-post-test";

export default function DashboardHistoryWrapper() {
  const { data: session, status } = useSession();
  const [selectedTab, setSelectedTab] = useState("screening");

  /* ------------------------ Screening ------------------------ */
  const { data: screening, isPending: screeningIsPending } =
    useGetAllHistoryScreening(session?.access_token as string, {
      enabled: status === "authenticated" && selectedTab === "screening",
    });

  /* ------------------------ Screening ASBHD-AVF ------------------------ */
  const { data: screeningASBHDAVF, isPending: screeningASBHDAVFIsPending } =
    useGetAllHistoryScreeningASBHDAVF(session?.access_token as string, {
      enabled: status === "authenticated" && selectedTab === "asbhd-avf",
    });

  /* ------------------------ Screening CKDSC ------------------------ */
  const { data: screeningCKDSC, isPending: screeningCKDSCIsPending } =
    useGetAllHistoryScreeningCKDSC(session?.access_token as string, {
      enabled: status === "authenticated" && selectedTab === "ckdsc",
    });

  /* ------------------------ Pre & Post Test ------------------------ */
  const { data: preTest, isPending: preTestIsPending } =
    useGetAllHistoryPreTest(session?.access_token as string, {
      enabled: status === "authenticated" && selectedTab === "pre-test",
    });

  const { data: postTest, isPending: postTestIsPending } =
    useGetAllHistoryPostTest(session?.access_token as string, {
      enabled: status === "authenticated" && selectedTab === "post-test",
    });

  /* ------------------------ UI Render ------------------------ */
  return (
    <div>
      <Tabs
        defaultValue="screening"
        className="space-y-2"
        onValueChange={(value) => setSelectedTab(value)}
      >
        <TabsList className="grid w-full max-w-[480px] grid-cols-5 justify-center md:justify-start mx-auto md:mx-0">
          <TabsTrigger value="screening">Screening</TabsTrigger>
          <TabsTrigger value="asbhd-avf">ASBHD-AVF</TabsTrigger>
          <TabsTrigger value="ckdsc">CKDSC</TabsTrigger>
          <TabsTrigger value="pre-test">Pre Test</TabsTrigger>
          <TabsTrigger value="post-test">Post Test</TabsTrigger>
        </TabsList>

        {/* Screening */}
        <TabsContent value="screening">
          <CardListHistoryScreening
            data={screening?.data || []}
            isLoading={screeningIsPending}
          />
        </TabsContent>

        {/* ASBHD-AVF */}
        <TabsContent value="asbhd-avf">
          <CardListHistoryScreeningASBHDAVF
            data={
              (screeningASBHDAVF || []).map((item: any) => ({
                id: item.id,
                created_at: item.created_at,
                score: item.score,
                category: item.category,
              })) || []
            }
            isLoading={screeningASBHDAVFIsPending}
          />
        </TabsContent>

        {/* CKDSC */}
        <TabsContent value="ckdsc">
          <CardListHistoryScreeningCKDSC
            data={
              (screeningCKDSC || []).map((item: any) => ({
                id: item.id,
                created_at: item.created_at,
                sum_score: item.sum_score,
                category: item.category,
              })) || []
            }
            isLoading={screeningCKDSCIsPending}
          />
        </TabsContent>

        {/* Pre Test */}
        <TabsContent value="pre-test">
          <CardListHistoryPreTest
            data={preTest?.data || []}
            isLoading={preTestIsPending}
          />
        </TabsContent>

        {/* Post Test */}
        <TabsContent value="post-test">
          <CardListHistoryPostTest
            data={postTest?.data || []}
            isLoading={postTestIsPending}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
