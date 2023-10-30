export function AboutUsPage() {
  return (
    <main className="border-x-2 border-solid border-[#383838] bg-[#F3F3F3]">
      <div className="pl-0 maxMd:px-5">
        <h2 className="text-[#373737] p-6 text-5xl font-bagnard maxMd:text-3xl maxMd:p-2">
          Who are we?
        </h2>
      </div>

      <div className="bg-[#F3F3F3] h-screen flex justify-center items-center border-t-2 border-solid border-[#383838]">
        <div className="mx-auto my-4 bg-white p-4 border border-dashed border-black w-11/12 max-w-8xl ">
          <div className="flex justify-center items-center">
            <div className="w-1/2 h-1/4 bg-[#A8AFF0] border-solid border-[#383838] border-t-2 border-b-2 border-l-2">
              <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
            </div>
            <div className="w-1/2 h-1/4 bg-[#B4FFC9] border-solid border-[#383838] border-t-2 border-b-2 border-l-2">
              <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
            </div>
            <div className="w-1/2 h-1/4 bg-[#EE7E3F] border-solid border-[#383838] border-t-2 border-b-2 border-l-2">
              <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
            </div>
            <div className="w-1/2 h-1/4 bg-[#D6EE5E] m-0 mr-2 border-solid border-[#383838] border-t-2 border-b-2 border-l-2 border-r-2">
              <img className="w-full" src="/imgs/rodro_photo.png" alt="Gif" />
            </div>
          </div>

          <div className="pl-0 w-full flex justify-start items-start bg-white p-4">
            <h2 className="p-1 text-[#EE7E3F] text-5xl font-bagnard maxMd:text-3xl maxMd:p-4">
              Juan José Rodriguez
            </h2>
          </div>

          <div className="pl-0 w-full flex justify-start items-start bg-white p-4">
            <div className="w-[60%]">
              <p className="p-1 text-lg text-[#373737] font-darkestMedium maxMd:text-base maxMd:p-4">
                Juan José is driven by clean development practices. He has
                experience in creating highly usable and responsive websites and
                applications. He ensures that in the projects he has worked on,
                the development meets all the usability, user-friendliness, and
                maintenance metrics of the web creations.
              </p>
              <p className="p-1 text-3xl text-[#EE7E3F] font-darkestBold border-b-2 border-solid border-[#EE7E3F] maxMd:text-base maxMd:p-4">
                Studies
              </p>
              <p className="p-1 text-lg text-[#373737] font-darkestMedium maxMd:text-base maxMd:p-4">
                UNIVERSIDAD ICESI - DISEÑO DE MEDIOS INTERACTIVOS
              </p>
              <p className="p-1 text-md text-[#373737] font-darkestMedium maxMd:text-base maxMd:p-4">
                (2019-2023) Currently in 8th semester.
              </p>
            </div>
            <div className="pl-8 w-[40%] flex flex-col">
              <p className="p-1 text-3xl text-[#EE7E3F] font-darkestBold border-b-2 border-solid border-[#EE7E3F] maxMd:text-base maxMd:p-4">
                Experience
              </p>
              <li className="p-1 text-lg text-[#373737] font-darkestMedium maxMd:text-base maxMd:p-4">
                OOH Experiences
              </li>
              <li className="p-1 text-lg text-[#373737] font-darkestMedium maxMd:text-base maxMd:p-4">
                Data analysis
              </li>
              <p className="p-1 text-3xl text-[#EE7E3F] font-darkestBold border-b-2 border-solid border-[#EE7E3F] maxMd:text-base maxMd:p-4">
                Hobbies
              </p>
              <li className="p-1 text-lg text-[#373737] font-darkestMedium maxMd:text-base maxMd:p-4">
                I enjoy staying updated on the new technologies in the film
                industry.
              </li>
              <li className="p-1 text-lg text-[#373737] font-darkestMedium maxMd:text-base maxMd:p-4">
                I appreciate long journeys as an opportunity to take a break
                from the hustle and disconnect from work.
              </li>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
