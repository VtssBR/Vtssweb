import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonValue, setButtonValue] = useState('Enviar');

    function sendEmail(ev) {
        ev.preventDefault();

        if(!inputName || !inputEmail || !inputMessage){
            setErrorMessage("*Preencha todos os campos! ")
            return;
        }

        const templateParams ={
            name: inputName,
            email: inputEmail,
            message: inputMessage
        }

        emailjs.send("service_94kg72v","template_o973v4x",templateParams, "HW7X0qy5agcAxxJxd")
        .then((response)=>{
            console.log("Email enviado", response.status, response.text)
            setInputName('')
            setInputEmail('')
            setInputMessage('')
            setErrorMessage('')
            setButtonValue('Enviado')
            setTimeout(() => {
                setButtonValue('Enviar')
              }, 2000 )
        })
    }


    return (
        <>
            <form className="max-w-xl mx-auto p-6 rounded-md shadow-zinc-900 shadow-lg sm:my-20" onSubmit={sendEmail}>
                <h1 className="text-2xl sm:text-4xl text-violet-500 font-bold p-2 mb-4 text-center">Entre em contato</h1>
              <div className="mb-4">
                <p className="text-sm sm:text-base text-red-600 p-2">{errorMessage}</p>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-zinc-700 text-white rounded border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Digite seu nome"
                  onChange={(ev)=> setInputName(ev.target.value)}
                  value={inputName}
                />
              </div>
        
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-zinc-700 text-white rounded border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Digite seu e-mail"
                  onChange={(ev)=> setInputEmail(ev.target.value)}
                  value={inputEmail}
                />
              </div>
        
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 bg-zinc-700 text-white rounded border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Digite sua mensagem"
                  onChange={(ev)=> setInputMessage(ev.target.value)}
                  value={inputMessage}
                />
              </div>
        
              <button
                type="submit"
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                {buttonValue}
              </button>
            </form>
            </>
          );
    };