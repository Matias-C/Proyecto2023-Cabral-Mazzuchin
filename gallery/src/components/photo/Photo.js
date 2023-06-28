import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";

import "./Photo.css";

function Photo(props) {
    const navigate = useNavigate();

    return (
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
                className="photo-cont"
                onClick={(e) => {
                    navigate(props.piece.pieceName, { state: props.piece });
                }}
            >
                <div className="photo-blur-effect"></div>
                <img className="photo" src={props.photo} alt="gallery-image" />
            </div>
        </Grid>
    );
}

export default Photo;
