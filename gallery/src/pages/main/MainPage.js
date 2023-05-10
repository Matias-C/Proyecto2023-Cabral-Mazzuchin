import image from "../../images/main-image.jpg"

import "./MainPage.css";

function MainPage() {
  return (
    <>
      <div className="main-cont">

        <div className="main-title-cont">
          <h1 className="main-title marvio">GALERIA DE ARTE</h1>
        </div>
        
        <img src={image} className="main-image"></img>

      </div>
    </>
  );
}

export default MainPage;
