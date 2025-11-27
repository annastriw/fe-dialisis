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

interface DialogDetailBookingAdminProps {
  data?: Booking;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogDetailBookingAdmin({
  data,
  open,
  setOpen,
}: DialogDetailBookingAdminProps) {
  const formattedDate = data?.created_at
    ? format(new Date(data?.created_at), "EEEE, d MMMM yyyy, HH.mm", {
        locale: id,
      })
    : "-";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Booking</DialogTitle>
          <DialogDescription>Menampilkan detail booking</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-medium">Nama Pengguna</h3>
            <p className="text-muted-foreground">{data?.user.name}</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium">No WhatsApp</h3>
            <p className="text-muted-foreground">{data?.user.phone_number}</p>
          </div>

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
