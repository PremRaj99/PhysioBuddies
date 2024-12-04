import React, { useState } from "react";

const TagInput = ({ setTags: setKeywords }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] =
    useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.includes(",")) {
      const newTag = value
        .replace(",", "")
        .trim();
      if (newTag) {
        setTags([...tags, newTag]);
        setKeywords([...tags, newTag]);
        setInputValue("");
      }
    } else {
      setInputValue(value);
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(
      tags.filter(
        (_, index) => index !== indexToRemove
      )
    );
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-200 text-blue-800 px-3 py-1 rounded-full"
          >
            <span>{tag}</span>
            <button
              type="button" // Prevent form submission
              onClick={() => removeTag(index)}
              className="ml-2 text-red-600 font-bold focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a tag and press ','"
        className="w-full p-2 border rounded-md focus:outline-none"
      />
    </div>
  );
};

export default TagInput;
