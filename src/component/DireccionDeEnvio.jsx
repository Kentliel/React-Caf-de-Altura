import React from 'react'

const DireccionDeEnvio = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-lg leading-6	mt-6 '>Dirección de envío</h1>

            <div className=' flex flex-col mt-4 gap-1'>
                <label className='text-sm leading-4 font-normal'>Nombre</label>
                <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="text" />
            </div>

            <div className=' flex flex-col gap-1'>
                <label className='text-sm leading-4 font-normal'>Apellidos</label>
                <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="text" />
            </div>
            <div className=' flex flex-col gap-1'>
                <label className='text-sm leading-4 font-normal'>Teléfono</label>
                <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="number" placeholder='+34 600 600 600 ' />
            </div>

            <div className=' flex flex-col gap-1'>
                <label className='text-sm leading-4 font-normal'>Email</label>
                <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="text" />
            </div>
            <div className=' flex flex-col gap-1'>
                <label className='text-sm leading-4 font-normal'>País</label>
                {/* //! aquí va un desplegable de países */}
                <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="text" />
            </div>
            <div className='direction flex-row'>
                <div className=' gap-2 flex'>
                    <div className=' flex flex-col gap-1 '>
                        <label className='text-sm leading-4 font-normal'>Población</label>
                        <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="text" />
                    </div>

                    <div className=' flex flex-col gap-1'>
                        <label className='text-sm leading-4 font-normal'>CP</label>
                        <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="number" />
                    </div>
                </div>
                <div className=' gap-2 flex'>
                    <div className=' flex flex-col gap-1'>
                        <label className='text-sm leading-4 font-normal'>Calle</label>
                        <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="text" />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className='text-sm leading-4 font-normal'>piso</label>
                        <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="number" />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className='text-sm leading-4 font-normal'>Número</label>
                        <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="number" />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className='text-sm leading-4 font-normal'>Puerta</label>
                        <input className="border rounded w-full h-[36px] items-center px-[10px] py-2 self-stretch" type="text" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DireccionDeEnvio