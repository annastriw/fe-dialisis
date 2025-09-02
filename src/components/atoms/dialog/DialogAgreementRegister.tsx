import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DialogAgreementRegisterProps {
  open: boolean;
  onConfirm: () => void;
  setOpen: (open: boolean) => void;
}

export default function DialogAgreementRegister({
  open,
  onConfirm,
  setOpen,
}: DialogAgreementRegisterProps) {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Syarat dan Persetujuan</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-72">
          <div className="text-muted-foreground space-y-3 text-sm">
            <div>
              Dengan ini saya menyatakan bahwa saya bersedia berpartisipasi dalam
              program berbasis website <strong>Dialisis Connect Edu</strong> dengan
              penuh kesadaran dan tanpa paksaan dari pihak mana pun, dengan
              ketentuan sebagai berikut:
            </div>
            <ol className="ml-4 list-decimal space-y-1">
              <li>
                Data yang saya berikan, termasuk data penggunaan akun di website ini,
                akan digunakan untuk mendukung kegiatan penelitian dan pengembangan
                ilmiah. Seluruh data akan dijaga kerahasiaannya serta tidak akan
                dipublikasikan secara individual.
              </li>
              <li>
                Saya berhak mengundurkan diri dari program atau penelitian ini kapan
                saja tanpa perlu memberikan alasan apa pun, dan keputusan tersebut
                tidak akan memengaruhi akses saya terhadap layanan edukasi yang
                tersedia.
              </li>
            </ol>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="agree"
                checked={isAgreed}
                onCheckedChange={(value) => setIsAgreed(!!value)}
              />
              <Label htmlFor="agree">Saya menyetujui persyaratan di atas</Label>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button onClick={onConfirm} disabled={!isAgreed}>
            Daftar Sekarang
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
