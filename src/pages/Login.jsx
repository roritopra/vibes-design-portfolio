import { Link } from "react-router-dom";

export function Login() {
  return (
    <main className="pt-11 border-x-2 border-solid border-[#383838] bg-[#F3F3F3]">
      <header className="flex maxMd:flex-col">
        <div className="w-[55%] flex justify-between flex-col maxMd:w-full">
          <div className="pl-[60px] maxMd:px-5">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-[#373737] text-7xl font-bagnard mb-5 mt-24 pr-4 maxLg:text-5xl maxMd:text-3xl maxMd:mt-4 maxSm:text-sm">
              Welcome Back!
            </h1>
            <h2>
              Sing up to see the latest projects full of talents, shine and
              vibes.
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Username or Email"
                className="text-[#373737] text-2xl font-darkestMedium pr-4 maxMd:text-xl maxMd:mb-14 rounded  w-1/2"
              />
            </div>
            <br></br>

            <div className="mb-5">
              <input
                type="password"
                placeholder="Password"
                className="text-[#373737] text-2xl font-darkestMedium pr-4 maxMd:text-xl maxMd:mb-14 rounded  w-1/2
                "
              />
            </div>
            <br></br>
            <br></br>
            <button className="flex items-center justify-center gap-3 bg-[#A8AFF0] w-1/4 font-darkestBold text-2xl py-2 border-2 border-solid border-[#383838] rounded-md transition-all hover:bg-[#848ac2] hover:transition-all ">
              Log In
            </button>
            <br></br>
            <br></br>
            <Link to="/register">
              <h3 className="underline font-darkestMedium text-lg">Do not have an account? Sign Up</h3>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="w-[45%] flex items-center justify-center pe-[60px] maxMd:w-full maxMd:px-5">
          <div >
            <img src="/imgs/Loginandregister.png" alt=""  className="small-image w-25" />
          </div>
        </div>
      </header>
      <br></br>
      <br></br>
    </main>
  );
}
