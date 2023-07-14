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
                            <div id={index} className="coffeCart gap-4 hover:bg-stone-200 box-border rounded-lg p-2 ">
                                <img src={coffee.image} alt={coffee.name} />
                                <h3 className='font-semibold'>{coffee.name}</h3>
                                <p>{coffee.price},00 €</p>
                                <button onClick={() => addToCartNoRepeat({ name: coffee.name, image: coffee.image, price: coffee.price, bags: 1 })} className="add box-border rounded bg-green-400 p-1 text-white items-center hover:bg-green-900 ">Añadir</button>
                            </div>
                        )
                    })}
                </section>
                <Link to="/Tienda">
                    <h4 className="seeEverything flex gap-2.5 text-black underline w-full h-4 text-sm leading-4">Ver todos<img src="https://i.imgur.com/VPzrzQp.png" alt='imgFlecha' /></h4>
                </Link>
            </article >
        </div >
    )
}

export default Novedades