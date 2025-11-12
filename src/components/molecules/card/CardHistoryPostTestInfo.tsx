// src/components/molecules/card/CardHistoryPostTestInfo.tsx
import { HistoryPreTestDetail } from "@/types/test/pre-test"; // asumsi PostTestDetail mirip struktur PreTestDetail
import { format } from "date-fns";
import { ClockIcon, AwardIcon } from "lucide-react";

interface CardHistoryPostTestInfoProps {
  history: HistoryPreTestDetail; // gunakan tipe PostTestDetail jika berbeda
}

export default function CardHistoryPostTestInfo({
  history,
}: CardHistoryPostTestInfoProps) {
  return (
    <div className="w-full bg-white shadow-md border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      
      {/* Waktu Pengerjaan */}
      <div className="flex items-center space-x-3 flex-1">
        <ClockIcon className="w-5 h-5 text-gray-500" />
        <div>
          <h3 className="text-base font-medium text-gray-700">Waktu Pengerjaan</h3>
          <p className="text-sm text-gray-500">
            {format(new Date(history.created_at), "dd MMM yyyy, HH:mm")}
          </p>
        </div>
      </div>

      {/* Total Skor */}
      <div className="flex items-center space-x-3 flex-1 sm:justify-end">
        <AwardIcon className="w-5 h-5 text-gray-500" />
        <div>
          <h3 className="text-base font-medium text-gray-700">Total Skor</h3>
          <p className="text-sm text-gray-500">{history.sum_score}</p>
        </div>
      </div>

    </div>
  );
}
