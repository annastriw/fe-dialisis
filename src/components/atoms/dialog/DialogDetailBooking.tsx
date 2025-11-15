import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Booking } from "@/types/booking/booking";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface DialogDetailBookingProps {
  data?: Booking;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogDetailBooking({
  data,
  open,
  setOpen,
}: DialogDetailBookingProps) {
  const formattedDate = data?.created_at
    ? format(new Date(data?.created_at), "EEEE, d MMMM yyyy, HH.mm", {
        locale: id,
      })
    : "-";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Gambar Interaktif</DialogTitle>
          <DialogDescription>
            Menampilkan detail gambar interaktif
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-medium">Judul</h3>
            <p className="text-muted-foreground">{data?.title}</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium">Deskripsi</h3>
            <p className="text-muted-foreground">
              {data?.description ?? "Tidak ada deskripsi"}
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium">Tanggal Booking</h3>
            <p className="text-muted-foreground">{formattedDate} WIB</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
