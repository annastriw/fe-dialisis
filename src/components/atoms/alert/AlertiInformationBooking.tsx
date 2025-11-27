import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { useState } from "react";
import DialogDetailInformationBooking from "../dialog/DialogDetailInformationBooking";

export default function AlertiInformationBooking() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="grid w-full max-w-xl items-start gap-4">
        <Alert>
          <Info />
          <AlertTitle>Informasi</AlertTitle>
          <AlertDescription>
            Berikut untuk cara melakukan booking dan terintegrasi dengan
            WhatsApp. Tutorial{" "}
            <span
              className="text-primary cursor-pointer underline"
              onClick={handleDialogOpen}
            >
              klik disini.
            </span>
          </AlertDescription>
        </Alert>
      </div>

      <DialogDetailInformationBooking
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
      />
    </>
  );
}
