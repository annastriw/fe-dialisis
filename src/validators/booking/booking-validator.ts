import { z } from "zod";

export const bookingSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().nullable(),
  booking_time: z.string().refine(
    (val) => {
      const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
      return regex.test(val);
    },
    {
      message: "Format tanggal tidak valid (gunakan YYYY-MM-DD HH:mm)",
    },
  ),
});

export type BookingType = z.infer<typeof bookingSchema>;
