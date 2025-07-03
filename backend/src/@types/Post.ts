import { PostType } from "@prisma/client";

export type PostInput = {
  title: string;
  description: string;
  thumbnail: string;
  type: PostType;
  content: string;
  published: boolean;
  userId: string;
};
