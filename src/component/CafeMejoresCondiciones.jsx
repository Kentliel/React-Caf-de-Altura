import React from 'react'

const CafeMejoresCondiciones = () => {

  return (
    <div className="bg-[url('https://i.imgur.com/OTXEdIB.png')] bg-center bg-no-repeat bg-cover justify-items-center">
        <section className="titleCofee font-medium text-2xl leading-7 text-white mb-6 pt-12 text-center font-semibold">
            <h2>Café con las mejores condiciones</h2>
        </section>
        <section className="sendConditions flex flex-row justify-evenly gap-6 px-14 py-12" >
            <a className="shippingTable flex flex-col justify-center items-center p-6 gap-4 bg-white border-solid shadow rounded-lg w-80 text-justify">
                <img src="https://i.imgur.com/bI8wOCp.png" alt='tablaChulito'/>
                <h3 className='font-semibold'>Recibe tu pedido sin preocuparte</h3>
                <p>Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás
                    sin tu taza de la mañana. </p>
            </a>
            <a className="shippingCar flex flex-col justify-center items-center p-6 gap-4 bg-white border-solid shadow rounded-lg w-80 text-justify">
                <img src="https://i.imgur.com/IRraBi3.png" alt='camionEnvio'/>
                <h3 className='font-semibold'>Envío en 24/48h</h3>
                <p>Pide tu café antes de las 12h y lo recibirás al día siguiente.</p>
            </a>
            <a className="giftDiscounts flex flex-col justify-center items-center p-6 gap-4 bg-white border-solid shadow rounded-lg w-80 text-justify">
                <img src="https://i.imgur.com/efFQzXq.png" alt='cajaRegalo'/>
                <h3 className='font-semibold'>Descuentos y beneficios</h3>
                <p>Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a
                    nosotros.</p>
            </a>
        </section>
    </div>
  )
}

export default CafeMejoresCondiciones