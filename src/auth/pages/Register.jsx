import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Register() {
  const {
    register,  
    setEmail,
    setPassword,
    errorMessage
} = useAuth()

async function handleSignUp(e){
   e.preventDefault();
   register();

}

  return (
    <main className="pt-11 border-x-2 border-solid border-[#383838] bg-[#F3F3F3]">
      <header className="flex maxMd:flex-col">
        <div className="w-[55%] flex justify-between flex-col maxMd:w-full">
          <form action="#" className="pl-[60px] maxMd:px-5">
            <h1 className="text-[#373737] text-7xl font-bagnard mb-5 mt-24 pr-4 maxLg:text-5xl maxMd:text-3xl maxMd:mt-4 maxSm:text-sm">
              Welcome to <br></br> Design Vibes!
            </h1>
            {errorMessage && <p>{errorMessage}</p>}
            <h2>
              Sing up to see the latest projects full of talents, shine and
              vibes.
            </h2>
            <br></br>
            <br></br>
            <br></br>

            <div className="mb-5">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email"
                className="text-[#373737] text-2xl font-darkestMedium pr-4 maxMd:text-xl maxMd:mb-14 rounded  w-1/2"
              />
            </div>

            <div className="mb-5">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                className="text-[#373737] text-2xl font-darkestMedium pr-4 maxMd:text-xl maxMd:mb-14 rounded  w-1/2
                "
              />
            </div>
            <br></br>
            <br></br>
            <h3>
              By signing up, you agree to our Terms, Privacy Policy and Cookies
              Policy.
            </h3>
            <br></br>
            <button
              onClick={(e) => {
                handleSignUp(e);
              }}
              className="flex items-center justify-center gap-3 bg-[#A8AFF0] w-1/4 font-darkestBold text-2xl py-2 border-2 border-solid border-[#383838] rounded-md transition-all hover:bg-[#848ac2] hover:transition-all "
            >
              Sing In
            </button>
            <br></br>

            <br></br>
            <br></br>
            <Link to="/login">
              <h3 className="underline font-darkestMedium text-lg">
                Do you have account? Log in
              </h3>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
        </div>
        <div className="w-[45%] flex items-center justify-center pe-[60px] maxMd:w-full maxMd:px-5">
          <div>
            <img src="/imgs/Loginandregister.png" alt="" />
          </div>
        </div>
      </header>
    </main>
  );
}
