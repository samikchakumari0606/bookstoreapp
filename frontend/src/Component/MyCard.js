import React from 'react'

const MyCard = ({item}) => {
    console.log("mycard",item)
  return (
    <div>
      {/* mycard */}
      <h3>Product name: {item.name} </h3>
      <h3>Product title:{item.title} </h3>
      <h3>Product category: {item.category} </h3>
      <img src={item.image}/>
    </div>
  )
}

export default MyCard
