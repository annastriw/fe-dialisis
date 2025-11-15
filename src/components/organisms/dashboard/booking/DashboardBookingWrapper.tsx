"use client";

import { bookingColumns } from "@/components/atoms/datacolumn/DataBooking";
import DialogDetailBooking from "@/components/atoms/dialog/DialogDetailBooking";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllBooking } from "@/http/booking/get-all-booking-user";
import { Booking } from "@/types/booking/booking";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardBookingWrapper() {
  const { data: session, status } = useSession();
  const [isDialogBookingOpen, setIsDialogBookingOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const { data, isPending } = useGetAllBooking(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const handleDialogBookingOpen = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsDialogBookingOpen(true);
  };

  return (
    <div className="space-y-6">
      <Button>
        <Link
          href={"/dashboard/booking/create"}
          className="flex items-center gap-2"
        >
          <Plus /> Tambah Booking
        </Link>
      </Button>
      <DataTable
        data={data?.data || []}
        isLoading={isPending}
        columns={bookingColumns({
          detailBooking: handleDialogBookingOpen,
        })}
      />

      {selectedBooking && (
        <DialogDetailBooking
          data={selectedBooking}
          open={isDialogBookingOpen}
          setOpen={setIsDialogBookingOpen}
        />
      )}
    </div>
  );
}
