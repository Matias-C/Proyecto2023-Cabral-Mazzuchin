import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import Photo from "../../components/photo/Photo";
import Artist from "../../components/artist/Artist";

import img from "../../images/example-image.jpg";
import artist from "../../images/example-artist.jpg";

import "./GalleryPage.css";

function GalleryPage() {
    const navigate = useNavigate();

    const [userPieces, setUserPieces] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        // Función que se ejecuta cada vez que se entra a la galería
        const getUserPiecesFromLocalStorage = async () => {
            // La función trae todas las piezas que se hayan guardado en Local Storage
            const userPieces = await JSON.parse(
                localStorage.getItem("userPieces"),
            ); // Se transforma en objeto
            setUserPieces(userPieces); // Se guarda en userPieces
            setRefresh(false);
            console.log(userPieces);
        };
        getUserPiecesFromLocalStorage();
    }, [refresh]);

    return (
        <div className="gallery-cont">
            <div className="gallery-header-cont">
                <h2 className="marvio">Mi Galería</h2>

                <div className="gallery-add-cont">
                    <p className="syne">Mostrar más</p>

                    <Fab
                        color="primary"
                        size="medium"
                        onClick={() => navigate("subir-obra")}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            </div>

            {userPieces ? (
                <Grid
                    container
                    spacing={{ sm: 6, md: 6, lg: 8, xl: 8 }}
                    className="gallery-grid"
                >
                    {userPieces.map((piece) => (
                        <Photo
                            key={piece.pieceId}
                            photo={img}
                            piece={piece}
                        />
                    ))}
                </Grid>
            ) : (
                <p className="syne">Aun no tines obras, sube la primera!</p>
            )}

            <h2 className="gallery-subtitle marvio">Otros artistas</h2>

            <Artist artistImage={artist} artistName="Leonardo da Vinci" />

            <Grid
                container
                spacing={{ sm: 6, md: 6, lg: 8, xl: 8 }}
                className="gallery-grid"
            >
                <Photo photo={img} />
                <Photo photo={img} />
                <Photo photo={img} />
            </Grid>
        </div>
    );
}

export default GalleryPage;
