// src/http/medical/screening-ckdsc/endpoint-screening-ckdsc-detail.ts

import { api } from "@/lib/axios";
import { ScreeningCKDSCDetail } from "@/types/screening-ckdsc/screening-ckdsc-detail";

// Tipe untuk response API
interface AnswerResponse {
  question_id: string; // biasanya string dari backend
  score: number;
  question_text?: string;
}

interface ScreeningCKDSCDetailResponse {
  id: string;
  created_at: string;
  user: {
    id: string;
    name: string;
  } | null;
  score: number;
  interpretation: "Rendah" | "Sedang" | "Tinggi";
  description: string;
  answers: AnswerResponse[];
}

export async function getScreeningCKDSCDetail(
  id: string,
  token: string,
): Promise<ScreeningCKDSCDetail> {
  const res = await api.get<{ data: ScreeningCKDSCDetailResponse }>(
    `/medical/screening-ckdsc-histories/${id}`,
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
    user: data.user
      ? {
          id: data.user.id,
          name: data.user.name,
        }
      : null,
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
