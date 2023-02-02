import React from "react"
import './CheckoutProduct.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useStateValue } from "./StateProvider";

export default function CheckoutProduct({product, quantity}){
  //sync quanitty state with the basket state

  const [quantityState, setQuantity] = React.useState(quantity);
  const {products, basketStateArray} = useStateValue()
  const [{basket}, dispatch] = basketStateArray; 
  const handleChange = (event) => {
    setQuantity(event.target.value);
    dispatch({
      type: "UPDATE_BASKET",
      item: {[product.id]: quantityState}
    })
  
  };

  if(!product){
    return (<div>Loading...</div>)
  }
  const {price, title, rating, image} = product;
  

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image}/>
        <div className="checkoutProduct__info">
            <small className="checkoutProduct__title">{title}</small>
            <strong className="checkoutProduct__price">{price}</strong>
            <div className="checkoutProduct__rating">
                {Array(Math.round(rating.rate)).fill().map( (value, index)=><span key={index}>⭐</span> )}
            </div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantityState}
                label="Quatity"
                onChange={handleChange}
              >
                {Array(11).fill().map((value,index)=>(<MenuItem key={index} value={index}>{index}</MenuItem>))}
                
              </Select>
            </FormControl>
        </div>
        
    </div>
  )
}
