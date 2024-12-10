import toast from "@/utils/toast";
import axios from "../utils/Axios";

const getAllBlogs = async () => {
  try {
    const { data } = await axios.get("/api/v1/blog");

    if (data.success) return data.data;
    else {
      console.error("Error fetching blogs:", data.message);
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    toast.error(error.response.data.message);
  }
};

const getBlogBySlug = async (slug) => {
  try {
    const { data } = await axios.get(`/api/v1/blog/${slug}`);

    if (data.success) return data.data;
    else {
      console.error(`Error fetching blog with slug ${slug}:`, data.message);
      toast.error(data.message);
    }
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    toast.error(error.response.data.message);
  }
};

const createBlog = async (blogData) => {
  try {
    const { data } = await axios.post("/api/v1/blog", blogData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (data.success) return toast.success(data.message);
    else {
      console.error("Error creating blog:", data.message);
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Error creating blog:", error);
    toast.error(error.response.data.message);
  }
};

const updateBlog = async (id, blogData) => {
  try {
    const { data } = await axios.put(`/api/v1/blog/${id}`, blogData);

    if (data.success) return toast.success(data.message);
    else {
      console.error(`Error updating blog with id ${id}:`, data.message);
      toast.error(data.message);
    }
  } catch (error) {
    console.error(`Error updating blog with id ${id}:`, error);
    toast.error(error.response.data.message);
  }
};

const deleteBlog = async (id) => {
  try {
    const { data } = await axios.delete(`/api/v1/blog/${id}`);
    if (data.success) return toast.success(data.message);
    else {
      console.error(`Error deleting blog with id ${id}:`, data.message);
      toast.error(data.message);
    }
  } catch (error) {
    console.error(`Error deleting blog with id ${id}:`, error);
    toast.error(error.response.data.message);
  }
};

export default {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
};
