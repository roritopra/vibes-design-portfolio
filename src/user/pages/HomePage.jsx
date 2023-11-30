import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="pt-11 border-x-2 border-solid border-[#383838] bg-[#F3F3F3]">
      <header className="flex maxMd:flex-col">
        <div className="w-[55%] flex justify-between flex-col maxMd:w-full">
          <div className="pl-[60px] maxMd:px-5">
            <div className="flex flex-col">
              <h1 className="text-[#373737] text-7xl font-bagnard mt-28 pr-4 maxLg:text-5xl maxMd:text-3xl maxMd:mt-4 maxSm:text-sm">
                <img
                  className="relative bottom-4 right-9 maxMd:right-3"
                  src="/icons/star1.svg"
                  alt="star Icon"
                />
                We create impactful digital experiences.
              </h1>
              <div className="flex justify-end">
                <img
                  className="pb-5 relative right-14 w-[40px] maxLg:right-6"
                  src="/icons/star2.svg"
                  alt="star Icon"
                />
              </div>
            </div>
            <p className="text-[#373737] text-2xl font-darkestMedium pr-4 maxMd:text-xl maxMd:mb-14">
              We combine forward-thinking design with modern technology to tell
              stories that transform and grow our partners brands.
            </p>
          </div>
          <div>
            <div className="maxMd:flex hidden px-8 pb-14 mb-14 border-b-2 border-solid border-[#383838]">
              <Link
                to="/projects"
                className="flex items-center justify-center gap-3 bg-[#A8AFF0] w-full font-darkestBold text-xl py-2 border-2 border-solid border-[#383838] rounded-full transition-all hover:bg-[#848ac2] hover:transition-all"
              >
                Check out our best projects
                <img className="pt-3" src="/icons/right_icon.svg" alt="" />
              </Link>
            </div>
            <Link to="/projects" className="flex items-center justify-center gap-3 bg-[#A8AFF0] w-full font-darkestBold text-3xl py-6 border-t-2 border-solid border-[#383838] transition-all hover:bg-[#848ac2] hover:transition-all maxMd:hidden">
              Check out our best projects
              <img className="pt-3" src="/icons/right_icon.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="w-[45%] flex items-center justify-center pe-[60px] maxMd:w-full maxMd:px-5">
          <div className="relative flex justify-center border-x-2 border-t-2 border-solid border-[#383838] rounded-t-full w-full pt-52">
            <img
              className="absolute top-0 left-36 translate-y-24 maxXl:left-16 maxMd:translate-x-16 maxSm:left-4 maxXs:!translate-x-0 maxXs:!left-4"
              src="/imgs/vibes_icon1.png"
              alt="vibes1"
            />
            <img
              className="absolute bottom-0 right-0 maxSm:w-[40%]"
              src="/imgs/vibes_icon2.png"
              alt="Vibes2"
            />
            <img
              className="absolute bottom-10 left-0 translate-x-10"
              src="/imgs/vibes_icon3.png"
              alt="Vibes3"
            />
            <img
              className="absolute top-0 right-36 translate-y-28 maxXl:right-20 maxLg:translate-x-16 maxMd:!right-44 maxXs:!translate-x-36"
              src="/imgs/vibes_icon4.png"
              alt="Vibes4"
            />
            <img
              className="pb-24"
              src="/imgs/test_landing.png"
              alt="Landing Image"
            />
          </div>
        </div>
      </header>
      <section className="border-t-2 border-solid border-[#383838] flex">
        <div className="w-[40%] flex justify-center items-center">
          <h2 className="text-[#373737] p-11 text-5xl font-bagnard maxMd:text-3xl maxMd:p-4">
            Together we bring ideas to life.
          </h2>
        </div>
        <div className="w-[60%]">
          <p className="p-11 text-lg h-full text-[#373737] font-darkestMedium border-l-2 border-solid border-[#383838] maxMd:text-base maxMd:p-4">
            From concept to production, we create compelling digital experiences
            that tell your brand’s unique story. No challenge is too small or
            too big, and we love them all, but most of all, we love creating
            cool stuff that people enjoy using.<br></br>
            Whether you’re a world-famous brand looking for a new approach or an
            independent coffee brewer - we want to work with you!
          </p>
        </div>
      </section>
      <section className="p-11 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 border-t-2 border-solid border-[#383838] bg-[#383838] bg-hero-pattern bg-[length:100%] maxMd:p-5">
        <article className="bg-[#A8AFF0] p-8 rounded-lg maxMd:p-4">
          <img src="/icons/heart_icon.svg" alt="Icon Heart" />
          <h3 className="font-bagnard text-[#383838] text-4xl mt-6 maxMd:text-3xl">Logo</h3>
          <p className="text-black text-lg font-darkestMedium pb-7 maxMd:text-base">
            No logo? No problem. We can design your brand assets and guidelines.
          </p>
          <button className="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl transition-all hover:bg-[#1f1f1f] hover:transition-all">
            Start
            <img className="pt-1" src="/icons/right_icon_light.svg" alt="Right Icon" />
            </button>
        </article>

        <article className="bg-[#B4FFC9] p-8 rounded-lg maxMd:p-4">
          <img src="/icons/figma_icon.svg" alt="Icon Heart" />
          <h3 className="font-bagnard text-[#383838] text-4xl mt-6 maxMd:text-3xl">Web Design</h3>
          <p className="text-black text-lg font-darkestMedium pb-7 maxMd:text-base">
            Do not have a design? I can create a beautiful website in no time.
          </p>
          <button className="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl transition-all hover:bg-[#1f1f1f] hover:transition-all">
            Start
            <img className="pt-1" src="/icons/right_icon_light.svg" alt="Right Icon" />
            </button>
        </article>
        
        <article className="bg-[#EE7E3F] p-8 rounded-lg maxMd:p-4">
          <img src="/icons/webflow_icon.svg" alt="Icon Heart" />
          <h3 className="font-bagnard text-[#383838] text-4xl mt-6 maxMd:text-3xl">Webflow</h3>
          <p className="text-black text-lg font-darkestMedium pb-7 maxMd:text-base">
            Looking for a clean and fast build for your design? We are your team.
          </p>
          <button className="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl transition-all hover:bg-[#1f1f1f] hover:transition-all">
            Start
            <img className="pt-1" src="/icons/right_icon_light.svg" alt="Right Icon" />
            </button>
        </article>
      </section>
      <figure>
        <img className="w-full" src="/imgs/gif_landing.gif" alt="Gif" />
      </figure>
    </main>
  );
}
