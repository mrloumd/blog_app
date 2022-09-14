import express from "express";
import {
  getBlog,
  setBlog,
  deleteBlog,
  updateBlog,
} from "../controller/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const blogRouter = express.Router();

blogRouter.route("/").get(protect, getBlog).post(protect, setBlog);
blogRouter.route("/:id").delete(protect, deleteBlog).put(protect, updateBlog);

export default blogRouter;
