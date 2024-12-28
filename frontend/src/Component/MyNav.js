import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import {useAuth} from "../Component/Context/AuthProvider"

const MyNav = () => {
const[authUser,setAuthUser]=useAuth();
  return (
    <div>
      <NavLink to="/"><h1>My Navbar</h1></NavLink>
      <NavLink to="/course"><h1>My Course</h1></NavLink>
      <NavLink to="/signup"><h1>My Signup</h1></NavLink>
    
      {
        authUser?<Logout/>: <NavLink to="/login"><h1>My login</h1></NavLink>
      }
     
    </div>
  )
}

export default MyNav
