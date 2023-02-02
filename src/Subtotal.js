import React from 'react'
import './Subtotal.css'
import {basketItemCount, useStateValue} from './StateProvider'
import numeral from 'numeral';

export default function() {
  const {products, basketStateArray} = useStateValue() //provider value is an ojbect with two state variables, products and basket, basket uses reducer hook,
  const [{basket}, dispatch] = basketStateArray; 
  let total = 0;
  for (let [productId, quantity] of basket) {
    total+=products[productId].price * quantity
  }
 
  var dollarTotal = numeral(total).format('$0.00');

  return (
    <div className="subtotal">
        <p>
            Subtotal ({basketItemCount(basket)} items): <strong>{dollarTotal}</strong>
        </p>
        <button className='subtotal__checkout'>Checkout</button>
    </div>
  )
}
