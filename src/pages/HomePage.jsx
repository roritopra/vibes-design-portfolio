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
        <div className="w-[40%] p-11">
          <h2 className="text-[#373737] text-5xl font-bagnard">Together we bring ideas to life.</h2>
        </div>
        <div>
          <p>
            From concept to production, we create compelling digital experiences
            that tell your brand’s unique story. No challenge is too small or
            too big, and we love them all, but most of all, we love creating
            cool stuff that people enjoy using.<br></br>
            Whether you’re a world-famous brand looking for a new approach or an
            independent coffee brewer - we want to work with you!
          </p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
