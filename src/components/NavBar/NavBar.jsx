import { NavBarBrand } from "./NavBarBrand";
import { navLinks } from "../navLinks/navLinks";

function NavBar() {
  return (
    <>
      <nav className="flex items-center">
        <NavBarBrand />
        <div className="hidden items-center justify-center bg-white border-2 border-solid border-[#383838] py-[10px] cursor-pointer maxLg:w-[100%] maxLg:flex ">
          <img className="w-[42px] h-[50px]" src="/icons/menu_mobile.svg" alt="" />
        </div>
        
        <ul className="flex items-center w-full maxLg:hidden">
          <li className="flex items-center justify-center w-20% text-[#383838] border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              Home
          </li>
          <li className="flex items-center justify-center w-20% text-[#383838] border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              Projects 
          </li>
          <li className="flex items-center justify-center w-20% text-[#383838] border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              Contact
          </li>
          <li className="flex items-center justify-center w-20% text-[#383838] border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              About Us
          </li>
          <li className="flex items-center justify-center w-20% text-white border-[#383838] border-2 py-[21px] bg-[#A8AFF0] font-darkestMedium text-lg cursor-pointer">
              Log in
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
