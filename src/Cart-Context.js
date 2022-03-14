import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();



const CartProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=> {
        CalculateTotal()
    },
    [cart])

    
    const addToCart = (product)=> {
        setCart((item)=> [...item, product])
    }

    const CalculateTotal = ()=> {
        let total = 0;
        cart.map(item=> total+=item.price)
        setTotalPrice(total)
    }

    const cartValue = {
        productCount: count,
        increaseProductCount: setCount,
        cart: cart,
        addToCart: addToCart,
        totalPrice: totalPrice
    }
    return(
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)
export {useCart, CartProvider}