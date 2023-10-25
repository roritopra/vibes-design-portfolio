export function Footer() {
  return (
    <>
      <footer className="flex justify-between item-center border-2 border-solid border-[#383838]">
        <p className="flex items-center pl-11 font-darkestMedium text-base">
          © 2023 Vibes design and any associated logos are trademarks, service
          marks or registered trademarks of Vibes Design.
        </p>
        <div className="bg-[#383838] p-5">
            <img className="w-[50px]" src="/icons/logo.svg" alt="Logo Icon" />
        </div>
      </footer>
    </>
  );
}
