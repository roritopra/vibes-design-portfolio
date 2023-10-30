import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Login } from './pages/Login'
import { Register } from './pages/Register'
//Aquí se importan los componentes que se van a usar en las rutas

export function AppRouter() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </main>
  )
}
