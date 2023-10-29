export function AboutUsPage() {
    return (
      <main className="border-x-2 border-solid border-[#383838] bg-[#F3F3F3]">
        <div className="pl-[0px] maxMd:px-5">
          <h2 className="text-[#373737] p-6 text-5xl font-bagnard maxMd:text-3xl maxMd:p-2">
            Who are we?
          </h2>
        </div>
  
        <div className="bg-[#F3F3F3] h-screen flex justify-center items-center border-t-2 border-solid border-[#383838]">
          <div className="bg-white p-16 border border-dashed border-black">
            <div className="flex justify-center items-center border border-solid border-[#383838]">
              <div className="w-1/2 h-1/4 bg-[#A8AFF0] border border-solid border-[#383838]">
                <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
              </div>
              <div className="w-1/2 h-1/4 bg-[#B4FFC9] border border-solid border-[#383838]">
                <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
              </div>
              <div className="w-1/2 h-1/4 bg-[#EE7E3F] border border-solid border-[#383838]">
                <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
              </div>
              <div className="w-1/2 h-1/4 bg-[#D6EE5E] m-0 mr-70 border border-solid border-[#383838]">
                <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center bg-white p-11">
              <h2 className="text-[#373737] text-5xl font-bagnard maxMd:text-3xl maxMd:p-4">
                Juan José Rodriguez
              </h2>
            </div>
            <div className="w-[60%]">
              <p className="p-11 text-lg text-[#373737] font-darkestMedium border-l-2 border-solid border-[#383838] maxMd:text-base maxMd:p-4">
                Juan José is driven by clean development practices. He has
                experience in creating highly usable and responsive websites and
                applications. He ensures that in the projects he has worked on,
                the development meets all the usability, user-friendliness, and
                maintenance metrics of the web creations.
              </p>
            </div>
          </div>
        </div>
      </main>
      
    );
  }
  

