// src/types/screening-ckdsc/screening-ckdsc-detail.ts

export type LevelCKDSC = "Rendah" | "Sedang" | "Tinggi";

export interface User {
  id: string;
  name: string;
}

export interface Answer {
  question_id: number;
  score: number;
  question_text: string;
}

export interface ScreeningCKDSCDetail {
  id: string;
  created_at: string;
  user: User | null;
  score: number;
  interpretation: LevelCKDSC;
  description: string;
  answers: Answer[];
}
