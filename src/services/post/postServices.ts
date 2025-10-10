import type { CreatePostProps } from "../../@types/Post.js";
import prisma from "../../lib/prisma.js";

class PostServices {
  async create({
    title,
    description,
    image,
    video,
    author,
    category,
  }: CreatePostProps) {
    console.log(title, description, image, video, author, category);

    if (!title || !description || !author || !category || (!image && !video)) {
      throw new Error("Todos os campos são obrigatórios");
    }

    const post = await prisma.post.create({
      data: {
        title,
        description,
        image,
        video,
        author: {
          connect: { id: author as string },
        },
        category: {
          connect: { id: category as string },
        },
      },

      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        video: true,
        author: true,
        category: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return post;
  }
}

export { PostServices };
