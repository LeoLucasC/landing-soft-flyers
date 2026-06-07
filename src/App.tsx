import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./components/body";
import PrediccionVentas from "./components/PrediccionVentas";
import EstudioMercado from "./components/EstudioMercado";
import Planes from "./components/Planes";
import ScrollToTop from "./components/ScrollToTop";
import DesarrolloCustom from "./components/desarrollo-custom"; 
import AppsMoviles from "./components/apps-moviles"; 
import ArquitecturaEscalable from "./components/arquitectura-escalable"; 
import AutomatizacionEmpresarial from "./components/automatizacion-empresarial"; 
import Facturacion from "./components/facturacion"; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/prediccion-ventas" element={<PrediccionVentas />} />
            <Route path="/estudio-mercado" element={<EstudioMercado />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/desarrollo-custom" element={<DesarrolloCustom />} /> 
            <Route path="/apps-moviles" element={<AppsMoviles />} /> 
            <Route path="/arquitectura-escalable" element={<ArquitecturaEscalable />} /> 
            <Route path="/automatizacion-empresarial" element={<AutomatizacionEmpresarial />} /> 
            <Route path="/facturacion" element={<Facturacion />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;