"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { CKDSC_QUESTIONS } from "@/constants/ckdsc-questions";

ChartJS.register(ArcElement, Tooltip, Legend);

/* ---------- types ---------- */
type Interpretation = "Rendah" | "Sedang" | "Tinggi";

interface Answer {
  question_id: number;
  score: number; // backend 1–5
}

interface Props {
  answers: Answer[];
  score: number;
  interpretation: Interpretation;
  description: string;
  createdAt?: string | Date;
  isLoading?: boolean;
}

/* ---------- constants ---------- */
const FAVORABLE_IDS: number[] = [
  // Soal favorable (barang baik → skor besar)
  // berdasarkan instruksi user
  5, 6, 7, 8, 9, 10, 11,
  13, 14, 15
];

const NON_FAVORABLE_IDS: number[] = [
  1, 2, 3, 4, 12
];

const OPTION_LABELS = [
  "A. Tidak Pernah",
  "B. Jarang",
  "C. Kadang-kadang",
  "D. Sering",
  "E. Selalu",
];

/* ---------- utils ---------- */
function formatCreatedAt(value: string | Date): string {
  const dateObj = typeof value === "string" ? new Date(value) : value;
  return format(dateObj, "EEEE, dd MMMM yyyy 'pukul' HH:mm", {
    locale: idLocale,
  });
}

function getColor(level: Interpretation | string) {
  switch (level) {
    case "Rendah":
      return { text: "text-red-600", chart: "#ef4444", emoji: "😟" };
    case "Sedang":
      return { text: "text-yellow-500", chart: "#eab308", emoji: "🙂" };
    case "Tinggi":
      return { text: "text-green-600", chart: "#22c55e", emoji: "😄" };
    default:
      return { text: "text-gray-500", chart: "#9ca3af", emoji: "❓" };
  }
}

const chartConfig = (value: number, color: string) => ({
  labels: [],
  datasets: [
    {
      data: [value, 100 - value],
      backgroundColor: [color, "#e5e7eb"],
      borderWidth: 0,
      cutout: "70%",
    },
  ],
});

/**
 * Menghasilkan label jawaban A–E berdasarkan favorable/non-favorable.
 * Backend memberikan skor 1–5 → convert ke 0–4 untuk mapping.
 */
function getLabelByQuestionType(questionId: number, backendScore: number): string {
  const raw = backendScore - 1; // convert ke 0–4

  if (FAVORABLE_IDS.includes(questionId)) {
    return OPTION_LABELS[raw] ?? "-";
  } else if (NON_FAVORABLE_IDS.includes(questionId)) {
    const reversed = 4 - raw;
    return OPTION_LABELS[reversed] ?? "-";
  } else {
    return "-";
  }
}

/* ---------- component ---------- */
export default function CardListHistoryQuestionScreeningCKDSC({
  answers = [],
  score,
  interpretation,
  description,
  createdAt,
  isLoading = false,
}: Props) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-full" />
        ))}
      </div>
    );
  }

  const color = getColor(interpretation);

  return (
    <div className="space-y-4">
      {/* Ringkasan dan chart */}
      <Card>
        <CardHeader>
          <CardTitle>Hasil Screening CKDSC</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {createdAt && (
            <p>
              Dikerjakan pada:{" "}
              <span className="text-primary font-medium">
                {formatCreatedAt(createdAt)}
              </span>
            </p>
          )}

          {/* Doughnut chart */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <div className="relative h-[120px] w-[120px]">
              <Doughnut
                data={chartConfig(score, color.chart)}
                options={{ cutout: "70%" }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                {score}
              </div>
            </div>
            <p className={`text-lg font-bold ${color.text}`}>
              <span className="text-2xl">{color.emoji}</span> {interpretation}
            </p>
          </div>

          {/* Interpretasi */}
          <p className={`text-sm ${color.text}`}>{description}</p>

          <p className="pt-2 text-foreground">
            Hasil screening ini memberikan gambaran mengenai perilaku perawatan diri
            pasien penyakit ginjal kronik (CKD).  
            Gunakan hasil ini sebagai bahan refleksi dan diskusikan dengan tenaga kesehatan.
          </p>
        </CardContent>
      </Card>

      {/* Detail pertanyaan */}
      {CKDSC_QUESTIONS.map((question, idx) => {
        const matchedAnswer = answers.find(
          (ans) => ans.question_id === question.id
        );
        const backendScore = matchedAnswer?.score ?? -1;

        return (
          <Card key={question.id}>
            <CardHeader>
              <CardTitle className="text-xl">{idx + 1}.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-medium">{question.text}</p>

              <div className="space-y-2">
                {OPTION_LABELS.map((label, i) => {
                  // A–E indeks 0–4
                  const optionIndex = i;

                  // backend → convert 1–5 to 0–4
                  const raw = backendScore - 1;

                  let isSelected = false;

                  if (FAVORABLE_IDS.includes(question.id)) {
                    isSelected = raw === optionIndex;
                  } else if (NON_FAVORABLE_IDS.includes(question.id)) {
                    // dibalik: 4–0
                    isSelected = raw === 4 - optionIndex;
                  }

                  return (
                    <div
                      key={i}
                      className={`flex items-center px-2 ${
                        isSelected
                          ? "text-green-600 font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
