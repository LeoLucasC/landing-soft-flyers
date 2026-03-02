
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./components/body";

// --- COMPONENTE PRINCIPAL ---
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* MARGEN SUPERIOR CRÍTICO: Asegura que el Header no tape el contenido */}
      <main className="flex-grow">
        <LandingPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;