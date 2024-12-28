import React from 'react';
import {useAuth} from "../Component/Context/AuthProvider.js";


const Logout = () => {

    const[authUser,setAuthUser]=useAuth();

    function handleLogout(){
        try{
        setAuthUser({
            ...authUser,
            user:null,
        })
        localStorage.removeItem("Users");
        alert("Logout successfully")
        window.location.reload();
        } 
        catch(err){
          alert("sorry")
        }
    }
  return (
    <div>
      
      <button onClick={handleLogout}>logout page</button>
    </div>
  )
}

export default Logout
