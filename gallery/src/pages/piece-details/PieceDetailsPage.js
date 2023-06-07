import React, { useState, useRef } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import BrushIcon from "@mui/icons-material/Brush";

import "./PieceDetailsPage.css";

function PieceDetailsPage() {
    const inputRef = useRef(null);

    const [pieceName, setPieceName] = useState("");
    const [pieceDescription, setPieceDescription] = useState("");
    const [pieceImage, setPieceImage] = useState();

    const handlePieceNameChange = (e) => {
        setPieceName(e.target.value);
    };

    const handlePieceDescriptionChange = (e) => {
        setPieceDescription(e.target.value);
    };

    const handleClick = () => {
        // 👇️ open file input box on click of another element
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }
        console.log(fileObj);
        setPieceImage(fileObj)
    };

    return (
        <>
            <Grid container spacing={4} className="form-cont">
                <Grid xs={12} sm={12} md={6} lg={6} className="form-file-cont">
                    <div className="form-file-input-cont">
                        <Fab
                            color="primary"
                            size="medium"
                            onClick={handleClick}
                        >
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
                        <FormControl size="medium">
                            <OutlinedInput
                                id="nombre"
                                value={pieceName}
                                onChange={handlePieceNameChange}
                                className="form-input"
                            />
                        </FormControl>

                        <div className="space-between">
                            <h3 className="syne">Descripción</h3>
                            <h3 className="syne opacity">Opcional</h3>
                        </div>

                        <FormControl size="medium" className="add-page-input">
                            <OutlinedInput
                                id="descripcion"
                                value={pieceDescription}
                                multiline
                                rows={4}
                                onChange={handlePieceDescriptionChange}
                                className="form-input"
                            />
                        </FormControl>

                        <h3 className="syne">Fecha</h3>

                        <div className="space-between">
                            <FormControl variant="outlined" fullWidth>
                                <OutlinedInput
                                    id="fecha"
                                    type="date"
                                    className="form-input syne"
                                />
                            </FormControl>

                            <Button
                                variant="contained"
                                disableElevation
                                className="form-button space-between"
                            >
                                <h3 className="marvio">Guardar</h3>
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

export default PieceDetailsPage;
