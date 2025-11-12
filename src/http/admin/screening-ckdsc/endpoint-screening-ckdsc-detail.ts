// src/http/admin/screening-ckdsc/endpoint-screening-ckdsc-detail.ts

import { api } from "@/lib/axios";
import { ScreeningCKDSCDetail } from "@/types/screening-ckdsc/screening-ckdsc-detail";

export async function getScreeningCKDSCDetail(
  id: string,
  token: string,
): Promise<ScreeningCKDSCDetail> {
  const res = await api.get(`/admin/screening-ckdsc-histories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = res.data.data;

  return {
    id: data.id,
    created_at: data.created_at,
    user: {
      id: data.user.id,
      name: data.user.name,
    },
    score: data.score,
    interpretation: data.interpretation,
    description: data.description,
    answers: data.answers.map((answer: any) => ({
      question_id: answer.question_id,
      score: answer.score,
      question_text: answer.question_text ?? "",
    })),
  };
}
