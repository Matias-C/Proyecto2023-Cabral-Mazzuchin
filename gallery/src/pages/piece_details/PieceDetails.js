import React from "react";
import { useLocation } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Artist from "../../components/artist/Artist";

import "./PieceDetails.css";

function PieceDetails() {
    const location = useLocation();

    return (
        <>
            <Grid container spacing={4} className="details-cont">
                <Grid xs={12} sm={12} md={6} lg={6} className="details-img-cont">
                    <img className="details-img" />
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} className="details-info-cont">

                    <div className="details-section-cont">
                        <Artist artistName="Matias" />
                    </div>

                    <h2 className="marvio">{location.state.pieceName}</h2>
                    <h3 className="marvio">{location.state.pieceDate}</h3>

                    <h3 className="syne">{location.state.pieceDescription}</h3>

                </Grid>
            </Grid>
        </>
    );
}

export default PieceDetails;
