import { api } from "@/lib/axios";
import { ScreeningASBHDAVFDetail } from "@/types/screening-asbhd-avf/screening-asbhd-avf-detail";

// Tipe untuk jawaban dari API
interface AnswerResponse {
  question_id: string; // biasanya string dari backend
  score: number;
  question_text?: string;
}

interface ScreeningASBHDAVFDetailResponse {
  id: string;
  created_at: string;
  score: number;
  interpretation: "Rendah" | "Sedang" | "Tinggi";
  description: string;
  answers: AnswerResponse[];
}

export async function getScreeningASBHDAVFDetail(
  id: string,
  token: string,
): Promise<ScreeningASBHDAVFDetail> {
  const res = await api.get<{ data: ScreeningASBHDAVFDetailResponse }>(
    `/screening-asbhd-avf-histories/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = res.data.data;

  return {
    id: data.id,
    created_at: data.created_at,
    user: null, // tetap null seperti sebelumnya
    score: data.score,
    interpretation: data.interpretation,
    description: data.description,
    answers: data.answers.map((answer) => ({
      question_id: Number(answer.question_id), // konversi string -> number
      score: answer.score,
      question_text: answer.question_text ?? "",
    })),
  };
}
