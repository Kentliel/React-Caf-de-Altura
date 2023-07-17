import React from 'react'

const PedidoRealizado = () => {

  return (
    <div className='flex flex-col items-center gap-6 mb-6'>
       <img className='w-[64px] h-[64px]' src='https://i.imgur.com/bI8wOCp.png' alt='TablaChulito'/>
       <h2 className='text-2xl font-medium leading-7 text-custom-green'>El pedido ha sido realizado con éxito</h2>
       <p className='text-sm font-normal leading-4 w-[346px] h-12 text-center'>El pedido #12387 se encuentra en preparación. Lo recibirás dentro de las fechas acordadas en tu envío. Hemos enviado un ticket a tu correo electrónico.</p>
    </div>
  )
}

export default PedidoRealizado