import { menuLinks } from "./menuLinks/menuLinks";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/hooks/useAuth";

export function NavBar() {
  const {user} = useAuth()
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-screen h-screen bg-[#F3F3F3] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-[#383838] text-5xl"
          onClick={toggleNavbar}
        >
          &#x2716;
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col gap-10">
            {menuLinks.map((menu, index) => (
              <NavLink
                to={menu.path}
                key={index}
                onClick={closeNavbar}
                className={({ isActive }) => {
                  return `font-darkestBold text-3xl text-center cursor-pointer transition-all ${
                    isActive ? "bg-[#bfbfbf] py-3 px-6 text-black" : ""
                  }`;
                }}
              >
                {menu.text}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className={({ isActive }) => {
                return `font-darkestBold text-3xl bg-[#A8AFF0] py-3 px-6 text-white" text-center cursor-pointer transition-all ${
                  isActive ? "bg-[#848ac2] py-3 px-6 text-white" : ""
                }`;
              }}
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>

      <div
        onClick={toggleNavbar}
        className="hidden items-center justify-center bg-white border-2 border-solid border-[#383838] py-[10px] cursor-pointer maxLg:w-[100%] maxLg:flex"
      >
        <button>
          <img
            className="w-[30px] h-[50px]"
            src="/icons/menu_mobile.svg"
            alt=""
          />
        </button>
      </div>

      <ul className="flex items-center w-full maxLg:hidden">
        {menuLinks.map((menu, index) => (
          <NavLink
            to={menu.path}
            key={index}
            className={({ isActive }) => {
              return `flex items-center justify-center w-20% text-[#383838] border-[#383838] border-2 py-[21px] font-darkestBold text-lg cursor-pointer transition-all hover:bg-[#bfbfbf] hover:transition-all ${
                isActive ? "bg-[#bfbfbf] py-3 px-6 text-black" : ""
              }`;
            }}
          >
            {menu.text}
          </NavLink>
        ))}
        {user ? (
          <NavLink
          to="/dashboard"
          className={({ isActive }) => {
            return `flex items-center justify-center w-20% text-white border-[#383838] border-2 py-[21px] font-darkestBold text-lg cursor-pointer transition-all hover:bg-[#EE671B] hover:transition-all ${
              isActive ? "bg-[#EC5704] py-3 px-6 text-white" : "bg-[#EE7E3F]"
            }`;
          }}
        >
          Dashboard
        </NavLink>
        ) : (
          <NavLink
          to="/login"
          className={({ isActive }) => {
            return `flex items-center justify-center w-20% text-white border-[#383838] border-2 py-[21px] bg-[#A8AFF0] font-darkestBold text-lg cursor-pointer transition-all hover:bg-[#848ac2] hover:transition-all ${
              isActive ? "bg-[#848ac2] py-3 px-6 text-white" : ""
            }`;
          }}
        >
          Login
        </NavLink>
        )

        }
      </ul>
    </>
  );
}
