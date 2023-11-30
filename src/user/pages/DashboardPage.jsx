import { database } from "../../auth/firebase/firebase";
import { useContext } from "react";
import { authContext } from "../../auth/context/AuthContext";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export function DashboardPage() {
  function handleUpload(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const projectsCollection = collection(database, "projects");
    formData.tags = formData.tags.split(",");
    addDoc(projectsCollection, formData).then((docRef) => {
      const docId = docRef.id;
      setDoc(doc(database, "projects", docId), { id: docId }, { merge: true }).then(() => {
        alert("Success");
        window.location.href = "/projects";
      });
    });
  }

  const { logout } = useContext(authContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#F3F3F3] border-x-2 border-solid border-[#383838]">
        <img
          className="w-full h-full object-contain"
          src="/imgs/Loginandregister.png"
          alt="Descripción de la imagen"
        />
      </div>

      <div className="w-1/2 border-x-2 border-solid border-[#383838] bg-[#F3F3F3] p-8 flex flex-col items-center justify-center">
        <form onSubmit={handleUpload} action="" className="max-w-md w-full">
          <h1 className="font-bagnard text-[#383838] text-3xl mt-4 maxMd:text-3xl mb-2">
            Project Title
          </h1>
          <input
            className="w-full p-2 mb-4"
            name="title"
            type="text"
            placeholder="Give your project a title"
            required
          />
          <h1 className="font-bagnard text-[#383838] text-3xl mt-4 maxMd:text-3xl mb-2">
            Upload your Project
          </h1>
          <input
            className="w-full p-2 mb-4"
            name="image"
            type="text"
            placeholder="Add your image URL"
            required
          />

          <h1 className="font-bagnard text-[#383838] text-3xl mt-4 maxMd:text-3xl mb-2">
            Project Tags
          </h1>
          <input
            className="w-full p-2 mb-4"
            name="tags"
            type="text"
            placeholder="Add tags to your project to help people discover your work"
            required
          />

          <button className="bg-[#383838] px-4 pb-1 flex items-center gap-2 text-white font-darkestRegular text-lg rounded-3xl transition-all hover:bg-[#1f1f1f] hover:transition-all">
            Upload Project
          </button>
          <button onClick={handleLogout}>Logout</button>
        </form>
      </div>
    </div>
  );
}
