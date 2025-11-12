// src/components/molecules/card/CardCKDSCOverviewMedical.tsx

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch } from "lucide-react";
import Link from "next/link";

export default function CardCKDSCOverviewMedical() {
  return (
    <Link
      href="/dashboard/medical/reports/history/screening-ckdsc"
      className="group block cursor-pointer"
    >
      <div className="flex flex-row gap-6">
        <div className="group-hover:bg-secondary bg-primary relative hidden aspect-video h-36 w-36 items-center justify-center rounded-lg md:flex">
          <FileSearch className="text-background m-auto h-12 w-12" />
        </div>
        <Card className="border-muted group-hover:bg-muted w-full border-2 shadow-transparent">
          <CardHeader className="flex md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <CardTitle className="text-md font-bold md:text-xl">
                Screening CKDSC
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Tipe: Penyakit Ginjal Kronis (Self-Care)
              </p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </Link>
  );
}
