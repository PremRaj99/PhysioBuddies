import React, {
  useEffect,
  useState,
} from "react";
import BlogCard from "../../components/Common/BlogCard";
import RecommendCard from "../../components/Common/RecommendCard";
import { useNavigate } from "react-router-dom";
import blogService from "@/services/blogService";
import Loading from "@/components/Common/Loading";

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogsData();
  }, []);

  const fetchBlogsData = async () => {
    setLoading(true);
    const data = await blogService.getAllBlogs();
    setBlogs(data);
    setLoading(false);
  };

  return (
    <>
      <div className="w-screen bg-blue-100 text-green-950 flex justify-center align-middle text-center py-16">
        <h2 className="text-xl font-semibold">
          Our Blogs
        </h2>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-[80vh]">
          <Loading />
        </div>
      )}

      <div className="flex flex-wrap p-4 md:p-16 mx-auto justify-center items-center gap-4">
        {blogs.map((blog, index) => (
          <BlogCard
            title={blog.title}
            descr={blog.summary}
            img={blog.thumbnail}
            date={blog.createdAt}
            views={blog.views}
            key={index}
            onClick={() =>
              navigate("/blog/" + blog.slug)
            }
          />
        ))}
      </div>
    </>
  );
}
