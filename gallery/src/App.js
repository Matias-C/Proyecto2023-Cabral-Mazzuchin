import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

import PageContainer from "./components/page-container/PageContainer";
import MainPage from "./pages/main/MainPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import PieceDetails from "./pages/piece_details/PieceDetails";
import NewPieceForm from "./pages/new_piece_form/NewPieceForm";

import "./styles/styles.css";
import "./App.css";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000",
        },
        secondary: {
            main: "#A4A3FF",
        },
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<PageContainer />}>
                            <Route exact path="/inicio" element={<MainPage />} />
                            <Route exact path="/galeria" element={<GalleryPage />} />
                            <Route exact path="/galeria/:piece" element={<PieceDetails />} />
                            <Route exact path="/galeria/subir-obra" element={<NewPieceForm />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
