import express from "express";
import verifyJWT, { verifyAdmin } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.post(
  "/",
  verifyJWT,
  verifyAdmin,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  createBlog
);
router.get("/", getBlogs);
router.get("/:slug", getBlog);
router.put(
  "/:id",
  verifyJWT,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  updateBlog
);
router.delete("/:id", verifyJWT, verifyAdmin, deleteBlog);

export default router;
