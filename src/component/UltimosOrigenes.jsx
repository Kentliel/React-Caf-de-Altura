import React from 'react'
import { useContext } from 'react'
import { AllCoffees } from '../context/ContextCoffees'
import { CartContextCoffees } from '../context/ContextCarCoffees'


const UltimosOrigenes = () => {
    const { totalCoffees } = useContext(AllCoffees);
    const {  addToCartNoRepeat } = useContext(CartContextCoffees)

    return (
        <div>
            <article className="news flex flex-col items-center p-10 gap-10">
                <section className="tittleNovedades font-medium text-2xl leading-7 text-green-900">
                    <h2>Últimos Orígenes</h2>
                </section>
                <section className="containerCoffees  justify-around grid grid-cols-4 text-center items-center justify-center rounded-lg p-6 gap-6 w-full ">
                    {/* aqui van los cafes */}
                    {totalCoffees.map((coffee, index) => {

                        return (
                            <div id={index} className="coffeCart gap-4 hover:bg-stone-200 box-border flex flex-col justify-center  items-center rounded-lg p-2 ">
                                <img src={coffee.image} alt={coffee.name} />
                                <h3 className='font-semibold'>{coffee.name}</h3>
                                <p>{coffee.price},00 €</p>
                                <button onClick={() => addToCartNoRepeat({ name: coffee.name, image: coffee.image, price: coffee.price, bags: 1 })} className="add box-border rounded bg-custom-green opacity-50 w-fit p-1 text-white items-center hover:opacity-100 ">Añadir</button>
                            </div>
                        )
                    })}
                </section>
            </article>

        </div>
    )
}

export default UltimosOrigenes