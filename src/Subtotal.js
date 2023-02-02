import React from 'react'
import './Subtotal.css'
import {useStateValue} from './StateProvider'
import numeral from 'numeral';

export default function() {
  const {products, basketStateArray} = useStateValue() //provider value is an ojbect with two state variables, products and basket, basket uses reducer hook,
  const [{basket}, dispatch] = basketStateArray; 
  // const priceArray=basket.map(item=>item.price);
  // const total= priceArray.reduce((sum, itemPrice)=>(itemPrice+sum),0);

  // var dollarTotal = numeral(total).format('$0.00');

  return (
    <div className="subtotal">
        <p>
            {/* Subtotal ({basket.length} items): <strong>{dollarTotal}</strong> */}
        </p>
        <button className='subtotal__checkout'>Checkout</button>
    </div>
  )
}
