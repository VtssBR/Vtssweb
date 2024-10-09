import ilustracao from '../assets/ilustracao.png';
import seta from '../assets/seta.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import React, { useState } from 'react';

export default function Home() {
  const [openText, setOpenText] = useState(false);

  const [text] = useTypewriter({
    words: ['Desenvolvedor', 'Vitor Souza', 'Programador'],
    loop: false,
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 max-w-lg mx-auto px-5">
          <h1 className="text-md sm:text-2xl text-white font-bold p-2">
            Eu sou
          </h1>
          <span className="text-2xl sm:text-4xl text-violet-500 font-bold p-2">
            {text}
            <Cursor cursorColor='text-violet-500' />
          </span>

          <div className={`text-sm sm:text-base text-zinc-400 p-2 ${openText ? 'block' : 'hidden sm:block'}`}>
            <p>
              {`Meu nome é Vitor, sou um Desenvolvedor focado em Front-End, 
                    construo e gerencio Websites, Aplicações Web e Automações
                    que contribuem para o sucesso geral do produto.`}
              <br /><br />
              {`Estou aberto a oportunidades de trabalho onde eu possa contribuir, 
                    aprender e crescer. Se você tiver uma oportunidade que combine 
                    com minhas habilidades e experiência, não hesite em entrar em contato.`}
              <br /><br />
              {`Confira alguns dos meus trabalhos na seção Projetos.`}
            </p>
          </div>
          <div className='mt-2'>
          <button
            onClick={() => setOpenText(!openText)}
            className='text-white border-b-2 border-transparent hover:border-violet-500 px-2 sm:hidden'
          >
            {openText ? 'Ver menos' : 'Saiba mais'}
          </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={ilustracao}
            alt="ilustração desenvolvedor"
            className="w-full h-auto sm:object-contain"
          />
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <a href='#projetos'>
          <img src={seta} alt="seta para baixo" className="m-2 w-6 sm:w-10 cursor-pointer transform transition-transform duration-300 hover:scale-110" />
        </a>
      </div>
    </>
  );
}
