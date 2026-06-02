import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./components/body";
import PrediccionVentas from "./components/PrediccionVentas";
import EstudioMercado from "./components/EstudioMercado"; 

function App() {
  return (
    <Router>
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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;