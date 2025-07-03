import slugify from "slugify";
import { PostInput } from "../../@types/Post";
import prisma from "../../lib/prisma";

class CreatePostService {
  async execute({
    title,
    description,
    content,
    published,
    type,
    thumbnail,
    userId,
  }: PostInput) {
    if (type === "VIDEO" && !content) {
      throw new Error("Content do vídeo não pode estar vazio.");
    }
    console.log(
      title,
      description,
      content,
      published,
      type,
      thumbnail,
      userId
    );

    if (type === "BLOG" && (!content || content.trim().length === 0)) {
      throw new Error("Content não pode ser vazio para posts do blog.");
    }
    try {
      const post = await prisma.post.create({
        data: {
          title,
          description,
          content,
          published,
          thumbnail,
          type,
          slug: slugify(title, { locale: "pt", lower: true, strict: true }),
          userId,
        },
      });

      return post;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar o post. Tente novamente.");
    }
  }
}

export { CreatePostService };
