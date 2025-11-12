// src/types/screening-asbhd-avf/screening-asbhd-avf-detail.ts

export type LevelASBHDAVF = "Rendah" | "Sedang" | "Tinggi";

export interface User {
  id: string;
  name: string;
}

export interface Answer {
  question_id: number;
  score: number;
  question_text: string;
}

export interface ScreeningASBHDAVFDetail {
  id: string;
  created_at: string;
  user: User | null;
  score: number;
  interpretation: LevelASBHDAVF;
  description: string;
  answers: Answer[];
}
