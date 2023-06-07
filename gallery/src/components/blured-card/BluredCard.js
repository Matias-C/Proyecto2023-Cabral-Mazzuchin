import "./BluredCard.css"

function BluredCard({ children }) {
    return(
        <div className="blured-card-cont">
            {children}
        </div>
    );
}

export default BluredCard;