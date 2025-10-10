import { PostServices } from "../../services/post/postServices.js";
import { BaseController } from "../baseController.js";

class PostControllers extends BaseController {
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
}

export { PostControllers };
