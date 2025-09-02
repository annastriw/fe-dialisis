import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface DialogStartPostTestProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

export default function DialogStartPostTest({
  open,
  setOpen,
  id,
}: DialogStartPostTestProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Siap Mengerjakan Post Test?</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-72 pr-4">
          <div className="text-muted-foreground space-y-3 text-sm">
            <p>
              Sebelum mulai, mohon perhatikan beberapa hal penting berikut agar
              pengalaman mengerjakan post test lebih lancar:
            </p>
            <ol className="ml-5 list-outside list-decimal space-y-2">
              <li>Pastikan koneksi internet Anda stabil.</li>
              <li>
                Post test hanya dapat dikerjakan <strong>1 (satu) kali</strong>.
              </li>
              <li>
                Jika koneksi terputus, Anda perlu mengulang dari awal.
              </li>
              <li>
                Setelah menekan <strong>Selesai untuk Dinilai</strong>, jawaban
                tidak dapat diubah atau diulang.
              </li>
              <li>
                Hasil penilaian dan kunci jawaban akan ditampilkan setelah Anda
                selesai.
              </li>
            </ol>
            <p className="pt-2">
              Silakan kerjakan dengan tenang dan semoga sukses!
            </p>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Link href={`/work/post-test/${id}`}>
            <Button className="w-full sm:w-auto">Kerjakan Sekarang</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
