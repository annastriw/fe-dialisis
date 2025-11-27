import { User } from "../user/user";

export interface Booking {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  booking_time: string;
  created_at: Date;
  updated_at: Date;
  user: User;
}
