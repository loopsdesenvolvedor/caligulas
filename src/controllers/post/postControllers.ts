import { PostServices } from "../../services/post/postServices.js";
import { BaseController } from "../baseController.js";

class PostControllers extends BaseController {
  async getAll() {
    const postServices = new PostServices();
    const posts = await postServices.getAll();

    return this.res.status(200).json(posts);
  }

  async getById() {
    const id = this.req.params.id as string;

    const postServices = new PostServices();
    const post = await postServices.getById(id);

    if (!post) {
      return this.res.status(404).json({ error: "Post not found" });
    }

    return this.res.status(200).json(post);
  }

  async create() {
    try {
      const { title, description, author, category } = this.req.body;

      let image: string | null = null;
      let video: string | null = null;

      if (this.req.files && !Array.isArray(this.req.files)) {
        image = this.req.files.image?.[0]?.filename || null;
        video = this.req.files.video?.[0]?.filename || null;
      }

      if (!image && !video) {
        return this.res
          .status(400)
          .json({ error: "Image or video is required" });
      }

      const postServices = new PostServices();
      const post = await postServices.create({
        title,
        description,
        author,
        category,
        video: video as string,
        image: image as string,
      });

      return this.res.status(201).json(post);
    } catch (error: any) {
      this.res
        .status(500)
        .json({ error: error.message || "Internal Server Error" });
    }
  }

  async delete() {
    const id = this.req.params.id as string;

    const postServices = new PostServices();
    await postServices.delete(id);

    return this.res.status(204).send();
  }
}

export { PostControllers };
