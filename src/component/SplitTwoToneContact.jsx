import React from 'react'

const SplitTwoToneContact = () => {

    return (
        <div>
            <article className="contactUs flex items-center justify-center gap-6 bg-custom-graylighter opacity-90">
                <section className="companyContact ml-10 my-28 text-justify gap-8 w-[1200px] ">
                    <h3 className='mb-3 font-bold leading-6 text-lg font-semibold'>Entra en contacto con nosotros</h3>
                    <p className="p1 mb-8 font-normal text-sm leading-4 text-custom-gray">Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo
                        antes
                        posible.</p>
                    <p className="p2 mb-6 font-normal text-sm leading-4 text-custom-gray">También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de
                        la tienda.
                    </p>
                    <p className="p3 text-custom-gray font-normal text-sm leading-4">742 Evergreen Terrace</p>
                    <p className="p4 mb-5 text-custom-gray font-normal text-sm leading-4">Springfield, OR 12345</p>
                    <p className="p5 mb-4 text-custom-gray flex gap-2 font-normal text-sm leading-4"><img src="https://i.imgur.com/f09bLgP.png" alt='telef' />+1 (555) 123-4567</p>
                    <p className="p6 mb-7 text-custom-gray flex gap-2 font-normal text-sm leading-4"><img src="https://i.imgur.com/baAgF3Z.png" alt='correo' />support@example.com</p>
                    <p className="p7 text-custom-gray font-normal text-sm leading-4">¿Buscas un trabajo? <b className='text-black underline'>Ver nuestras ofertas.</b></p>
                </section>
                <section className="form flex flex-col justify-evenly items-start gap-6 bg-white w-[588px] h-[552px]">
                    <div className="nameForm flex flex-col items-start gap-1 mb-1 mt-8 ml-[67px] mr-[51px]">
                        <label htmlFor="nameForm " className='leading-4 font-normal text-xs'>Nombre completo</label>
                        <input type="text" name="nameForm" id="nameForm" required className="w-[500px] border border-solid border-slate-300 shadow-sm rounded-md" />
                    </div>
                    <div className="email flex flex-col items-start gap-1 ml-[67px] mr-[51px]">
                        <label htmlFor="emailForm" className='leading-4 font-normal text-xs'>Email</label>
                        <input type="email" name="emailForm" id="emailForm" required className="w-[500px] border border-solid border-slate-300 shadow-sm rounded-md" />
                    </div>
                    <div className="telephoneForm flex flex-col items-start gap-1 ml-[67px] mr-[51px] ">
                        <label htmlFor="phoneForm" className='leading-4 font-normal text-xs '>Teléfono</label>
                        <div className="input-phone border border-solid border-slate-300 shadow-sm rounded-md flex">
                            <select name="numbersPhone" id="opt">
                                <option value="us">US</option>
                                <option value="es">ES</option>
                                <option value="gr">GR</option>
                                <option value="fr">FR</option>
                                <option value="it">IT</option>
                            </select><input type="number" name="numbersPhone" id="numbersPhone" placeholder="+1 (555) 987-6543"
                                required minlength="8" maxlength="11" className="w-[460px]" />
                        </div>
                    </div>
                    <div className="textArea ml-[67px] mr-[51px]">
                        <label htmlFor="textareaForm"></label>
                        <textarea name="textareaForm" id="textareaForm" cols="30" rows="10"
                            placeholder="¿En qué podemos ayudarte?" required className="w-[508px] h-[100px] border border-solid border-slate-300 shadow-sm rounded-md " ></textarea>
                    </div>
                    <div className="checkTerms ml-[67px] mr-[51px] flex">
                        <input type="checkbox" name="checkForm" id="checkForm" value="acept" />
                        <label htmlFor="checkForm underline font-bold" className='text-sm leading-4'><p id="termsandConditions">Acepto la <span id="strong" className='font-semibold underline'>Política de Privacidad</span> y los <span id="strong" className='font-semibold underline'>Términos y condiciones.</span></p></label>
                    </div>
                    <button className='px-6 py-3 gap-2 bg-custom-green leading-4 text-sm font-medium rounded text-white ml-[67px] mr-[51px]' type="submit" id="buttonForm">Enviar</button>
                </section>
            </article>
        </div>
    )
}

export default SplitTwoToneContact