import React from "react";
import Nav from "../../components/nav/Nav";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <Nav />
      <div className="main-page-header">
        <div className="main-page-header-overlay"></div>
        <div className="main-page-title-container">
          <h1 className="main-page-title">GALERIA DE ARTE</h1>
        </div>
      </div>
    </>
  );
}

export default MainPage;
