import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider.js'

export default function Product({product}) {
  
  const {products, basketStateArray} = useStateValue()
  const [{basket}, dispatch] = basketStateArray; 

  if(!product){
    return (<div>Loading...</div>)
  }
  const {price, title, rating, image, id} = product; //?? is for undefined
  // const {price, title, rating} = product??{}; //?? is for undefined
  const addToBasket=()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {[id]: 1}
    })
  }
  return (
    <div className="product">
        <div className="product__info">
            <small className="product__title">{title}</small>
            <strong className="product__price">{price}</strong>
            <div className="product__rating">
              {Array(Math.round(rating.rate)).fill().map( (value,index)=><span key={title+index}>⭐</span> )}
            </div>
        </div>
        
        <img className="product__image" src={image}/>
        <button className="product__addToCart" onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}
