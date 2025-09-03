import { User } from "../user/user";

export type Discussion = {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  comments: DiscussionComment[];
};

export type DiscussionDetail = {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  comments: DiscussionComment[];
};

export type DiscussionComment = {
  id: string;
  discussion_id: string;
  medical_id: string | null;
  is_private: string; // "0" atau "1"
  user_id: string;
  comment: string;
  image_path: string | null;
  created_at: Date;
  updated_at: Date;
  user: User;
  medical?: {
    id: string;
    name: string;
  } | null;
  discussion?: {
    id: string;
    title: string;
  } | null;
  answers?: DiscussionCommentAnswer[];
};

export type DiscussionCommentAnswer = {
  id: string;
  comment: string;
  image_path: string | null;
  created_at: Date;
  updated_at: Date;
  user: User;
};