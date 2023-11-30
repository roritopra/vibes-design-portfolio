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
    <div>
        <form onSubmit={handleUpload} action="">
            <input name="image" type="text" />
            <input name="title" type="text" />
            <input name="tags" type="text" />
            <button>UPLOAD</button>
        </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
