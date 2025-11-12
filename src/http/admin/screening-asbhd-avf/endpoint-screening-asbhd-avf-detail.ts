// src/http/admin/screening-asbhd-avf/endpoint-screening-asbhd-avf-detail.ts

import { api } from "@/lib/axios";
import { ScreeningASBHDAVFDetail } from "@/types/screening-asbhd-avf/screening-asbhd-avf-detail";

export async function getScreeningASBHDAVFDetail(
  id: string,
  token: string,
): Promise<ScreeningASBHDAVFDetail> {
  const res = await api.get(`/admin/screening-asbhd-avf-histories/${id}`, {
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
