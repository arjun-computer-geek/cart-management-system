import { useCart } from './Cart-Context'

const Cart = () => {
  const {productCount, cart, totalPrice} = useCart();

  return (
    <>
    <h1>Cart:{productCount}</h1>
    <div className='card-container'>{cart.map((item, index) => {
      
      return(
        <div key={index} className='card'>
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <h2>Qty: {item.qty}</h2>
        </div>
      )
    })}</div>
    <h3>Price:{totalPrice}</h3>
    </>
  )
}

export default Cart