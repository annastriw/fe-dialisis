import { User } from "../user/user";

export type Discussion = {
  id: string;
  title: string;
  created_at: string; // gunakan string karena JSON mengirim ISO date
  updated_at: string;
  comments: DiscussionComment[];
};

export type DiscussionDetail = Discussion;

export type DiscussionComment = {
  id: string;
  discussion_id?: string; // bisa optional kalau backend tidak mengirim
  medical_id?: string | null;
  is_private?: string; // default "0"
  user_id?: string;
  comment: string;
  image_path: string | null;
  created_at: string;
  updated_at: string;
  user: User;
  medical?: {
    id: string;
    name: string;
  } | null;
  discussion?: {
    id: string;
    title: string;
  } | null;
  answers: DiscussionCommentAnswer[]; // wajib array, bisa kosong
};

export type DiscussionCommentAnswer = {
  id: string;
  comment: string;
  image_path: string | null;
  created_at: string;
  updated_at: string;
  user: User;
};
