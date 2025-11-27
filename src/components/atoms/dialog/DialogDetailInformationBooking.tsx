import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface DialogDetailInformationBookingProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogDetailInformationBooking({
  open,
  setOpen,
}: DialogDetailInformationBookingProps) {
  const { data: session } = useSession();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detail Informasi</DialogTitle>
        </DialogHeader>

        <div className="text-muted-foreground space-y-3 text-sm">
          <p>1. Klik tombol Tambah Booking di bagian atas.</p>
          <p>2. Isi judul, deskripsi, dan waktu untuk booking.</p>
          <p>
            3. Notifikasi akan otomatis masuk ke WhatsApp Anda dengan nomor{" "}
            <span className="text-foreground font-semibold">
              {session?.user.phone_number}
            </span>
            .
          </p>
          <p>
            4. Jika ingin mengubah nomor WhatsApp, silakan perbarui di halaman
            pengaturan.{" "}
            <Link href="/dashboard/settings" className="text-primary underline">
              klik disini
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
