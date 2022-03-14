import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './Cart-Context'
import products from './Productdata'
import "./Products.css"

const Product = () => {
  const {increaseProductCount, productCount, addToCart} = useCart();
  return (
      <>
        <div className='card-container'>
        {products.map((product) => <div className='card'>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <button onClick={()=> {addToCart(product); increaseProductCount((count)=> count+1)}}>Add to cart</button>
        </div>)}
        </div>
        <Link to='/cart'>go to cart:{productCount}</Link>
      </>
  )
}

export default Product