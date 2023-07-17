import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContextCoffees } from '../context/ContextCarCoffees';

const CartSuccess = () => {
  const { cartTotalCoffees, envio, setSubTotal } = useContext(CartContextCoffees);
  const [filterCoffees, setFilterCoffees] = useState([])
  const [mapCoffeess, setMapCoffees] = useState([])
  
  
  let priceResumen = filterCoffees?.length * mapCoffeess.price;
  useEffect(() => {
    let a = cartTotalCoffees?.filter((coffe) => coffe.name === mapCoffeess.name);
    setFilterCoffees(a)
    
    const sum = cartTotalCoffees.reduce((acc, coffee) => acc + coffee.price, 0)
    
    setSubTotal(sum)
    
    
  }, [cartTotalCoffees]);
  
  const precioTotalProductos = () => {
    let precioTotalProductos = cartTotalCoffees.reduce((acc, e) => {
      acc += e.price;
      return acc;
    }, 0);
    return precioTotalProductos;
    
  };

  useEffect(() =>{
    cartTotalCoffees?.filter((coffee, index, self) => { return index === self.findIndex(c => c.name === coffee.name) }).map((coffee) => {
      return (
        setMapCoffees(coffee)
      )
  
    })
  }, cartTotalCoffees)
  
  
  return (
    <div className='w-full h-[391.3px] mb-[346.6px] '>
      <div className="bg-[#f7f5f3] p-6 h-[fit-content] p-6 rounded">
        <h3 className="text-lg font-semibold leading-6">Tu Pedido</h3>
        <hr className='my-2' />
        <div className="resumenCesta flex items-center justify-between py-4">
          <div className="flex">
            <div id={mapCoffeess.id} className="flex items-center">
              <p className="rounded-[50%] bg-[#0000000e] text-xs py-2 px-3">{filterCoffees?.length}</p>
            </div>

            <div className="productDetail flex">
              <img className='w-[55px] mr-4' src={mapCoffeess.image} alt={mapCoffeess.brand} />
              <div>
                <p className="bagsNames font-bold text-base">{mapCoffeess.brand}</p>
                <p>Paquete de café, 250 gr</p>
              </div>
            </div>
          </div>
          <p className="priceResumen"><span className="priceResumenSpan font-bold">{priceResumen},00 €</span></p>
        </div>
        <hr />
        <div>
          <div className="totCestaPrecios flex justify-between">
            <p className='mb-2'>SUBTOTAL</p>
            <p className="totCestaSubtotal leading-4 text-sm font-semibold mb-2">{precioTotalProductos()} ,00 €</p>
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
        <div className="totalCestaButtons mt-4 flex items-center justify-center ">
          <Link to="/Tienda" className='px-6 py-3 bg-custom-green gap-2 text-white rounded text-sm font-semibold leading-4'>Volver a la tienda</Link>
        </div>
      </div>
    </div>
  )
}

export default CartSuccess