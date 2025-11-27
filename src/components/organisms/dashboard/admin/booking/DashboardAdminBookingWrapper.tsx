"use client";

import { bookingAdminColumns } from "@/components/atoms/datacolumn/DataBookingAdmin";
import DialogDetailBookingAdmin from "@/components/atoms/dialog/DialogDetailBookingAdmin";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { useGetAllBookingFromAdmin } from "@/http/booking/get-all-booking";
import { Booking } from "@/types/booking/booking";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function DashboardAdminBookingWrapper() {
  const { data: session, status } = useSession();
  const [isDialogDetailBookingOpen, setIsDialogDetailBookingOpen] =
    useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const { data, isPending } = useGetAllBookingFromAdmin(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  const handleDialogDetailBookingOpen = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsDialogDetailBookingOpen(true);
  };

  return (
    <div>
      <DataTable
        columns={bookingAdminColumns({
          detailBooking: handleDialogDetailBookingOpen,
        })}
        data={data?.data ?? []}
        isLoading={isPending}
      />

      {selectedBooking && (
        <DialogDetailBookingAdmin
          data={selectedBooking}
          open={isDialogDetailBookingOpen}
          setOpen={setIsDialogDetailBookingOpen}
        />
      )}
    </div>
  );
}
