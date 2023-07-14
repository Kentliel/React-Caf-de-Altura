import React from 'react'
import { Link } from 'react-router-dom'

const FeatureSection = () => {

    return (
        <div className='flex items-center justify-center align-stretch'>
            <article className="coffeeShop flex flex-row justify-between text-justify items-center gap-6 m-10 w-[1200px]">
                <section className="tryOurCoffee flex flex-col w-[457px] ">
                    <h2 className='text-custom-green text-2xl leading-7 mb-4 font-medium'>Pruébalo en nuestro coffee shop</h2>
                    <p className='mb-5 leading-4 text-sm font-normal'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                    <Link to="/ComoLlegar">
                        <h4 className='flex flex-row gap-2.5 text-black underline w-full text-sm leading-4 font-semibold'>Cómo llegar<img src="https://i.imgur.com/VPzrzQp.png" alt='flechaNegra' /></h4>
                    </Link>
                </section>
                <section className="imgCoffeePot">
                    <img src="https://i.imgur.com/vbEGrGk.png" alt='Cafeteria' />
                </section>
            </article>

        </div>
    )
}

export default FeatureSection