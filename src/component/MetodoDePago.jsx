import React from 'react'

const MetodoDePago = () => {
    return (
        <div>
            <h1 className='font-bold text-lg leading-6'>Seleccionar método de pago</h1>

            <div className='inputDebito mt-2'>
                <div className='Header flex gap-4 '>
                    <input type="radio" className='accent-green-700 w-' name="typeOfSend" value="debito" />

                    <div className='infoInput ml-2'>
                        <p className='font-bold text-sm leading-4'> Tarjeta de débito</p>
                        <p className='text-sm leading-4 font-normal'>Opción estándar sin seguimiento</p>
                    </div>
                </div>

                <div className='mt-4 flex flex-col gap-2'>
                    <div className=' flex flex-col gap-1'>
                        <label className="text-xs font-normal leading-4">Titular</label>
                        <input className="border rounded w-[279px] items-center px-[10px] py-2 self-stretch" type="text" placeholder='Nombre del titular' />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className="text-xs font-normal leading-4">Número de la tarjeta</label>
                        <input className="border rounded w-[279px] items-center px-[10px] py-2 self-stretch" type="number" placeholder='1234 1234 1234 1234' />
                    </div>

                    <div className=' flex flex-row justify-start gap-6'>
                        <div className='flex flex-col w-auto w-40 gap-1'>
                            <label className='text-xs font-normal leading-4'>Fecha de caducidad</label>
                            <input className="border rounded w-[127.5px] items-center px-[10px] py-2 self-stretch" type="numbar" placeholder='MM/YY' />
                        </div>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className='text-xs font-normal leading-4'>CVC</label>
                            <input className="border rounded w-[127.5px] items-center px-[10px] py-2 self-stretch" type="number" placeholder='123' />
                        </div>
                    </div>
                </div>

            </div>
            <hr className='m-4'></hr>

            <div className='inputTransfer '>
                <div className='Header flex gap-4'>
                    <input type="radio" className='accent-green-700' name="typeOfSend" value="transfer" />

                    <div className='infoInput ml-2'>
                        <p className='font-bold text-sm leading-4'> Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                        <p className='font-normal text-sm leading-4'>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                    </div>

                </div>

            </div>
            <hr className='m-4'></hr>

            <div className='inputBizum  '>
                <div className='Header flex gap-4'>
                    <input type="radio" className='accent-green-700' name="typeOfSend" value="Bizum" />

                    <div className='infoInput flex gap-4 ml-2 items-center'>
                        <p className='font-bold text-sm leading-4'>Bizum</p>
                        <img className='w-[69.23px] h-[30px]' src='https://s3-alpha-sig.figma.com/img/ac24/1476/8585bb1a45512ace6bc15136b9de741c?Expires=1690156800&Signature=PSTU8oxhzuEwHcCz0klzUE3qY1Z2-IsJfcIItC6~6mBGjqQBQDu7jTm8Kfk~gFufx-c3syc8REauticu7C8iwpUM2RuiA~HQTeGhLbeHYqk2RX0a3GI0WYNCBY551IHdzfy1OYXbOPHGAKUlNeRXBuQA3waQnd200GlyYgc0WKH~f67wXcr4evJC0Z-gKtrN8dIdGjMJT61I3VnlbJwrox-6e6iQSzMxBhJ~FG8FuEKooA3kG6hfgjPjFUt0pe-FElFXwNzJHe8HfzhHSmREapeSTjMi481RYe9uTz0lO9SE9oys36D1k~wdkVjWIpEh24X38jx2OScu~VzWDOE7cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='figmaImg' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MetodoDePago