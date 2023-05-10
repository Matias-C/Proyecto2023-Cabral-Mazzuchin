import Grid from '@mui/material/Unstable_Grid2';

import "./Photo.css"

function Photo(props) {
    return(
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
            <img className="photo-cont" src={props.photo} />
        </Grid>
    );
}

export default Photo;