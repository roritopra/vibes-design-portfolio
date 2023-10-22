import { NavBarBrand } from "../NavBar/NavBarBrand"
import NavBar from "../NavBar/NavBar"

function Header() {
  return (
    <nav className="flex items-center">
        <NavBarBrand />
        <NavBar />
    </nav>
        
  )
}

export default Header