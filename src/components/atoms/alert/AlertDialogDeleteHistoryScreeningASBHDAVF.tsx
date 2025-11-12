// src/components/atoms/alert/AlertDialogDeleteHistoryScreeningASBHDAVF.tsx

import { AdminScreeningASBHDAVFHistoryItem } from "@/types/screening-asbhd-avf/admin-screening-asbhd-avf";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface AlertDialogDeleteHistoryScreeningASBHDAVFProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  confirmDelete: () => void;
  isPending?: boolean;
  data?: AdminScreeningASBHDAVFHistoryItem | null;
}

export default function AlertDialogDeleteHistoryScreeningASBHDAVF({
  open,
  setOpen,
  confirmDelete,
  isPending,
  data,
}: AlertDialogDeleteHistoryScreeningASBHDAVFProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Hapus history screening ASBHD-AVF untuk{" "}
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
