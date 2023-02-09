import React from 'react'
import homeImage from './image/home_page_image.jpg'
import './Home.css';
import Product from './Product.mjs'
import {useStateValue} from './StateProvider.mjs'

export default function Home() {
  // const [products, setProducts] = React.useState([])
  // const [state, dispatch] = useStateValue();
  // React.useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products?limit=10')
  //           .then(res=>res.json())
  //           .then(json=>setProducts(json))
  // }, [])
  const {products, basketStateArray} = useStateValue()
  const productsArray =Object.keys(products).map(productId=>products[productId])

  return (
    <div className="home">
      <div className="home__container">
        <img className="homeImage" src={homeImage}/>
        <div className="home__row">
            <Product key="product0" product={productsArray[0]}/>                
            <Product key="product1" product={productsArray[1]}/>
        </div>
        <div className="home__row">
            <Product key="product2" product={productsArray[2]}/>                
            <Product key="product3" product={productsArray[3]}/>
            <Product key="product4" product={productsArray[4]}/>
        </div>
        <div className="home__row">
            <Product key="product5" product={productsArray[5]}/>                
        </div>
      </div>
    </div>
  )
}
