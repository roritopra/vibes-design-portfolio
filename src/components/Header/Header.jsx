import { NavBarBrand } from "../NavBar/NavBarBrand"
import { NavBar } from "../NavBar/NavBar"

export function Header() {
  return (
    <nav className="flex items-center">
        <NavBarBrand />
        <NavBar />
    </nav>
        
  )
}
