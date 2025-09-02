import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";

export default function AlertInformationCreateModuleContent() {
  return (
    <Alert variant={"warning"} className="mb-4 w-full md:w-fit">
      <TriangleAlert className="!text-yellow-600" />
      <AlertTitle>Informasi</AlertTitle>
      <AlertDescription>
        <div>
          Tambahkan file (PDF, video, atau materi lain) lewat tombol detail di bawah. 
          Pastikan setiap materi lengkap agar modul mudah diakses.
        </div>
      </AlertDescription>
    </Alert>
  );
}

