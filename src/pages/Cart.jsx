import React from 'react'
import Navbar from '../component/Navbar'
import ShoppingCart from '../component/ShoppingCart'
import DerechosReservados from '../component/DerechosReservados'
import TotalCart from '../component/TotalCart'
import { useContext } from 'react'
import { CartContextCoffees } from '../context/ContextCarCoffees'
import { useState } from 'react'

const Cart = () => {
  const { cartTotalCoffees } = useContext(CartContextCoffees)
  const [envio, setEnvio] = useState('0')

  const sumaCantProductos = (cartTotalCoffees) => {
    return cartTotalCoffees.reduce((acc, e) => {
      acc += e.quantity;
      return acc;
    }, 0);
  };

  const updateEnvio = (e) => setEnvio(e.target.value)

  return (
    <div>
      <Navbar />
      <section className="mb-12">
        <h2 className="text-center text-[#2a5b45] text-2xl my-5">Cesta (<span>{sumaCantProductos(cartTotalCoffees)}</span>)</h2>

        <div className="flex justify-between px-12">
          <div className="w-[60%]">
            <div className="prodEnvio">
              <h3>Productos</h3>
              {
                (cartTotalCoffees.length === 0) ? <h2 className='my-4 p-8 bg-[#f4f4f4]'>NO HAY PRODUCTOS EN LA CESTA</h2>
                  :
                  cartTotalCoffees.map((el) => {
                    return (
                      <ShoppingCart brand={el.name} img={el.img_url} price={el.price} id={el._id} quantity={el.quantity} key={el._id} />
                    )
                  })
              }
            </div>

            <div className=" mt-4">
              <h3>Seleccionar envío</h3>
              <div className=" flex justify-between py-4">
                <div className=" flex">
                  <input onChange={updateEnvio} className="my-2 mr-5 ml-2 " type="radio" defaultChecked name="demoraEnvio" value={0} />
                  <div className="tipoEnvio">
                    <p>Envío 5-7 días</p>
                    <p>Opción estándar sin seguimiento</p>
                  </div>
                </div>
                <p className="font-bold">GRATIS</p>
              </div>
              <hr />
              <div className=" flex justify-between py-4">
                <div className=" flex">
                  <input onChange={updateEnvio} className=" my-2 mr-5 ml-2" type="radio" name="demoraEnvio" value={9} />
                  <div>
                    <p>Envío urgente 24h </p>
                    <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes <br /> de las 13:00).</p>
                  </div>
                </div>
                <p className="font-bold">9,00 €</p>
              </div>
            </div>
          </div>



          <TotalCart valueEnvio={envio} />




        </div>
      </section>



      <DerechosReservados />
    </div>
  )
}

export default Cart