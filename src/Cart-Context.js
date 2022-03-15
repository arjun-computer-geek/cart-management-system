import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();


const CartProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const CalculateTotal = ()=> {
        let total = 0;
        cart.map(item=> {
            total = (total + item.price) * item.qty;
            return total
        })
        setTotalPrice(total)
    }

    useEffect(()=> {
        CalculateTotal()
    },
    [cart, CalculateTotal])

    
    const addToCart = (product)=> {
        
        if(!cart.find(ele => ele.id === product.id))
        setCart((item)=> [...item, {...product, qty: 1}])
        else {
            cart.map((item, i) => {
                if(item.id === product.id){
                    cart[i].qty +=1;
                }
            })
        }
        
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