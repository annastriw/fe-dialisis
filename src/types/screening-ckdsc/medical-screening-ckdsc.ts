// src/types/screening-ckdsc/medical-screening-ckdsc.ts

export interface MedicalScreeningCKDSCHistoryItem {
  history_id: string;
  submitted_at: string;
  user_id: string;
  name: string;
  email: string;
}

export interface MedicalScreeningCKDSCDetail {
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
  answers: MedicalScreeningCKDSCAnswer[];
}

export interface MedicalScreeningCKDSCAnswer {
  question_id: number;
  score: number;
  question_text: string;
}

export type CKDSCInterpretationLevel = "Buruk" | "Cukup" | "Baik";
