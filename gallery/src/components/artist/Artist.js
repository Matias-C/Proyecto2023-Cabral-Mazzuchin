import "./Artist.css"

function Artist(props) {
    return(
        <div className="artist-cont">
            <img className="artist-image" src={props.artistImage} />
            <p className="artist-name marvio">{props.artistName}</p>
        </div>
    );
}

export default Artist;