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

interface DialogStartPreTestProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

export default function DialogStartPreTest({
  open,
  setOpen,
  id,
}: DialogStartPreTestProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Siap untuk Memulai Pre Test?</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-72 pr-4">
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>
              Sebelum Anda memulai pre test, mohon perhatikan beberapa hal penting berikut:
            </p>
            <ol className="ml-5 list-outside list-decimal space-y-1">
              <li>Pastikan perangkat dan koneksi internet Anda dalam kondisi stabil.</li>
              <li>
                Pre test hanya dapat dikerjakan <strong>1 (satu) kali kesempatan</strong>.
              </li>
              <li>
                Jika terjadi gangguan (misalnya koneksi terputus), Anda perlu 
                mengulang kembali dari awal.
              </li>
              <li>
                Setelah menekan tombol <strong>"Selesai untuk Dinilai"</strong>, 
                jawaban akan langsung diproses dan tidak bisa diubah lagi.
              </li>
              <li>
                Hasil penilaian dan kunci jawaban dapat Anda lihat setelah selesai mengerjakan.
              </li>
            </ol>
            <p className="pt-2">
              Pre test ini dirancang untuk membantu memahami kemampuan awal Anda. 
              Silakan kerjakan dengan tenang dan percaya diri.
            </p>
          </div>
        </ScrollArea>
        <DialogFooter className="sm:justify-end">
          <Link href={`/work/pre-test/${id}`} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Mulai Pre Test</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
