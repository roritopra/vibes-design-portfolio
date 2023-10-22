function NavBar() {
  return (
    <>
      <nav className="flex items-center">
        <div className="flex items-center justify-center w-20% bg-[#383838] border-2 border-solid border-[#383838] py-[10px] cursor-pointer">
          <img className="w-[62px]" src="/icons/logo.svg" alt="" />
        </div>
        <ul className="flex items-center w-full">
          <li className="flex items-center justify-center w-20% border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              Home
          </li>
          <li className="flex items-center justify-center w-20% border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              Projects 
          </li>
          <li className="flex items-center justify-center w-20% border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              Contact
          </li>
          <li className="flex items-center justify-center w-20% border-[#383838] border-2 py-[21px] bg-white font-darkestMedium text-lg cursor-pointer">
              About Us
          </li>
          <li className="flex items-center justify-center w-20% border-[#383838] border-2 py-[21px] bg-[#A8AFF0] font-darkestMedium text-lg cursor-pointer">
              Log in
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
