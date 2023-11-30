import { authContext } from "../context/AuthContext";
import { useContext } from "react";
export function useAuth(){
    const context = useContext(authContext);
    if (!context){
        throw new Error("the component is not inside the provide authcontext")
    }
    const {   errorMessage,setPassword, password, email,setEmail,login, user, setUser } = context

    return{

    user,
    setUser,
    login,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage

    }
}