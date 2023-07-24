import { ThemeProvider } from "./context/themeContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/navigation/NavBar";
import FloatingButton from "./components/ui/FloatingButton";
import Ayuda from "./pages/Ayuda";
import ArriendaloFlex from "./pages/ArriendaloFlex";
import Aplicar from "./pages/Aplicar";
import DatosPropiedad from "./components/detail/DatosPropiedad";
import NotFound from "./components/NotFound";
import MarketPlace from "./marketplace/MarketPlace";
import MarketPlaces from "./marketplace/filtersMarketPlace/MarketPlaces";
import Footer from "./components/footer/Footer";
import PoliticaDeDatos from "./components/footer/PoliticaDeDatos";
import FormTomador from "./components/forms/FormTomador";
import FormCoA from "./components/forms/FormCoA";
import ScrollToTop from "./components/ScrollToTop";
// import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 dark:text-white  min-width-screen">
        <Router>
          <NavBar />
          {/* <Breadcrumb /> */}

          <FloatingButton />
          {/* <HeroSlider/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/aplicar" element={<Aplicar />} />
            <Route path="/aplicar_tomador" element={<FormTomador />} />
            <Route path="/aplicar_CoA" element={<FormCoA />} />
            <Route path="/arriendaloflex" element={<ArriendaloFlex />} />
            <Route path="/propiedades" element={<MarketPlaces />} />
            <Route
              path="/politica_tratamiendo_de_Datos"
              element={<PoliticaDeDatos />}
            />
            <Route path="propiedades/:id" element={<DatosPropiedad />} />
            <Route path="/not_found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not_found" replace />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
