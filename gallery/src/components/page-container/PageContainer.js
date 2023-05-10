import React from "react";
import "./PageContainer.css"

function PageContainer({ children }) {
    return(
        <div className="page-cont">
            {children}
        </div>
    );
}

export default PageContainer;