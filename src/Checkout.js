
import React from 'react'
import './Checkout.css'
import CheckoutImage from './image/checkout_bg.jpg'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
export default () => {
  const [{basket}, dispatch] = useStateValue();
  return (
  <div className="checkout">
    <img src={CheckoutImage} alt="checkout"/>
    <div className="checkout__layout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Shopping Cart</h2>
        {basket.map(item=><CheckoutProduct product={item}/>)}
      </div>
      
      <Subtotal className="checkout__right"/>
    </div>
      
   
  </div>
  )
}
