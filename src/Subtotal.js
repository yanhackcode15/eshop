import React from 'react'
import './Subtotal.css'
import {useStateValue} from './StateProvider'
import numeral from 'numeral';

export default function() {
  const [{basket}, dispatch] = useStateValue();
  const priceArray=basket.map(item=>item.price);
  const total= priceArray.reduce((sum, itemPrice)=>(itemPrice+sum),0);

  var dollarTotal = numeral(total).format('$0.00');

  return (
    <div className="subtotal">
        <p>
            Subtotal ({basket.length} items): <strong>{dollarTotal}</strong>
        </p>
        <button className='subtotal__checkout'>Checkout</button>
    </div>
  )
}
