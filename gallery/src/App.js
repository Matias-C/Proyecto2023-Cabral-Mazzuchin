import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

import Nav from "./components/nav/Nav";
import MainPage from "./pages/main/MainPage"
import GalleryPage from "./pages/gallery/GalleryPage";

import "./styles/styles.css"
import "./App.css"

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#A4A3FF',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/Proyecto2023-Cabral-Mazzuchin" element={<Navigate to="/Proyecto2023-Cabral-Mazzuchin/inicio" replace={true} />}  />
            <Route exact path="/Proyecto2023-Cabral-Mazzuchin/inicio" element={<MainPage />} />
            <Route exact path="/Proyecto2023-Cabral-Mazzuchin/galeria" element={<GalleryPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      
    </>
  );
}

export default App;
