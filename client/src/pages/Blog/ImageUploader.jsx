import React, { useState } from "react";

const ImageUploader = ({setThumbnail}) => {
  const [selectedImage, setSelectedImage] =
    useState(null);
  const [errorMessage, setErrorMessage] =
    useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check if the file size exceeds 5MB
      if (file.size > 5 * 1024 * 1024) {
        // 5MB in bytes
        setErrorMessage(
          "File size should be less than 5MB."
        );
        setSelectedImage(null); 
      } else {
        setErrorMessage(""); 
        const imageUrl =
          URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setThumbnail(file);
      }
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col items-center">
      <label className="cursor-pointer bg-text-primary text-white px-4 py-2 rounded-md hover:bg-white hover:text-text-primary duration-700 mb-4">
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      {errorMessage && (
        <p className="text-red-600 mb-2">
          {errorMessage}
        </p>
      )}
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Uploaded"
          className="w-full max-h-64 object-contain rounded-md shadow-md mt-2"
        />
      )}
    </div>
  );
};

export default ImageUploader;
