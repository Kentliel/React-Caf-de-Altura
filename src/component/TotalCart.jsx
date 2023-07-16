import React from 'react'
import { useContext } from 'react'
import {CartContextCoffees} from '../context/ContextCarCoffees';
import Button from './Buttons'



const TotalCart = ({valueEnvio, subTotal}) => {
  const { cartTotalCoffees } = useContext(CartContextCoffees);

 

  const precioTotalProductos = () => {
    let precioTotalProductos = cartTotalCoffees.reduce((acc, e) => {
      acc +=  e.price;
      return acc;
    }, 0);
    return precioTotalProductos;
  };


  return (
    <div>
      <div className="bg-[#f7f5f3] p-6 h-[fit-content]">
        <h3 className="negritas">Total del carrito</h3>
        <hr className='my-2' />
        <div>
          <div className="totCestaPrecios flex justify-between">
            <p className='mb-2'>SUBTOTAL</p>
            <p className="totCestaSubtotal negritas mb-2">{subTotal} ,00 €</p>
          </div>
          <div className="totCestaPrecios flex justify-between">
            <p className='mb-2'>ENVÍO</p>
            <p className="envioPrice negritas mb-2">{valueEnvio === '0' ? 'GRATIS' : valueEnvio + ' ,00 €'}</p>
          </div>
        </div>
        <hr />
        <div>
          <div className="totCestaPrecios flex justify-between">
            <p className="negritas mb-2">TOTAL</p>
            <p className="totCestaTotal negritas mb-2">{precioTotalProductos() + Number(valueEnvio)} ,00 €</p>
          </div>
          <div className="totCestaPrecios flex justify-between">
            <p className='mb-2'></p>
            <p className="ivaDetail text-xs text-[#515051] mb-2">Incluye <span className="ivaTotal">{((precioTotalProductos(cartTotalCoffees) + parseInt(valueEnvio)) * 0.04).toFixed(2)} €</span> de IVA</p>
          </div>
        </div>
        <div className="totalCestaButtons mt-4">
          <button className="btnCheckout">Ir a checkout</button>
          <Button url={'/Shop'} bgColor={`bg-[#2a5b45]`} color={'text-white'} content={'Seguir comprando'} />
        </div>
      </div>
    </div>
  )
}

export default TotalCart