import React from 'react'
import './Subtotal.css'
import {useStateValue} from './StateProvider'
export default function() {
  const [{basket}, dispatch] = useStateValue();
  const priceArray=basket.map(item=>item.price);
  const total= priceArray.reduce((sum, itemPrice)=>(itemPrice+sum),0);
  return (
    <div className="subtotal">
        <p>
            Subtotal ({basket.length} items): <strong>{total}</strong>

        </p>
    </div>
  )
}
