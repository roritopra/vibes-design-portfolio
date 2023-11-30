import { Routes, Route } from "react-router-dom";
import { HomePage } from "./user/pages/HomePage";
import { AboutUsPage } from "./user/pages/AboutUsPage";
import { Header } from "./user/components/Header/Header";
import { Footer } from "./user/components/Footer/Footer";
import { ProjectsPage } from "./user/pages/ProjectsPage";
import { ContactUsPage } from "./user/pages/ContactUsPage";
import { Register } from "./auth/pages/Register";
import { Login } from "./auth/pages/Login";
import { DashboardPage } from "./user/pages/DashboardPage";
import { PrivateRouter } from "./user/router/PrivateRouter";
import { ProjectsDetailPage } from "./user/pages/ProjectsDetailPage";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/projects/:title" element={<ProjectsDetailPage />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <DashboardPage />
              </PrivateRouter>
            }
          />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </main>
  );
}
