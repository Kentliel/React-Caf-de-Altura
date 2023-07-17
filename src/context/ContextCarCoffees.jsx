import React, { createContext, useState } from 'react';

export const CartContextCoffees = createContext(null)


const ContextCarCoffees = ({ children }) => {
    const [cartCoffees, setCartCoffees] = useState([])
    const [cartTotalCoffees, setCartTotalCoffees] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [envio, setEnvio] = useState('0')
    const [showDelete, setShowDelete] = useState(true);


    
    
    const totalCoffeesInCart = () => {
        console.log(typeof cartCoffees);
        return cartCoffees
    }

    
    const isCoffeRepeated = (coffeeInfo) => {
        for (const coffee of cartCoffees) {
            if (coffee.name === coffeeInfo.name) {
                return true;
            }
            
        }
        return false;
    }


    const addToCartNoRepeat = (coffeeInfo) => {
        setCartTotalCoffees([...cartTotalCoffees, coffeeInfo]);
        if (!isCoffeRepeated(coffeeInfo)) {
        }
    }



    return (
        <div>
        <CartContextCoffees.Provider value={{ showDelete, setShowDelete,  setCartTotalCoffees, cartTotalCoffees, cartCoffees, totalCoffeesInCart, setCartCoffees, addToCartNoRepeat, envio, setEnvio, subTotal, setSubTotal }}>
            {children}
        </CartContextCoffees.Provider>
        </div>
    )
}

export default ContextCarCoffees