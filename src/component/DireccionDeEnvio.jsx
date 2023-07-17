import React from 'react'

const DireccionDeEnvio = () => {
    return (
        <div>
            <h1 className='font-bold text-xl '>Dirección de envío</h1>

            <div className=' flex flex-col mt-4'>
                <label id="QuestionName">Nombre</label>
                <input className="border mt-2 rounded" type="text" />
            </div>

            <div className=' flex flex-col'>
                <label id="QuestionName">Apellidos</label>
                <input className="border mt-2 rounded" type="text" />
            </div>
            <div className=' flex flex-col'>
                <label id="QuestionName">Teléfono</label>
                <input className="border mt-2 rounded" type="number" placeholder='+34 600 600 600 ' />
            </div>

            <div className=' flex flex-col'>
                <label id="QuestionName">Email</label>
                <input className="border mt-2 rounded" type="text" />
            </div>
            <div className=' flex flex-col '>
                <label id="QuestionName">País</label>
                {/* //! aquí va un desplegable de países */}
                <input className="border mt-2 rounded" type="text" />
            </div>
            <div className='direction flex-row'>
                <div className=' gap-2 flex'>
                    <div className=' flex flex-col '>
                        <label id="QuestionName">Población</label>
                        <input className="border mt-2 rounded" type="text" />
                    </div>

                    <div className=' flex flex-col'>
                        <label id="QuestionName">CP</label>
                        <input className="border mt-2 rounded" type="number" />
                    </div>
                </div>
                <div className=' gap-2 flex'>
                    <div className=' flex flex-col'>
                        <label id="QuestionName">Calle</label>
                        <input className="border mt-2 w-fit rounded" type="text" />
                    </div>
                    <div className=' flex flex-col'>
                        <label id="QuestionName">piso</label>
                        <input className="border mt-2 w-fit rounded" type="number" />
                    </div>
                    <div className=' flex flex-col'>
                        <label id="QuestionName">Número</label>
                        <input className="border mt-2 w-fit rounded" type="number" />
                    </div>
                    <div className=' flex flex-col'>
                        <label id="QuestionName">Puerta</label>
                        <input className="border mt-2 w-fit rounded" type="text" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DireccionDeEnvio