import React from 'react';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function Footer () {
  return (
    <footer className="bg-zinc-800 text-white py-6 border-t border-zinc-600 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Vitor. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <a href="https://www.linkedin.com/in/vitor-souza-143b34138/" target="_blank" >
                <img src={linkedin} alt="linkedin" className='w-8 sm:w-10 transform transition-transform duration-300 hover:scale-110'/>
            </a>
            <a href="https://github.com/VtssBR" target="_blank" >
                <img src={github} alt="github" className='w-8 sm:w-10 transform transition-transform duration-300 hover:scale-110'/>
            </a>
            <a href="https://wa.me/5511942025733?text=Olá!" target="_blank" >
                <img src={whatsapp} alt="whatsapp" className='w-8 sm:w-10 transform transition-transform duration-300 hover:scale-110' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

