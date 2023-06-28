import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import BrushIcon from "@mui/icons-material/Brush";

import "./NewPieceForm.css";

function NewPieceForm() {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [pieceName, setPieceName] = useState("");
    const [pieceDescription, setPieceDescription] = useState("");
    const [pieceDate, setPieceDate] = useState("");
    const [pieceImage, setPieceImage] = useState();

    const handlePieceNameChange = (e) => {
        const newValue = e.target.value;
        setPieceName(newValue);
    };

    const handlePieceDescriptionChange = (e) => {
        const newValue = e.target.value;
        setPieceDescription(newValue);
    };

    const handlePieceDateChange = (e) => {
        const newValue = e.target.value;
        setPieceDate(newValue);
    };

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (e) => {
        const fileObj = e.target.files && e.target.files[0];
        if (!fileObj) {
            return;
        }
        console.log(fileObj);
        setPieceImage(fileObj);
    };

    const getUserPiecesFromLocalStorage = () => {
        // Función para cargar las obras ya guardadas
        const userPieces = JSON.parse(localStorage.getItem("userPieces"));
        if (userPieces === null) {
            // Si el array es nullo se devuelve uno vacío
            return [];
        } else {
            // Si es distinto de nullo, se devuelve el array cargado
            return userPieces;
        }
    };

    const saveUserPieceInLocalStorage = () => {
        // Función para guardar una nueva obra
        const userPieces = getUserPiecesFromLocalStorage(); // Se cargan las obras ya guardadas con la función getUserPiecesFromLocalStorage()
        const newId = userPieces.length + 1; // Se crea un nuevo id en base al último del array de las obras

        const newPiece = {
            // Se crea la nueva obra para subir
            pieceId: newId,
            pieceImg: pieceImage,
            pieceName: pieceName,
            pieceDescription: pieceDescription,
            pieceDate: pieceDate,
        };

        userPieces.push(newPiece); // Se agrega a las obras anteriores
        localStorage.setItem("userPieces", JSON.stringify(userPieces)); // Se guarda el nuevo array en localStorage

        navigate(-1); // Se vuelve hacia la galería
    };

    return (
        <>
            <Grid container spacing={4} className="form-cont">
                <Grid xs={12} sm={12} md={6} lg={6} className="form-file-cont">
                    <div className="form-file-input-cont">
                        <Fab color="primary" size="small" onClick={handleClick}>
                            <AddIcon />
                        </Fab>
                        <input
                            id="imagen"
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                            className="form-file-input"
                        />
                    </div>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} className="form-info-cont">
                    <h2 className="form-header marvio">Subir Obra</h2>

                    <div className="form-inputs-cont">
                        <h3 className="syne">Nombre de la obra</h3>
                        <FormControl
                            size="small"
                            fullWidth
                        >
                            <OutlinedInput
                                id="piece-name-input"
                                value={pieceName}
                                onChange={handlePieceNameChange}
                                autoFocus
                                className="form-input"
                            />
                        </FormControl>

                        <div className="space-between">
                            <h3 className="syne">Descripción</h3>
                            <h3 className="syne opacity">Opcional</h3>
                        </div>

                        <FormControl size="small" fullWidth>
                            <OutlinedInput
                                id="piece-description-input"
                                value={pieceDescription}
                                multiline
                                rows={4}
                                onChange={handlePieceDescriptionChange}
                                className="form-input"
                            />
                        </FormControl>

                        <h3 className="syne">Fecha</h3>

                        <div className="space-between">
                            <FormControl
                                size="small"
                                fullWidth
                            >
                                <OutlinedInput
                                    id="fecha"
                                    type="date"
                                    value={pieceDate}
                                    onChange={handlePieceDateChange}
                                    className="form-input syne"
                                />
                            </FormControl>

                            <Button
                                disabled={pieceName !== "" && pieceDate !== "" && pieceImage !== null ? false : true}
                                variant="contained"
                                size="small"
                                disableElevation
                                onClick={saveUserPieceInLocalStorage}
                                className="form-button space-between"
                            >
                                <p className="marvio">Guardar</p>
                                <div className="form-button-bg-icon">
                                    <BrushIcon className="form-button-icon" />
                                </div>
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default NewPieceForm;
