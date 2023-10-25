function HomePage() {
  return (
    <main className="pt-11 border-x-2 border-b-2 border-solid border-[#383838]">
      <header className="flex">
        <div className="w-[55%] flex justify-between flex-col">
          <div className="pl-[60px]">
            <h1 className="text-[#373737] text-7xl font-bagnard mb-5 mt-24 pr-4">
              We create impactful digital experiences.
            </h1>
            <p className="text-[#373737] text-2xl font-darkestMedium pr-4">
              We combine forward-thinking design with modern technology to tell
              stories that transform and grow our partners brands.
            </p>
          </div>
          <div>
            <button className="flex items-center justify-center gap-3 bg-[#A8AFF0] w-full font-darkestBold text-3xl py-6 border-t-2 border-solid border-[#383838]">
              Check out our best projects
              <img className="pt-3" src="/icons/right_icon.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="w-[45%] flex items-center justify-center pe-[60px]">
          <div className="flex justify-center border-x-2 border-t-2 border-solid border-[#383838] rounded-t-full w-full pt-52">
            <img src="/imgs/test_landing.png" alt="" />
          </div>
        </div>
      </header>
      <section className="border-t-2 border-solid border-[#383838] flex">
        <div className="w-[40%] flex justify-center items-center">
          <h2 className="text-[#373737] p-11 text-5xl font-bagnard">
            Together we bring ideas to life.
          </h2>
        </div>
        <div className="w-[60%]">
          <p className="p-11 text-lg text-[#373737] font-darkestMedium border-l-2 border-solid border-[#383838]">
            From concept to production, we create compelling digital experiences
            that tell your brand’s unique story. No challenge is too small or
            too big, and we love them all, but most of all, we love creating
            cool stuff that people enjoy using.<br></br>
            Whether you’re a world-famous brand looking for a new approach or an
            independent coffee brewer - we want to work with you!
          </p>
        </div>
      </section>
      <section className="p-11 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 border-t-2 border-solid border-[#383838] bg-[#383838] bg-hero-pattern bg-[length:100%]">
        <article className="bg-[#A8AFF0] p-8 rounded-lg">
          <img src="/icons/heart_icon.svg" alt="Icon Heart" />
          <h3 className="font-bagnard text-[#383838] text-4xl mt-6">Logo</h3>
          <p className="text-black text-lg font-darkestMedium pb-7">
            No logo? No problem. We can design your brand assets and guidelines.
          </p>
          <button className="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl">
            Start
            <img className="pt-1" src="/icons/right_icon_light.svg" alt="Right Icon" />
            </button>
        </article>

        <article className="bg-[#B4FFC9] p-8 rounded-lg">
          <img src="/icons/figma_icon.svg" alt="Icon Heart" />
          <h3 className="font-bagnard text-[#383838] text-4xl mt-6">Web Design</h3>
          <p className="text-black text-lg font-darkestMedium pb-7">
            Do not have a design? I can create a beautiful website in no time.
          </p>
          <button className="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl">
            Start
            <img className="pt-1" src="/icons/right_icon_light.svg" alt="Right Icon" />
            </button>
        </article>
        
        <article className="bg-[#EE7E3F] p-8 rounded-lg">
          <img src="/icons/webflow_icon.svg" alt="Icon Heart" />
          <h3 className="font-bagnard text-[#383838] text-4xl mt-6">Webflow</h3>
          <p className="text-black text-lg font-darkestMedium pb-7">
            Looking for a clean and fast build for your design? We are your team.
          </p>
          <button className="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl">
            Start
            <img className="pt-1" src="/icons/right_icon_light.svg" alt="Right Icon" />
            </button>
        </article>
      </section>
      <figure>
        <img className="w-full" src="/imgs/gif_landing.gif" alt="" />
      </figure>
    </main>
  );
}

export default HomePage;
