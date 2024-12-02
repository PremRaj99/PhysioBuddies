import React, {
  useState,
  useRef,
  useMemo,
} from "react";
import JoditEditor from "jodit-react";

function AddBlog() {
  const title = document.querySelector("#title").value;
  const thumbnail = document.querySelector("#image").value;
  const editor = useRef(null);
  const [content, setContent] = useState("");
  


  const handleSubmit = (e) => {
    e.preventDefault();
  };


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
    <div className="bg-bg-secondary p-4 flex justify-center items-center shadow-lg">
      <div className="rounded-lg shadow-lg bg-bg-primary p-4 w-screen md:w-3/5">
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
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="image"
            >
              Thumbnail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              placeholder="Upload Image"
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-text-primary hover:bg-bg-secondary hover:text-text-primary text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline hover:border-text-primary border-2 border-transparent "
              type="submit"
              onClick={handleSubmit}
            >
              Add Blog
            </button>
          </div>
        </form>
        <div className="m-2">{content}</div>
      </div>
    </div>
  );
}

export default AddBlog;
