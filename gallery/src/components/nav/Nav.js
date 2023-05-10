import { useNavigate } from "react-router-dom";

import "./Nav.css"

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="nav">
      <p 
        className="nav-link marvio" 
        onClick={() => {
          navigate("/Proyecto2023-Cabral-Mazzuchin/inicio", {replace: true})
        }}
      >
        Inicio
      </p>
      <p 
        className="nav-link marvio" 
        onClick={() => {
          navigate("/Proyecto2023-Cabral-Mazzuchin/galeria", {replace: true})
        }}
      >
        Galeria
      </p>
    </nav>
  );
}

export default Navbar;
