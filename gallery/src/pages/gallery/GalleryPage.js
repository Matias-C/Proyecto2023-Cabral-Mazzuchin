import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import PageContainer from "../../components/page-container/PageContainer";
import Photo from "../../components/photo/Photo";
import Artist from '../../components/artist/Artist';

import monnaLisa from "../../images/example-image.jpg"
import daVinci from "../../images/example-artist.jpg"

import "./GalleryPage.css";

function GalleryPage() {

  return (
    <PageContainer>
      <div className="gallery-header-cont">

        <h2 className="marvio">Mi Galeria</h2>
        
        <div className="gallery-add-cont">
          <p className="syne">Mostrar más</p>
          
          <Fab color="primary" size="medium">
            <AddIcon />
          </Fab>
        </div>
        
      </div>

      <Grid container spacing={{ sm: 6, md: 6, lg: 8, xl: 8 }} className="gallery-grid">
        
        <Photo 
          photo={monnaLisa}
        />
        <Photo 
          photo={monnaLisa}
        />
        <Photo 
          photo={monnaLisa}
        />

      </Grid>

      <h2 className="gallery-subtitle marvio">Otros artistas</h2>

      <Artist
        artistImage={daVinci}
        artistName="Leonardo da Vinci"
      />

      <Grid container spacing={{ sm: 6, md: 6, lg: 8, xl: 8 }} className="gallery-grid">
        
        <Photo 
          photo={monnaLisa}
        />
        <Photo 
          photo={monnaLisa}
        />
        <Photo 
          photo={monnaLisa}
        />
        
      </Grid>
    </PageContainer>
  );
}

export default GalleryPage;
