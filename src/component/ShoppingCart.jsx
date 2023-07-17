import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContextCoffees } from '../context/ContextCarCoffees'



const ShoppingCart = ({ coffee, subTotal, setSubTotal }) => {
    const { setCartTotalCoffees, cartTotalCoffees } = useContext(CartContextCoffees)
    const [filterCoffees, setFilterCoffees] = useState([])

    let priceResumen = filterCoffees?.length * coffee.price;
    useEffect(() => {
        let a = cartTotalCoffees?.filter((coffe) => coffe.name === coffee.name);
        setFilterCoffees(a)

        const sum = cartTotalCoffees.reduce((acc, coffee) => acc + coffee.price, 0)

        setSubTotal(sum)


    }, [cartTotalCoffees]);

    function sumar() {
        setCartTotalCoffees(prev => {
            const updatedCart = [...prev, coffee];
            console.log(updatedCart);


            return [...updatedCart];
        });
    }

    function restar() {
        setCartTotalCoffees(prev => {
            const updatedCart = [...prev];
            const index = updatedCart.findIndex(coffeeItem => coffeeItem.name === coffee.name);
                updatedCart.splice(index, 1);

            return [...updatedCart];
        });
    }



    return (
        <div>
            <div className="resumenCesta flex items-center justify-between py-4">
                <div className="flex">
                    <div id={coffee.id} className="flex items-center">
                        <p onClick={restar} className="btn py-2 px-3 font-bold text-2xl cursor-pointer">-</p>
                        <p className="rounded-[50%] bg-[#0000000e] text-xs py-2 px-3">{filterCoffees?.length}</p>
                        <p onClick={sumar} className="btn py-2 px-3 font-bold text-2xl cursor-pointer">+</p>
                    </div>

                    <div className="productDetail flex">
                        <img className='w-[55px] mr-4' src={coffee.image} alt={coffee.brand} />
                        <div>
                            <p className="bagsNames font-bold text-base">{coffee.brand}</p>
                            <p>Paquete de café, 250 gr</p>
                        </div>
                    </div>
                </div>
                <p className="priceResumen"><span className="priceResumenSpan font-bold">{priceResumen},00 €</span></p>
            </div>
            <hr />
        </div>
    )
}

export default ShoppingCart