// src/http/admin/screening-asbhd-avf/endpoint-screening-asbhd-avf-detail.ts

import { api } from "@/lib/axios";
import { ScreeningASBHDAVFDetail } from "@/types/screening-asbhd-avf/screening-asbhd-avf-detail";

// Tipe untuk response API
interface AnswerResponse {
  question_id: string; // biasanya string dari backend
  score: number;
  question_text?: string;
}

interface ScreeningASBHDAVFDetailResponse {
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

export async function getScreeningASBHDAVFDetail(
  id: string,
  token: string,
): Promise<ScreeningASBHDAVFDetail> {
  const res = await api.get<{ data: ScreeningASBHDAVFDetailResponse }>(
    `/admin/screening-asbhd-avf-histories/${id}`,
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
