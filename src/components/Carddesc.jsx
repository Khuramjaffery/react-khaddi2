import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Card from './Card';
function Carddesc() {
    const {id}=useParams()
   const [product,setProducts]=useState(null);
  return (
    <>
    
    <div className="d-flex flex-wrap justify-content-evenly align-item-center">

</div>
 <div className="Card">
  <div>
  <div className="image">
 <img src={product.image} alt="" />
  </div>
  <div className="card-body">
    <div className="title">{product.title}</div>
    <div className="category">{product.category}</div>
    <div className="desc">{product.description}</div>
  <div className="price">Rs{product.price}</div>
 
 
 
  </div>
  </div>
 </div>


    </>
  )
}

export default Carddesc