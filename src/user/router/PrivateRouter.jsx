import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../auth/context/AuthContext";

export function PrivateRouter({ children }) {
    const { user } = useContext(Context);
    
    if(!user) {
        return <Navigate to="/login" />
    } else {
        return children;
    }
}