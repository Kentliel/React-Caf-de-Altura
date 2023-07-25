import React from 'react'
import { Link } from 'react-router-dom'

const HeroPlantaTaza = () => {
    
    return (
        <div className='topMidPag flex flex-row items-center justify-center gap-6 p-10'>
            <section className="midText flex flex-col items-start text-justify ">
                <h3 className="Pre_Tittle text-lg leading-6 text-green-800 font-semibold gap-4 self-stretch mb-4">De la planta a tu taza</h3>
                <h1 className="titleMid text-black text-4xl leading-10 font-semibold mb-4">El mejor café del mundo, ahora en tu casa.</h1>
                <p className="textMid text-black font-normal text-sm leading-4 mb-4">Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café
                    y que puedas viajar desde la comodidad de tu hogar.</p>
                <div className="bottons flex justify-around gap-2">
                    <Link to="/Origenes" className="bottonMid bg-stone-950 text-white px-[24px] py-[12px] rounded font-semibold text-sm leading-4 text-center">Descubrir orígenes</Link>
                    <Link to="/Tienda" className="bottonMidGre px-[24px] py-[12px] bg-green-800 text-white rounded font-semibold text-sm leading-4 text-center">Comprar café</Link>
                </div>
            </section>
            <section className="midImg ">
                <div><img className='h-[390px] w-[588px]' src="https://i.imgur.com/caiQMwm.png" alt='manoCafe'/></div>
            </section>
        </div>
    )
}

export default HeroPlantaTaza