// src/types/screening-ckdsc/admin-screening-ckdsc.ts

export interface AdminScreeningCKDSCHistoryItem {
  history_id: string;
  submitted_at: string;
  user_id: string;
  name: string;
  email: string;
}

export interface AdminScreeningCKDSCDetail {
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
  answers: AdminScreeningCKDSCAnswer[];
}

export interface AdminScreeningCKDSCAnswer {
  question_id: number;
  score: number;
  question_text: string;
}

export type CKDSCInterpretationLevel = "Buruk" | "Cukup" | "Baik";
