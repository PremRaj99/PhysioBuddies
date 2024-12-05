import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
} from "react";
import JoditEditor from "jodit-react";
import TagInput from "./TagInput";
import ImageUploader from "./ImageUploader";
import SecondaryButton from "@/components/Common/SecondaryButton";

function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [],
    thumbnail: null,
    summary: "",
  });
  const [title, setTitle] = useState("");
  const editor = useRef(null);
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] =
    useState(null);
  const [images, setImages] = useState(null);
  const [summary, setSummary] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setFormData({
      ...formData,
      title,
      content,
      tags,
      thumbnail,
      summary,
    });
  }, [title, content, tags, thumbnail, summary]);

  const editorConfig = useMemo(
    () => ({
      height: 500,
      minHeight: 400,
      maxHeight: 800,
      // other configuration options...
    }),
    []
  );

  return (
    <div className="bg-bg-secondary p-4 flex flex-col justify-center items-center shadow-lg">
      <div className="rounded-lg gap-10 shadow-lg flex justify-between bg-bg-primary p-4 w-screen md:w-3/4">
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => {
                setContent(newContent);
              }}
              config={editorConfig}
              id="content"
              className="shadow appearance-none border rounded w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* for tags */}
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="tags"
            >
              Tags
            </label>
            <TagInput setTags={setTags} />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="summary"
            >
              Summary{" "}
              <span className="text-red-500">
                (Under 100 words)
              </span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="summary"
              placeholder="Enter summary"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="image"
            >
              Thumbnail{" "}
              <span className="text-red-500">
                (Note: Aspect ratio should be
                16:9)
              </span>
            </label>
            <ImageUploader
              setThumbnail={setThumbnail}
            />
          </div>
          <div className="mb-4"></div>
          <div className="mb-4">
            <button
              className="bg-text-primary hover:bg-bg-secondary hover:text-text-primary text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline hover:border-text-primary duration-500 border-2 border-transparent "
              type="submit"
              onClick={handleSubmit}
            >
              Add Blog
            </button>
          </div>
        </form>
        <div className="p-4 mt-5 w-1/4 rounded-lg bg-bg-secondary shadow-xl max-h-fit">
          Image URL Provider
          <div className="flex flex-col gap-4">
            <ImageUploader
              setThumbnail={setImages}
            />
            <SecondaryButton>
              Upload
            </SecondaryButton>
            <input
              type="text"
              name="link"
              id="imagLink"
              disabled
              value={images}
            />
          </div>
        </div>
      </div>
      <div className="">{content}</div>
    </div>
  );
}

export default AddBlog;
