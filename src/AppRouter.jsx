import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
//Aquí se importan los componentes que se van a usar en las rutas

export function AppRouter() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </main>
  );
}
