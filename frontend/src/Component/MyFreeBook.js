import React, { useEffect,useState} from 'react';
// import mylist from "./mylist.json";
import axios from "axios";
import MyCard from './MyCard';

const MyFreeBook = () => {
     
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
         const res=await axios.get("http://localhost:3000/book");
        //  console.log(res.data);
         const data=res.data.filter((data)=>data.category==="free");
         console.log(data)
         setBook(data)
      }
      catch(error){
        console.log("error",error)
      }
    }
    getBook()
  },[])
    
    
  return (
    <div style={{display:"flex",border:"2px solid red"}}>
         
         {
            book.map((item)=>{
                  return(
                    <>
                    <MyCard item={item}/>
                    </>
                  )
            })
         }
    </div>
  )
}

export default MyFreeBook
