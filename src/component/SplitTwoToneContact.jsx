import React from 'react'

const SplitTwoToneContact = () => {

    return (
        <div>
            <article className="contactUs flex items-center justify-center gap-6 bg-stone-400 opacity-90">
                <section className="companyContact ml-10 my-28 text-justify gap-8 w-[588px] h-[320px]">
                    <h3 className='mb-3 font-bold'>Entra en contacto con nosotros</h3>
                    <p className="p1 mb-8">Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo
                        antes
                        posible.</p>
                    <p className="p2 mb-6">También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de
                        la tienda.
                    </p>
                    <p className="p3">742 Evergreen Terrace</p>
                    <p className="p4 mb-5">Springfield, OR 12345</p>
                    <p className="p5 mb-4"><img src="https://i.imgur.com/f09bLgP.png" alt='telef' />+1 (555) 123-4567</p>
                    <p className="p6 mb-7"><img src="https://i.imgur.com/baAgF3Z.png" alt='correo'/>support@example.com</p>
                    <p className="p7">¿Buscas un trabajo? <b>Ver nuestras ofertas.</b></p>
                </section>
                <section className="form flex flex-col justify-evenly items-start gap-6 w-[700px] h-[550px] bg-white">
                    <div className="nameForm flex flex-col items-start gap-1 mb-1 mt-8 ml-[67px] mr-[51px]">
                        <label htmlFor="nameForm">Nombre completo</label>
                        <input type="text" name="nameForm" id="nameForm" required className="w-[500px] border border-solid border-slate-300 shadow-sm rounded-md" />
                    </div>
                    <div className="email flex flex-col items-start gap-1 ml-[67px] mr-[51px]">
                        <label htmlFor="emailForm">Email</label>
                        <input type="email" name="emailForm" id="emailForm" required className="w-[500px] border border-solid border-slate-300 shadow-sm rounded-md" />
                    </div>
                    <div className="telephoneForm flex flex-col items-start gap-1 ml-[67px] mr-[51px] ">
                        <label htmlFor="phoneForm">Teléfono</label>
                        <div className="input-phone border border-solid border-slate-300 shadow-sm rounded-md">
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
                        <label htmlFor="checkForm underline font-bold"><p id="termsandConditions">Acepto la <span id="strong">Política de Privacidad</span> y los <span id="strong">Términos y condiciones.</span></p></label>
                    </div>
                    <button className='p-[12px 24px] gap-2 bg-green-900 rounded text-white ml-[67px] mr-[51px]' type="submit" id="buttonForm">Enviar</button>
                </section>
            </article>
        </div>
    )
}

export default SplitTwoToneContact