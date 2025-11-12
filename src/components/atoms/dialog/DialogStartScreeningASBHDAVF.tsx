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

interface DialogStartScreeningASBHDAVFProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

export default function DialogStartScreeningASBHDAVF({
  open,
  setOpen,
  id,
}: DialogStartScreeningASBHDAVFProps) {
  const router = useRouter();

  const handleStart = () => {
    setOpen(false);
    router.push(`/work/screening-asbhd-avf`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mulai Screening ASBHD-AVF?</DialogTitle>
        </DialogHeader>
        <div className="text-muted-foreground space-y-2 text-sm leading-6">
          <p>
            Screening ini menggunakan{" "}
            <strong>kuesioner ASBHD-AVF</strong> untuk menilai tingkat
            <strong> perilaku perawatan diri pasien dengan arteriovenous fistula</strong>.
            Hasil ini bukan diagnosis medis, namun dapat membantu Anda dan tenaga
            kesehatan dalam mengevaluasi kebiasaan perawatan fistula.
          </p>
          <p className="font-medium">Sebelum memulai, perhatikan hal-hal berikut:</p>
          <ul className="list-decimal pl-5">
            <li>Pastikan koneksi internet Anda stabil.</li>
            <li>Jawaban Anda akan memengaruhi hasil interpretasi.</li>
            <li>
              <strong>Bisa dikerjakan lebih dari satu kali</strong> untuk evaluasi berkala.
            </li>
            <li>Jawaban yang telah dikirim <strong>tidak dapat diubah</strong>.</li>
            <li>
              Isi sesuai dengan kebiasaan dan kondisi Anda selama{" "}
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
