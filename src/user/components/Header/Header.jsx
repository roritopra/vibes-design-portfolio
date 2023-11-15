import { NavBarBrand } from "../NavBar/NavBarBrand";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

export function Header() {
  return (
    <main>
      <div className="flex items-center">
        <NavBarBrand />
        <NavBar />
      </div>

      <Outlet />
    </main>
  );
}
