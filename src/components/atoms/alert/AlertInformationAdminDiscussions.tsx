import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";

export default function AlertInformationAdminDiscussions() {
  return (
    <Alert variant={"warning"} className="mb-4 w-full md:w-fit">
      <TriangleAlert className="!text-yellow-600" />
      <AlertTitle>Informasi</AlertTitle>
      <AlertDescription>
        <div>
          Untuk melihat riwayat diskusi antar pasien dan tenaga medis, silakan klik tombol Detail.
        </div>
      </AlertDescription>
    </Alert>
  );
}
