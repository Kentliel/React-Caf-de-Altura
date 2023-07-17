import React from 'react'
import Navbar from '../component/Navbar'
import MetodoDePago from '../component/MetodoDePago'
import DireccionDeEnvio from '../component/DireccionDeEnvio'
import CarritoTotalPagar from '../component/CarritoTotalPagar'
import { useContext } from 'react'
import { CartContextCoffees } from '../context/ContextCarCoffees'
import { useState } from 'react'

const Checkout = () => {
  const { cartTotalCoffees } = useContext(CartContextCoffees)
  const [envio, setEnvio] = useState('0')
  const [subTotal, setSubTotal] = useState(0);

  console.log(subTotal);
  return (
    <div>
      <Navbar />
      <article className='flex flex-col gap-6 items-center p-10'>
        <h2 className='text-2xl text-custom-green font-medium leading-7'>Checkout</h2>
        <section className='flex '>
          <div className=''>
            <MetodoDePago />
            <DireccionDeEnvio />
          </div>
          <CarritoTotalPagar valueEnvio={envio} subTotal={subTotal} />
        </section>
      </article>
    </div>
  )
}

export default Checkout