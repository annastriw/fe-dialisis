import { z } from "zod";

export const SubmitScreeningASBHDAVFValidator = z.object({
  user_id: z.string(),
  answers: z
    .array(
      z.object({
        question_id: z.number(),
        score: z.number().min(1).max(5), // ASBHD-AVF skala 1–5
      }),
    )
    .length(16), // 16 pertanyaan
});

export type SubmitScreeningASBHDAVFValidatorType = z.infer<
  typeof SubmitScreeningASBHDAVFValidator
>;
