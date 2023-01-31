import React from "react"
import './CheckoutProduct.css'
import productImage1 from './image/product_image_1.jpg'

export default function CheckoutProduct({product}){
  if(!product){
    return (<div>Loading...</div>)
  }
  const {price, title, rating} = product;
  
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={productImage1}/>
        <div className="checkoutProduct__info">
            <small className="checkoutProduct__title">{title}</small>
            <strong className="checkoutProduct__price">{price}</strong>
            <div className="checkoutProduct__rating">
                {Array(Math.round(rating.rate)).fill().map( (i)=><span>⭐</span> )}
            </div>
        </div>
        
    </div>
  )
}
