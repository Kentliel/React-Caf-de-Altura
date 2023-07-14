import React, { createContext, useState } from 'react';

export const CartContextCoffees = createContext(null)


const ContextCarCoffees = ({ children }) => {
    const [cartCoffees, setCartCoffees] = useState([])
    const [cartTotalCoffees, setCartTotalCoffees] = useState();
    const [showDelete, setShowDelete] = useState(true);

    const totalCoffeesInCart = () => {
        return cartCoffees.length
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
        if (cartCoffees == null || !isCoffeRepeated(coffeeInfo)) {
            setCartCoffees([...cartCoffees, coffeeInfo]);
        }
    }



    const sumPriceCoffee = () => {
        let total = 0;
        cartCoffees.map((coffee) => total += coffee.price * coffee.bags)
        return total

    }




    const [typeShipment, setTypeShipment] = useState("0")

    const onChangeValue = e => {
        setTypeShipment(e.target.value)
    }

    


    return (

        <CartContextCoffees.Provider value={{ showDelete, setShowDelete, typeShipment, setTypeShipment, onChangeValue, setCartTotalCoffees, cartTotalCoffees, sumPriceCoffee, cartCoffees, totalCoffeesInCart, setCartCoffees, addToCartNoRepeat }}>
            {children}
        </CartContextCoffees.Provider>

    )
}

export default ContextCarCoffees