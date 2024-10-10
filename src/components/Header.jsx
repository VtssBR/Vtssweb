import React, { useState } from 'react';
import logo from '../assets/logo.png';
import iconeMenu from '../assets/icone-menu.png'
import sobre from '../assets/sobre.png'
import projetos from '../assets/projetos.png'
import contato from '../assets/contato.png'

export default function Header(){
    const[menuOpen, setMenuOpen]= useState(false)

    return (
        <header className="text-white sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-lg">
                    <a href="#" className='flex flex-row items-center'>
                    <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10"/>
                    <p>Vtss</p>
                    </a>
                </div>

                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={iconeMenu} alt="Menu" className="w-6 h-6" />
                    </button>
                </div>

                 <nav className="hidden sm:flex space-x-4 sm:space-x-6 text-xs sm:text-sm md:text-lg">
                    <a className="flex flex-row items-center justify-center rounded-md border-2 border-transparent gap-2 hover:border-slate-300 px-2 py-1 sm:px-4 sm:py-2" href="#sobre">   
                    <img src={sobre} alt="sobre mim" className='w-4'/>
                    <p>Sobre</p>
                    </a>
                    <a className="flex flex-row items-center justify-center rounded-md border-2 border-transparent gap-2 hover:border-slate-300 px-2 py-1 sm:px-4 sm:py-2" href="#projetos">
                    <img src={projetos} alt="projetos" className='w-4'/>
                    <p>Projetos</p>
                    </a>
                    <a className="flex flex-row items-center justify-center rounded-md border-2 border-transparent gap-2 hover:border-slate-300 px-2 py-1 sm:px-4 sm:py-2" href="#contato">
                    <img src={contato} alt="contato" className='w-4'/>
                    <p>Contato</p>
                    </a>
                </nav>

                {menuOpen && (
                    <div className="absolute top-16 right-4 bg-zinc-200 text-black p-4 rounded-md sm:hidden">
                        <nav className="flex flex-col space-y-4 text-sm">
                            <a href="#sobre" className="block px-4 py-2 hover:bg-zinc-700 rounded-md">Sobre</a>
                            <a href="#projetos" className="block px-4 py-2 hover:bg-zinc-700 rounded-md" >Projetos</a>
                            <a href="#contato" className="block px-4 py-2 hover:bg-zinc-700 rounded-md">Contato</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
      )
}