import Header from './components/Header';
import Home from './components/Home';
import Projects from'./components/Projects';
import Form from'./components/Form';
import Footer from './components/Footer';
import { useEffect } from 'react';



function App() {

  useEffect(() => {

    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) =>{
    setTimeout(() => {
      section.classList.remove('opacity-0', 'translate-y-10');
    }, 300 * (index + 1));
    });
    }, []);


  return (
    <div className="font-kanit-regular bg-zinc-800 min-h-screen">
      
      <section className='opacity-0 transform-all duration-700 ease-in-out sticky top-0 z-50 '>
        <Header />
      </section>

      <div className="flex-col">

        <section id="sobre" className="sm:h-screen max-w-7xl mx-auto p-5 sm:p-6 lg:p-8 flex flex-wrap items-center justify-center border-b border-zinc-600 opacity-0 translate-y-10 transform-all duration-700 ease-in-out">
          <Home/>
        </section>
          
        <section id="projetos" className="max-w-7xl mx-auto p-5 sm:p-6 lg:p-8  opacity-0 translate-y-10 transform-all duration-700 ease-in-out">
          <Projects/>
        </section>

        <section id="contato" className=" mx-auto p-5 sm:p-6 lg:p-8 opacity-0 translate-y-10 transform-all duration-700 ease-in-out">
            <Form/>
        </section>

        <section className='opacity-0 translate-y-10 transform-all duration-700 ease-in-out'>
        <Footer/>
        </section>

      </div>
    </div>
  );
}

export default App;
