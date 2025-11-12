// src/types/screening-asbhd-avf/admin-screening-asbhd-avf.ts

export interface AdminScreeningASBHDAVFHistoryItem {
  history_id: string;
  submitted_at: string;
  user_id: string;
  name: string;
  email: string;
}

export interface AdminScreeningASBHDAVFDetail {
  id: string;
  created_at: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  score: number;
  interpretation: string;
  description: string;
  answers: AdminScreeningASBHDAVFAnswer[];
}

export interface AdminScreeningASBHDAVFAnswer {
  question_id: number;
  score: number;
  question_text: string;
}

export type ASBHDAVFInterpretationLevel = "Buruk" | "Cukup" | "Baik";
