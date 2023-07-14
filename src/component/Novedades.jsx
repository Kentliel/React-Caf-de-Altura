import React, { useContext } from 'react';
import { AllCoffees } from '../context/ContextCoffees';

import { CartContextCoffees } from '../context/ContextCarCoffees';
import { Link } from 'react-router-dom';


const Novedades = () => {
    const { totalCoffees } = useContext(AllCoffees);
    const { addToCartNoRepeat } = useContext(CartContextCoffees)




    return (
        <div>
            <article className="news flex flex-col items-center p-10 gap-10">
                <section className="tittleNovedades font-medium text-2xl leading-7 text-green-900">
                    <h2>Novedades</h2>
                </section>
                <section className="containerCoffees  justify-around grid grid-cols-4 text-center items-center justify-center rounded-lg p-6 gap-6 w-full ">
                    {/* aqui van los cafes */}
                    {totalCoffees?.slice(0, 4).map((coffee, index) => {

                        return (
                            <div id={index} className="coffeCart gap-4 hover:bg-stone-200 box-border flex flex-col justify-center  items-center rounded-lg p-2 ">
                                <img src={coffee.image} alt={coffee.name} />
                                <h3 className='font-semibold mb-3'>{coffee.name}</h3>
                                <p className='mb-6'>{coffee.price},00 €</p>
                                <button onClick={() => addToCartNoRepeat({ name: coffee.name, image: coffee.image, price: coffee.price, bags: 1 })} className="add box-border rounded bg-custom-green opacity-50 w-fit p-1 text-white items-center hover:opacity-100 ">Añadir</button>
                            </div>
                        )
                    })}
                </section>
                <Link to="/Tienda">
                    <h4 className="seeEverything flex gap-2.5 text-black underline font-semibold w-full h-4 text-sm leading-4">Ver todos<img src="https://i.imgur.com/VPzrzQp.png" alt='imgFlecha' /></h4>
                </Link>
            </article >
        </div >
    )
}

export default Novedades