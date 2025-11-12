"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface DialogStartScreeningCKDSCProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

export default function DialogStartScreeningCKDSC({
  open,
  setOpen,
  id,
}: DialogStartScreeningCKDSCProps) {
  const router = useRouter();

  const handleStart = () => {
    setOpen(false);
    router.push(`/work/screening-ckdsc`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mulai Screening CKDSC?</DialogTitle>
        </DialogHeader>

        <div className="text-muted-foreground space-y-2 text-sm leading-6">
          <p>
            Screening ini menggunakan{" "}
            <strong>kuesioner CKDSC (Chronic Kidney Disease Self-Care)</strong>{" "}
            untuk menilai sejauh mana Anda melakukan <strong>perawatan diri</strong>{" "}
            dalam mengelola penyakit ginjal kronik. Hasil ini bukan diagnosis medis, 
            tetapi dapat membantu Anda memahami dan meningkatkan kebiasaan perawatan diri.
          </p>

          <p className="font-medium">Sebelum memulai, perhatikan hal-hal berikut:</p>
          <ul className="list-decimal pl-5">
            <li>Pastikan koneksi internet Anda stabil.</li>
            <li>Jawaban Anda akan memengaruhi hasil interpretasi.</li>
            <li>
              <strong>Bisa dikerjakan lebih dari satu kali</strong> untuk evaluasi
              perubahan kebiasaan.
            </li>
            <li>Jawaban yang telah dikirim <strong>tidak dapat diubah</strong>.</li>
            <li>
              Jawablah sesuai dengan kebiasaan Anda selama{" "}
              <strong>beberapa minggu terakhir</strong>.
            </li>
            <li>
              Setelah klik <strong>“Kerjakan Sekarang”</strong>, Anda akan diarahkan ke
              halaman pertanyaan.
            </li>
          </ul>
        </div>

        <DialogFooter className="flex justify-center">
          <Button className="w-full max-w-md" onClick={handleStart}>
            Kerjakan Sekarang
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
