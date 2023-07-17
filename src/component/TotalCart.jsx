import React from 'react'
import { useContext } from 'react'
import { CartContextCoffees } from '../context/ContextCarCoffees';
import { Link } from 'react-router-dom';



const TotalCart = ({ subTotal }) => {
  const { cartTotalCoffees } = useContext(CartContextCoffees);
  const { envio } = useContext(CartContextCoffees)



  const precioTotalProductos = () => {
    let precioTotalProductos = cartTotalCoffees.reduce((acc, e) => {
      acc += e.price;
      return acc;
    }, 0);
    return precioTotalProductos;
  };


  return (
    <div>
      <div className="bg-[#f7f5f3] p-6 h-[fit-content] rounded">
        <h3 className="text-lg font-semibold leading-6">Total del carrito</h3>
        <hr className='my-2' />
        <div>
          <div className="totCestaPrecios flex justify-between">
            <p className='mb-2'>SUBTOTAL</p>
            <p className="totCestaSubtotal leading-4 text-sm font-semibold mb-2">{subTotal} ,00 €</p>
          </div>
          <div className="totCestaPrecios flex justify-between">
            <p className='mb-2'>ENVÍO</p>
            <p className="envioPrice leading-4 text-sm font-semibold mb-2">{envio === '0' ? 'GRATIS' : envio + ' ,00 €'}</p>
          </div>
        </div>
        <hr />
        <div>
          <div className="totCestaPrecios flex justify-between">
            <p className="text-sm font-semibold leading-4 mb-2">TOTAL</p>
            <p className="totCestaTotal leading-4 text-sm font-semibold mb-2">{precioTotalProductos() + Number(envio)} ,00 €</p>
          </div>
          <div className="totCestaPrecios flex justify-between">
            <p className='mb-2'></p>
            <p className="ivaDetail text-xs text-[#515051] mb-2">Incluye <span className="ivaTotal">{((precioTotalProductos(cartTotalCoffees) + parseInt(envio)) * 0.04).toFixed(2)} €</span> de IVA</p>
          </div>
        </div>
        <div className="totalCestaButtons mt-4 flex flex-row gap-4 items-center">
          <Link to="/Checkout" className='bg-custom-green text-white px-6 py-3 rounded text-sm font-semibold leading-4'>Ir a Checkout</Link>
          <Link to="/Tienda" className='px-6 py-3 rounded text-custom-green text-sm font-semibold leading-4'>Seguir Comprando</Link>
        </div>
      </div>
    </div>
  )
  
}

export default TotalCart