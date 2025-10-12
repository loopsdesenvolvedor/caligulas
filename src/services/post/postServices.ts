import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import type { CreatePostProps, UpdatePostProps } from "../../@types/Post.js";
import prisma from "../../lib/prisma.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PostServices {
  async getAll() {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        category: true,
      },
    });

    return posts;
  }

  async getById(id: string) {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        category: true,
      },
    });

    return post;
  }

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

  async update({
    id,
    category,
    author,
    description,
    title,
    image,
    video,
  }: UpdatePostProps) {
    if (!id) {
      throw new Error("ID é obrigatório");
    }

    const existingPost = await prisma.post.findUnique({
      where: { id: id as string },
    });

    if (!existingPost) {
      throw new Error("Post não encontrado");
    }

    const uploadsPath = path.resolve(__dirname, "..", "..", "..", "uploads");

    if (image && existingPost.image && existingPost.image !== image) {
      const oldImagePath = path.join(uploadsPath, "images", existingPost.image);

      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
        // console.log("Imagem antiga excluída:", oldImagePath);
      } else {
        // console.log("Imagem antiga não encontrada:", oldImagePath);
      }
    }

    if (video && existingPost.video && existingPost.video !== video) {
      const oldVideoPath = path.join(uploadsPath, "videos", existingPost.video);

      if (fs.existsSync(oldVideoPath)) {
        fs.unlinkSync(oldVideoPath);
        // console.log("Vídeo antigo excluído:", oldVideoPath);
      } else {
        // console.log("Vídeo antigo não encontrado:", oldVideoPath);
      }
    }

    const dataToUpdate: any = {};
    if (title) dataToUpdate.title = title;
    if (description) dataToUpdate.description = description;
    if (image) dataToUpdate.image = image;
    if (video) dataToUpdate.video = video;
    if (author)
      dataToUpdate.author = {
        connect: { id: author as string },
      };
    if (category)
      dataToUpdate.category = {
        connect: { id: category as string },
      };

    const updatePost = await prisma.post.update({
      where: { id: id as string },
      data: dataToUpdate,
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        video: true,
        author: true,
        category: true,
      },
    });

    return updatePost;
  }

  async delete(id: string) {
    await prisma.post.delete({
      where: { id },
    });

    return;
  }
}

export { PostServices };
