import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../nav/Nav";

function PageContainer() {
    return(
        <>
            <Navbar />
            <div className="page-cont">
                <Outlet />
            </div>
        </>
    );
}

export default PageContainer;