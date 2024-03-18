// HeroPage.jsx
import React from "react";
import ImageUploader from "./ImageUploader";

function HeroPage({ onImageUpload }) {
  return (
    <div className="hero-container">
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Color Extractor
      </h1>
      <div className="upload-container">
        <ImageUploader onImageUpload={onImageUpload} />
      </div>
    </div>
  );
}

export default HeroPage;
