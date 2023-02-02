
import React from 'react'
import './Checkout.css'
import CheckoutImage from './image/checkout_bg.jpg'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
export default () => {
  const {products, basketStateArray} = useStateValue()
  const [{basket}, dispatch] = basketStateArray; 
  let displayArray = [];
  for (let [productId, quantity] of basket){
    displayArray.push(<CheckoutProduct key={productId} product={products[productId]} quantity={quantity} />)
  }

  return (
  <div className="checkout">
    <img src={CheckoutImage} alt="checkout"/>
    <div className="checkout__layout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Shopping Cart</h2>
          {displayArray}
      </div>
      
      <Subtotal className="checkout__right"/>
    </div>
      
   
  </div>
  )
}
