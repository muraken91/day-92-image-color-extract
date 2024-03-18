import React from "react";

function ImageUploader({ onImageUpload }) {
    function handleChange(event) {
        const file = event.target.files[0];
        onImageUpload(file);
    };

    return (
        <div className="upload-container">
            <h2 className="upload-heading">Upload Image</h2>
            <label htmlFor="image-upload" className="upload-button">
                Choose Image
            </label>
            <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleChange}
            />
        </div>
    );
}

export default ImageUploader;
