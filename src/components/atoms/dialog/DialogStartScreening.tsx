import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface DialogStartScreeningProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

export default function DialogStartScreening({
  open,
  setOpen,
  id,
}: DialogStartScreeningProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Siap Memulai Screening?</DialogTitle>
        </DialogHeader>
        <div className="text-muted-foreground">
          <p className="text-sm leading-6">
            Screening ini bertujuan untuk membantu mengenali tanda atau faktor risiko
            yang mungkin terkait dengan kesehatan ginjal Anda. Harap diingat bahwa
            hasil screening <span className="font-medium">bukan diagnosis medis</span>. 
            Untuk kepastian lebih lanjut, disarankan berkonsultasi dengan dokter atau
            tenaga kesehatan profesional.
          </p>
          <p className="text-sm leading-6 mt-3">
            Sebelum memulai, mohon perhatikan hal-hal berikut:
          </p>
          <ul className="list-outside list-decimal pl-5 text-sm leading-6 space-y-1 mt-2">
            <li>Pastikan koneksi internet Anda stabil selama proses pengisian.</li>
            <li>Formulir hanya dapat diisi satu kali.</li>
            <li>Jika koneksi terputus, pengisian perlu dimulai kembali dari awal.</li>
            <li>
              Jawaban Anda digunakan untuk analisis awal dan tidak dapat diubah setelah dikirim.
            </li>
            <li>
              Tidak ada jawaban benar atau salah — isi sesuai dengan kondisi Anda secara jujur.
            </li>
            <li>
              Setelah Anda memilih <strong>“Selesai & Kumpulkan”</strong>, 
              screening dianggap tuntas.
            </li>
          </ul>
        </div>
        <DialogFooter className="flex w-full">
          <Link href={`/work/screening/${id}`} className="w-full md:w-auto">
            <Button className="w-full md:w-auto">Mulai Screening</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
