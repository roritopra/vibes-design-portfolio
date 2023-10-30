export function Footer() {
  return (
    <>
      <footer className="flex justify-between item-center border-2 border-solid border-[#383838] maxMd:flex-col-reverse">
        <p className="flex items-center pl-11 font-darkestMedium text-base maxMd:px-3 maxMd:text-sm maxMd:p-2">
          © 2023 Vibes design and any associated logos are trademarks, service
          marks or registered trademarks of Vibes Design.
        </p>
        <div className="bg-[#383838] px-5 py-1 flex items-center justify-center">
            <img className="w-[60px]" src="/icons/logo.svg" alt="Logo Icon" />
        </div>
      </footer>
    </>
  );
}
