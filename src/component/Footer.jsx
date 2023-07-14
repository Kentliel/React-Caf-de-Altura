import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div>
            <article className="beforeTheFooter flex bg-stone-900">
                <section className="titleAndEndContact flex flex-col text-white gap-4 mt-[28.61px] mb-[37.73px] text-start ml-10">
                    <Link to="/" className='font-normal text-2xl w-[186px] h-[36px] leading-9 text-white opacity-80 flex gap-[7.33px] items-center justify-center'>cafedealtura.com<img src="https://i.imgur.com/bc4UEus.png" alt='tasaCafeAltura' className="imgCoffeEnd" /></Link>
                    <p className='text-lg leading-6'><b>Te ayudamos en</b></p>

                    <button className="buttonTelf bg-gray-500 px-6 py-3 flex gap-2 items-center justify-center text-center text-white text-sm leading-4 font-bold rounded-md"><img src="https://i.imgur.com/phRdjkM.png" alt='telefPequeño' className="imgTelf" />+34 919 49 05 18</button>
                    <button className="emailSupport bg-gray-500 px-6 py-3 flex gap-2 items-center justify-center text-center text-white text-sm leading-4 font-bold rounded-md"><img src="https://i.imgur.com/UNSlEp5.png" alt='mailWhite' />support@example.com</button>
                </section>
                <section className="titleEnd flex gap-32 items-center justify-center ml-[446px] mt-[83.21px] mb-[43.12px]">
                    <div className="contactAtTheEnd flex flex-col gap-4 items-start justify-center text-white">
                        <Link to="/Tienda">Tienda</Link>
                        <Link to="/Suscripcion">Suscripción</Link>
                        <Link to="/ParaEmpresas">Para empresas</Link>
                        <Link to="/SobreNosotros">Sobre nosotros</Link>
                        <Link to="/Contacto">Contacto</Link>
                    </div>
                    <div className="policiesAndConditions flex flex-col gap-4 items-start justify-center mb-[63.61px] text-white">
                        <Link to="/Privacidad">Política de privacidad</Link>
                        <Link to="/Cookies">Política de cookies</Link>
                        <Link to="/Condiciones">Términos y condiciones</Link>
                    </div>
                </section>
            </article>


        </div>
    )
}

export default Footer