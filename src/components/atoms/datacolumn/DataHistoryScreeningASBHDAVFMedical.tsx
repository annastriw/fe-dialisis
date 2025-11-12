// src/components/atoms/datacolumn/DataHistoryScreeningASBHDAVFMedical.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import { Eye } from "lucide-react";
import ActionButton from "@/components/molecules/datatable/ActionButton";
import { MedicalScreeningASBHDAVFHistoryItem } from "@/types/screening-asbhd-avf/medical-screening-asbhd-avf";

export const historyScreeningASBHDAVFColumns = (): ColumnDef<
  MedicalScreeningASBHDAVFHistoryItem
>[] => [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => <p suppressHydrationWarning>{row.index + 1}</p>,
  },
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <p suppressHydrationWarning className="line-clamp-1 md:line-clamp-2">
          {data.name}
        </p>
      );
    },
  },
  {
    accessorKey: "submitted_at",
    header: "Tanggal Mengerjakan",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <p suppressHydrationWarning>
          {format(new Date(data.submitted_at), "EEEE, d MMMM yyyy, HH:mm", {
            locale: id,
          })}
        </p>
      );
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <ActionButton>
          <Link
            href={`/dashboard/medical/reports/history/screening-asbhd-avf/${data.history_id}`}
            className="flex items-center text-gray-700 hover:underline"
          >
            <Eye className="h-4 w-4" />
            <span className="ml-2">Detail</span>
          </Link>
        </ActionButton>
      );
    },
  },
];
