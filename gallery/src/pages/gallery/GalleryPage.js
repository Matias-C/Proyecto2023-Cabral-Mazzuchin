import React from "react";
import Navbar from "../../components/nav/Nav";
import "./GalleryPage.css";

function GalleryPage() {
  const placeholders = [];

  placeholders.push(
    <div key={0} className="gallery-card">
      <div className="gallery-card-image"></div>
    </div>
  );

  return (
    <div className="gallery-page-container">
      <Navbar />
      <div className="gallery-title">
        <h1>MY GALLERY</h1>
      </div>
      <div className="gallery-container">
        <div className="gallery-row">
          <div className="gallery-column">
            <div className="gallery-card">
              <div className="gallery-card-image"></div>
              <div className="gallery-card-title">
                <h2>Title</h2>
              </div>
              <div className="gallery-card-description">
                <p>Description goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

}

export default GalleryPage;
