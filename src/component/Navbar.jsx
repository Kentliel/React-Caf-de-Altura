import React from 'react'
import { Link } from 'react-router-dom'
import { CartContextCoffees } from '../context/ContextCarCoffees'
import { useContext } from 'react'

const Navbar = () => {

  const { cartTotalCoffees } = useContext(CartContextCoffees)

  return (
    <div className='navbarCoffee flex flex-row justify-around items-center gap-7.33px bg-stone-900 px-14 py-3'>
      <Link to="/" className='text-2xl text-gray-200 font-bold justify-around items-center flex gap-2 mr-[27px]'>cafedealtura.com<img src='https://i.imgur.com/bc4UEus.png' alt='tazaBlanca' /></Link>
      <Link to='/Tienda' className='text-white p-2.5 hover:bg-stone-800 rounded-lg gap-2 text-sm font-semibold leading-4'>Tienda</Link>
      <Link to='/Suscripcion' className='text-white p-2.5 hover:bg-stone-800 rounded-lg gap-2 text-sm font-semibold leading-4'>Suscripción</Link>
      <Link to='/ParaEmpresas' className='text-white p-2.5 hover:bg-stone-800 rounded-lg gap-2 text-sm font-semibold leading-4'>Para empresas</Link>
      <Link to='/SobreNosotros' className='text-white p-2.5 hover:bg-stone-800 rounded-lg gap-2 text-sm font-semibold leading-4'>Sobre nosotros</Link>
      <Link to='/Contacto' className='text-white p-2.5 hover:bg-stone-800 gap-2 text-sm font-semibold leading-4 rounded-md mr-[27px]'>Contacto</Link>
      <Link to='/NumeroTelf' className='text-white flex items-center p-2.5 hover:bg-stone-800 rounded-lg gap-2 text-sm font-semibold leading-4 mr-[12px]'><img src='https://i.imgur.com/phRdjkM.png' alt='telfBlanco' />+34 919 49 05 18</Link>
      <Link to='/IniciarSesion' className='text-white px-6 py-3 bg-stone-700 rounded-lg gap-2 text-sm font-semibold leading-4 mr-[27px]'>Iniciar sesión</Link>
      <Link to='/Cart' className='text-white flex '><img src='https://i.imgur.com/yA9dL1k.png' alt='Bolso de la compra' /><span className="quantityProducts bg-stone-700 p-0.5 rounded-full gap-2">{cartTotalCoffees.length}</span></Link>

    </div>
  )
}

export default Navbar