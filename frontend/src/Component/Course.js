import React ,{useEffect,useState} from 'react';
import MyNav from './MyNav';
// import mylist from "./mylist.json";
import MyCard from './MyCard';
import axios from "axios";

const Course = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
         const res=await axios.get("http://localhost:3000/book");
         console.log(res.data);
         setBook(res.data)
      }
      catch(error){
        console.log("error",error)
      }
    }
    getBook()
  },[])
  return (
    <div>
        <MyNav/>
      my course page
       {
        book.map((item)=>{
            return(
                <>
                <MyCard item={item} />
                </>
            )
        })
       }
    </div>
  )
}

export default Course
