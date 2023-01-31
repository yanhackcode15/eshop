import React from 'react'
import homeImage from './image/home_page_image.jpg'
import './Home.css';
import Product from './Product'
import {useStateValue} from './StateProvider'

export default function Home() {
  const [products, setProducts] = React.useState([])
  const [state, dispatch] = useStateValue();
  React.useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }, [])
  
  return (
    <div className="home">
      <div className="home__container">
        <img className="homeImage" src={homeImage}/>
        <div className="home__row">
            <Product key="product0" product={products[0]}/>                
            <Product key="product1" product={products[1]}/>
        </div>
        <div className="home__row">
            <Product key="product2" product={products[2]}/>                
            <Product key="product3" product={products[3]}/>
            <Product key="product4" product={products[4]}/>
        </div>
        <div className="home__row">
            <Product key="product5" product={products[5]}/>                
        </div>
      </div>
    </div>
  )
}
