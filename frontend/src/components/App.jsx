// App.jsx
import React, { useState } from "react";
import axios from "axios";
import ColorPalette from "./ColorPalette";
import HeroPage from "./HeroPage";
import "../assets/App.css";

function App() {
  const [colors, setColors] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  async function handleImageUpload(image) {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://127.0.0.1:5000/extract-colors", formData);
      setColors(response.data.colors);
      setUploadedImage(URL.createObjectURL(image));
    } catch (error) {
      console.error("Error extracting colors:", error);
    }
  }

  return (
    <div className="app-container">
      <HeroPage onImageUpload={handleImageUpload} /> {/* Render HeroPage component */}
      {uploadedImage && (
        <div className="image-container">
          <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
        </div>
      )}
      {colors.length > 0 && (
        <div className="color-palette-container">
          <h2 className="palette-title">Color Palette</h2>
          <ColorPalette colors={colors} /> {/* Render ColorPalette component */}
        </div>
      )}
    </div>
  );
}

export default App;
