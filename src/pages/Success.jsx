import React from 'react'
import Navbar from '../component/Navbar';
import PedidoRealizado from '../component/PedidoRealizado';
import CartSuccess from '../component/CartSuccess';
import DerechosReservados from '../component/DerechosReservados';



const Success = () => {

  return (
    <div>
      <Navbar />
      <div className='p-10'>
        <PedidoRealizado />
        <CartSuccess />
      </div>
      <DerechosReservados />
    </div>
  )
}

export default Success