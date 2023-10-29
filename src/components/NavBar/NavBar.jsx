import { menuLinks } from "./menuLinks/menuLinks";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div className="hidden items-center justify-center bg-white border-2 border-solid border-[#383838] py-[10px] cursor-pointer maxLg:w-[100%] maxLg:flex ">
        <img
          className="w-[30px] h-[50px]"
          src="/icons/menu_mobile.svg"
          alt=""
        />
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
