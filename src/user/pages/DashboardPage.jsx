import { database } from "../../auth/firebase/firebase";
import { useContext } from "react";
import { authContext } from "../../auth/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";

export function DashboardPage() {
    function handleUpload(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        const projectsCollection = collection(database, 'projects')
        formData.tags = formData.tags.split(',')
        addDoc(projectsCollection, formData)
    }

    const { logout } = useContext(authContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div class="flex h-screen">
      <div class="w-1/2 bg-[#F3F3F3] border-x-2 border-solid border-[#383838]">
        <img
          class="w-full h-full object-contain"
          src="/imgs/Loginandregister.png"
          alt="Descripción de la imagen"
        />
      </div>

      <div class="w-1/2 border-x-2 border-solid border-[#383838] bg-[#F3F3F3] p-8 flex flex-col items-center justify-center">
        <form onSubmit={handleUpload} action="" class="max-w-md w-full">
          <h1 class="font-bagnard text-[#383838] text-3xl mt-4 maxMd:text-3xl mb-2">
            Project Title
          </h1>
          <input
            class="w-full p-2 mb-4"
            name="title"
            type="text"
            placeholder="Give your project a title"
          />
          <h1 class="font-bagnard text-[#383838] text-3xl mt-4 maxMd:text-3xl mb-2">
            Upload your Project
          </h1>
          <input
            class="w-full p-2 mb-4"
            name="image"
            type="text"
            placeholder="Add your image URL"
          />

          <h1 class="font-bagnard text-[#383838] text-3xl mt-4 maxMd:text-3xl mb-2">
            Project Tags
          </h1>
          <input
            class="w-full p-2 mb-4"
            name="tags"
            type="text"
            placeholder="Add tags to your project to help people discover your work"
          />

          <button class="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl transition-all hover:bg-[#1f1f1f] hover:transition-all">
            Upload Project
          </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
