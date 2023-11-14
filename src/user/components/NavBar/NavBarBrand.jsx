import { Link } from "react-router-dom";

export function NavBarBrand() {
  return (
    <Link
      to="/"
      className="flex items-center justify-center w-20% bg-[#383838] border-2 border-solid border-[#383838] py-[10px] cursor-pointer maxLg:w-[100%]"
    >
      <img className="w-[42px] h-[50px]" src="/icons/logo.svg" alt="" />
    </Link>
  );
}
