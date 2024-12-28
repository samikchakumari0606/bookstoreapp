import React from 'react';
import list from "./list.json";
import Card from './Card';

const FreeBook = () => {
    const filterData=list.filter((data)=>data.category=="free")
    console.log(filterData)
  return (
    <div style={{display:"flex",border:"2px solid red"}}>
         
         {
            filterData.map((item)=>{
                  return(
                    <>
                    <Card item={item}/>
                    </>
                  )
            })
         }
    </div>
  )
}

export default FreeBook
