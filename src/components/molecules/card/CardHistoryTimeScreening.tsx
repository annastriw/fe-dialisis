// src/components/molecules/card/CardHistoryTimeScreening.tsx
import { HistoryScreeningDetail } from "@/types/screening/screening";
import { format } from "date-fns";
import { ClockIcon } from "lucide-react";

interface CardHistoryTimeScreeningProps {
  history: HistoryScreeningDetail;
}

export default function CardHistoryTimeScreening({
  history,
}: CardHistoryTimeScreeningProps) {
  return (
    <div className="w-full bg-white shadow-md rounded-2xl border border-gray-200 p-6 flex items-center space-x-4">
      {/* Icon Jam */}
      <ClockIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />

      {/* Teks Waktu */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-700">
          Waktu Pengerjaan
        </h3>
        <p className="mt-1 text-gray-500 text-sm">
          {format(new Date(history.created_at), "dd MMM yyyy, HH:mm")}
        </p>
      </div>
    </div>
  );
}
