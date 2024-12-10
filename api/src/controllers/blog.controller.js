import Blog from "../models/blog.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/fileUpload.js";

export const createBlog = asyncHandler(async (req, res, next) => {
  const { title, content, summary, keywords } = req.body;

  if (!title || !content || !summary) {
    throw new ApiError(400, "All fields are required");
  }
  const slug = title.toLowerCase().split(" ").join("-");
  const readTime = Math.ceil(content.split(" ").length / 200);
  
  if (summary.length > 200) {
    throw new ApiError(400, "Summary should not exceed 200 characters");
  }

  const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;
  

  let thumbnailUrl;
  if (thumbnailLocalPath) {
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
    if (thumbnail) {
      thumbnailUrl = thumbnail.url;
    }
  }
  console.log(thumbnailUrl)


  try {
    const blog = new Blog({
      title,
      slug,
      content,
      readTime,
      thumbnail: thumbnailUrl,
      summary,
      keywords,
    });

    await blog.save();

    res.status(201).json(new ApiResponse(201, blog, "Blog created"));
  } catch (error) {
    throw new ApiError(500, "Error in creating blog: " + error.message);
  }
});

export const getBlogs = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });

  res.json(new ApiResponse(200, blogs));
});

export const getBlog = asyncHandler(async (req, res, next) => {
  if (!req.params.slug) {
    throw new ApiError(400, "Slug is required");
  }

  const blog = await Blog.findOne({ slug: req.params.slug });

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  try {
    blog.views += 1;

    await blog.save();

    res.json(new ApiResponse(200, blog));
  } catch (error) {
    throw new ApiError(500, "Error in fetching blog");
  }
});

export const updateBlog = asyncHandler(async (req, res, next) => {
  const { title, content, summary, keywords } = req.body;
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  let slug;

  if (title) {
    slug = title.toLowerCase().split(" ").join("-");
  }

  const readTime = content ? Math.ceil(content.split(" ").length / 200) : blog.readTime;

  const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;

  let thumbnailUrl;

  if (thumbnailLocalPath) {
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
    if (thumbnail) {
      thumbnailUrl = thumbnail.url;
    }
  }

  try {
    blog.title = title || blog.title;
    blog.slug = slug || blog.slug;
    blog.content = content || blog.content;
    blog.readTime = readTime || blog.readTime;
    blog.thumbnail = thumbnailUrl || blog.thumbnail;
    blog.summary = summary || blog.summary;
    blog.keywords = keywords || blog.keywords;

    await blog.save();

    res.json(new ApiResponse(200, blog, "Blog updated"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export const deleteBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  await blog.deleteOne();

  res.json(new ApiResponse(200, null, "Blog deleted"));
});
