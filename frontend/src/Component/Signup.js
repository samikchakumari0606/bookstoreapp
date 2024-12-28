import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
    const { register,
         handleSubmit,
          watch, formState: { errors } } = useForm();
    
      const onSubmit =async(data)=>{
        
        const userInformation={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        
        //console.log (data);getting data on the submit of form

        //api from the backend to signup
        
       await axios.post("http://localhost:3000/users/signup",userInformation)
       .then((res)=>{
        console.log(res.data);

        if(res.data){
            alert(" Signup Succesfully")
        }

        //saving user detail in local storage
        localStorage.setItem("Users",JSON.stringify(res.data.user));


       }).catch((err)=>{
        if(err.res){
            console.log(err);
            alert("Error: " + err.res.data.message);
            // alert("user already exits")
         }
      
       });
    };
         
  return (
    <div>
     
      <form onSubmit={handleSubmit(onSubmit)}>
        Signup page
        <h4>Name</h4>
        <input type="text" placeholder='enter your name'
         {...register("fullname", { required: true })}/>
         {errors.fullname && <span>This field is required</span>}
        <br/>
        <h4>Email</h4>
        <input type="email" placeholder='enter your email'
         {...register("email", { required: true })}/>
         {errors.email && <span>This field is required</span>}
        <br/>
        <h4>Password</h4>
        <input type="password" placeholder='enter your password'
        {...register("password", { required: true })}/>
         {errors.password && <span>This field is required</span>}
        <br/>
        <button>Signup</button>
        <p>Have account?<NavLink to="/login">Login</NavLink></p>
      </form>
    </div>
  )
}

export default Signup
