import React,{createContext,useContext,useState} from 'react';

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
   const initialAuthUser=localStorage.getItem("Users");
   const [authUser,setAuthUser]=useState(
             initialAuthUser?JSON.parse(initialAuthUser):undefined
   )
  return (
    <div>
      AuthProvider
      <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider


//custom hook
export const useAuth=()=>useContext(AuthContext)

