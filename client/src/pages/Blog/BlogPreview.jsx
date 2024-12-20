import blogService from "@/services/blogService";
import React, {
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import {
  Clock,
  Eye,
  BookOpen,
} from "lucide-react";
import "@/styles/blogContent.css";
import Loading from "@/components/Common/Loading";

export default function BlogPreview() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();

  const fetchBlogData = async (slug) => {
    setLoading(true);
    const data = await blogService.getBlogBySlug(
      slug
    );
    setBlog(data);
    setLoading(false);
  };

  useEffect(() => {
    if (slug) fetchBlogData(slug);
  }, [slug]);

  // Format date nicely
  const formatDate = (dateString) => {
    return new Date(
      dateString
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-bg-secondary min-h-screen  py-8">
      <div className="container md:w-2/3 w-auto mx-auto px-4">
        {/* Blog Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Thumbnail */}
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-full aspect-video object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Blog Metadata */}
          <div className="p-6">
            <div className="flex items-center text-text-primary text-sm mb-4 space-x-4">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>
                  {formatDate(blog.createdAt)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye size={16} />
                <span>{blog.views} views</span>
              </div>
            </div>

            {/* Blog Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              {blog.title}
            </h1>

            {/* Blog Content */}
            <div
              className="blog-content text-text-primary"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            ></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl shadow-md p-8 text-center">
          <BookOpen
            className="mx-auto mb-4 text-blue-600"
            size={48}
          />
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Enjoyed this blog?
          </h2>
          <p className="text-text-primary mb-6 max-w-xl mx-auto">
            Stay updated with our latest insights,
            tips, and stories. Subscribe to our
            Community today!
          </p>
          <button className="bg-white border-text-primary text-text-primary border hover:bg-text-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
}
