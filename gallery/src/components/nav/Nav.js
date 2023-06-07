import { useNavigate } from "react-router-dom";

import "./Nav.css";

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <p
                className="nav-link marvio"
                onClick={() => {
                    navigate("inicio");
                }}
            >
                Inicio
            </p>
            <p
                className="nav-link marvio"
                onClick={() => {
                    navigate("galeria");
                }}
            >
                Galería
            </p>
        </nav>
    );
}

export default Navbar;
