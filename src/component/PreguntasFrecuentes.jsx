import React, { useState } from 'react'

const PreguntasFrecuentes = () => {
   

    return (
        <div>
            <article className="questions bg-green-900 px-12 py-86 gap-6 flex flex-col items-center">
                <section className="frequentQuestions text-2xl leading-7 font-medium text-white gap-10">
                    <h2 className='mt-12'>Preguntas frecuentes</h2>
                </section>
                <section className="customerQuestions mt-10 mb-7 text-justify">
                    <button className="imgDesplegador bg-white text-black p-5 w-full text-left outline-0 text-base transition-[0.4s] rounded active:hover:bg-white after:content-[url('https://i.imgur.com/YCZh0gC.png')] after:text-xs after:text-gray-600 after:float-right after:ml-1 active:after:content-[url('https://i.imgur.com/wLS1gNE.png')] show opacity-100 max-h-[500px]">
                        <h3 className='flex flex-row w-full justify-between text-black ::after '>¿Cómo hago el pedido?</h3>
                    </button>
                    <div className="howDoIOrder flex flex-col items-center p-6 rounded bg-white mb-4 px-0 py-4 max-h-0 overflow-hidden ease-in-out-[0.6s] opacity-0 mt-[-10px] ">
                        <hr width="100%" size="1" align="center" color="Gray" />
                        <p> El café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada
                            cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.</p>
                    </div>
                    <button className="imgDesplegador bg-white text-black p-5 w-full text-left outline-0 text-base transition-[0.4s] rounded active:hover:bg-white after:content-[url('https://i.imgur.com/YCZh0gC.png')] after:text-xs after:text-gray-600 after:float-right after:ml-1 active:after:content-[url('https://i.imgur.com/wLS1gNE.png')]">
                        <h3 className='flex flex-row w-full justify-between text-black '>¿Por qué los precios son tan bajos?</h3>
                    </button>
                    <div className="lowPrice flex flex-col items-center p-6 rounded bg-white mb-4 px-0 py-4 max-h-0 overflow-hidden ease-in-out-[0.6s] opacity-0 mt-[-10px]">
                        <hr width="100%" size="1" align="center" color="Gray" />
                        <p> Constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos
                            ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
                            intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de
                            café recibe el mayor beneficio posible.</p>
                    </div>
                    <button className="imgDesplegador bg-white text-black p-5 w-full text-left outline-0 text-base transition-[0.4s] rounded active:hover:bg-white after:content-[url('https://i.imgur.com/YCZh0gC.png')] after:text-xs after:text-gray-600 after:float-right after:ml-1 active:after:content-[url('https://i.imgur.com/wLS1gNE.png')]">
                        <h3 className='flex flex-row w-full justify-between text-black '>¿Es posible enviar café a mi oficina?</h3>
                    </button>
                    <div className="sendToMyOffice flex flex-col items-center p-6 rounded bg-white mb-4 px-0 py-4 max-h-0 overflow-hidden ease-in-out-[0.6s] opacity-0 mt-[-10px]">
                        <hr width="100%" size="1" align="center" color="Gray" />
                        <p>Si todo esta explicado en el apartado de envios a la hora de hacer el pedido</p>
                    </div>
                </section>
                <section className="weSolveYourQuestions flex flex-row text-center justify-center gap-2.5 text-white underline w-full h-4 text-sm leading-4">
                    <a href="#">
                        <h4 className='flex flex-row gap-4 '>Resolvemos tus dudas<img src="https://i.imgur.com/pR4N23R.png" alt='flechaBlanca' /></h4>
                    </a>
                </section>
            </article>

        </div>
    )
}

export default PreguntasFrecuentes