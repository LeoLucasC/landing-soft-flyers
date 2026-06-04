import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./components/body";
import PrediccionVentas from "./components/PrediccionVentas";
import EstudioMercado from "./components/EstudioMercado";
import Planes from "./components/Planes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* MARGEN SUPERIOR CRÍTICO */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta principal: Muestra el body.tsx */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Ruta nueva: Muestra solo la página de IA */}
            <Route path="/prediccion-ventas" element={<PrediccionVentas />} />
            <Route path="/estudio-mercado" element={<EstudioMercado />} />
            <Route path="/planes" element={<Planes />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;