"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Eye } from "lucide-react";
import ActionButton from "@/components/molecules/datatable/ActionButton";
import { Booking } from "@/types/booking/booking";

interface BookingColumnsProps {
  detailBooking: (data: Booking) => void;
}

export const bookingColumns = (
  props: BookingColumnsProps,
): ColumnDef<Booking>[] => [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Judul",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <p suppressHydrationWarning className="line-clamp-1 md:line-clamp-2">
          {data.title}
        </p>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Deskripsi",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <p suppressHydrationWarning className="line-clamp-1 md:line-clamp-2">
          {data.description}
        </p>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Tanggal Booking",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <p suppressHydrationWarning>
          {format(new Date(data.booking_time), "EEEE, d MMMM yyyy, HH:mm", {
            locale: id,
          })}
        </p>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <ActionButton>
          <div
            onClick={() => props.detailBooking(data)}
            className="flex cursor-pointer items-center text-gray-700 hover:underline"
          >
            <Eye className="h-4 w-4" />
            <span className="ml-2">Detail</span>
          </div>
        </ActionButton>
      );
    },
  },
];
