import { z } from "zod";

export const SubmitScreeningCKDSCValidator = z.object({
  user_id: z.string(),
  answers: z
    .array(
      z.object({
        question_id: z.number(),
        score: z.number().min(1).max(5), // CKDSC juga skala 1–5
      }),
    )
    .length(15), // CKDSC terdiri dari 15 pertanyaan
});

export type SubmitScreeningCKDSCValidatorType = z.infer<
  typeof SubmitScreeningCKDSCValidator
>;
