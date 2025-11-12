// src/components/atoms/alert/AlertDialogDeleteHistoryScreeningCKDSC.tsx

import { AdminScreeningCKDSCHistoryItem } from "@/types/screening-ckdsc/admin-screening-ckdsc";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface AlertDialogDeleteHistoryScreeningCKDSCProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  confirmDelete: () => void;
  isPending?: boolean;
  data?: AdminScreeningCKDSCHistoryItem | null;
}

export default function AlertDialogDeleteHistoryScreeningCKDSC({
  open,
  setOpen,
  confirmDelete,
  isPending,
  data,
}: AlertDialogDeleteHistoryScreeningCKDSCProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Hapus history screening CKDSC untuk{" "}
            <span className="font-semibold">{data?.name}</span>?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button
            variant="destructive"
            onClick={confirmDelete}
            disabled={isPending}
          >
            {isPending ? "Menghapus..." : "Hapus"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
