import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
  async handle(req: Request, res: Response) {
    const { title, description, type, content, published } = req.body;

    const files = req.files as {
      thumbnail?: Express.Multer.File[];
      video?: Express.Multer.File[];
    };

    const userId = req.user_id;
    const thumbnail = files.thumbnail?.[0]?.filename;
    const video = files.video?.[0].filename;
    console.log(title, description, thumbnail, type, content);

    if (!title || !description || !thumbnail || !type) {
      res.status(400).json({ error: "Campos obrigatórios faltando." });
      return;
    }

    const createPostService = new CreatePostService();
    const post = await createPostService.execute({
      title,
      description,
      content: content || `uploads/${video}`,
      published: published === "true",
      type,
      thumbnail: `uploads/${thumbnail}`,
      userId,
    });

    res.status(201).json(post);
  }
}

export { CreatePostController };
