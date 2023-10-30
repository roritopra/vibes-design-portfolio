import { menuLinks } from "./menuLinks/menuLinks";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
    <div className={`fixed top-0 left-0 z-50 w-screen h-screen bg-[#F3F3F3] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button className="absolute top-4 right-4 text-[#383838] text-5xl" onClick={toggleNavbar}>
        &#9776;
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col gap-10">
          {menuLinks.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={closeNavbar}
              className={`flexr font-darkestBold text-3xl text-center cursor-pointer transition-all ${
                index === menuLinks.length - 1
                  ? "text-[#ffffff] !bg-[#A8AFF0] pb-3 pt-2 px-20 hover:!bg-[#848ac2]"
                  : ""
              }`}
            >
              {menu.text}
            </Link>
          ))}
        </ul>
      </div>
    </div>

      <div className="hidden items-center justify-center bg-white border-2 border-solid border-[#383838] py-[10px] cursor-pointer maxLg:w-[100%] maxLg:flex">
        <button onClick={toggleNavbar}>
        <img
          className="w-[30px] h-[50px]"
          src="/icons/menu_mobile.svg"
          alt=""
        />
        </button>
      </div>

      <ul className="flex items-center w-full maxLg:hidden">
        {menuLinks.map((menu, index) => (
          <Link
            to={menu.path}
            key={index}
            className={`flex items-center justify-center w-20% text-[#383838] border-[#383838] border-2 py-[21px] bg-white font-darkestBold text-lg cursor-pointer transition-all hover:bg-[#bfbfbf] hover:transition-all ${
              index === menuLinks.length - 1
                ? "text-[#ffffff] !bg-[#A8AFF0] hover:!bg-[#848ac2]"
                : ""
            }`}
          >
            {menu.text}
          </Link>
        ))}
      </ul>
    </>
  );
}

