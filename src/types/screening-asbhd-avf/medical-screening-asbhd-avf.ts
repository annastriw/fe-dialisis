// src/types/screening-asbhd-avf/medical-screening-asbhd-avf.ts

export interface MedicalScreeningASBHDAVFHistoryItem {
  history_id: string;
  submitted_at: string;
  user_id: string;
  name: string;
  email: string;
}

export interface MedicalScreeningASBHDAVFDetail {
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
  answers: MedicalScreeningASBHDAVFAnswer[];
}

export interface MedicalScreeningASBHDAVFAnswer {
  question_id: number;
  score: number;
  question_text: string;
}

export type ASBHDAVFMedicalInterpretationLevel = "Buruk" | "Cukup" | "Baik";
