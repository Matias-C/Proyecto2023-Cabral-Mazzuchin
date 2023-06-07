import image from "../../images/main-image.jpg";

import "./MainPage.css";

function MainPage() {
    return (
        <>
            <div className="main-cont">
                <div className="main-title-cont">
                    <h1 className="main-title marvio">GALERÍA <br /> DE ARTE</h1>
                </div>

                <img src={image} alt="background-image" className="main-image" />
            </div>
        </>
    );
}

export default MainPage;
