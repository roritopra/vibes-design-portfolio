import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth'


export const authContext = createContext();

export function AuthContext({children}){
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)
    const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [errorMessage, setErrorMessage] = useState('');
   const navigate = useNavigate();
    useEffect(() => {
       let unsubscribe;
       unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setLoading(false)
           if(currentUser) setUser(currentUser)
           else{setUser(null)}
       });
       return () => {
           if(unsubscribe) unsubscribe();
       }
    },[])

    const login = () =>{
      signInWithEmailAndPassword(auth,email,password)
      .then((user) => {
            console.log(user)
            navigate('/dashboard')
      })
      .catch((error) => {
         switch (error.code) {
            case 'auth/invalid-email':
            setErrorMessage('The email address is not formatted correctly.');
            break;
            case 'auth/invalid-login-credentials':
            setErrorMessage('Invalid email or password');
            break;
            default:
            setErrorMessage(error.message);
         }
      });
      
    }

    const logout = () => {
   //Hacer deslogueo de firebase 
      signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
      // hacer un codigo que navage al login homepage
      }).catch((error) => {
      // An error happened.
      });

    }
    const values = {
        user,
       setUser,
       login,
       email,
       setEmail,
       password,
       setPassword,
       errorMessage

    }
  
   return <authContext.Provider value={values}>
      {!loading &&
       children
      }
   </authContext.Provider>
   }