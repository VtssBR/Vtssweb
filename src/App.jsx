import Header from './components/Header';
import Home from './components/Home';
import Projects from'./components/Projects';


function App() {

  return (
    <div id='home' className="font-kanit-regular bg-zinc-800 min-h-screen">
    
        <Header />

      <div className="flex-col">

        <section id="sobre" className="sm:h-screen max-w-7xl mx-auto p-5 sm:p-6 lg:p-8 flex flex-wrap items-center justify-center border-b border-zinc-600 ">
          <Home/>
        </section>
          
        <section id="projetos" className="h-screen max-w-7xl mx-auto p-5 sm:p-6 lg:p-8 md:border-b border-zinc-600">
          <Projects/>
        </section>

        <section id="contato" className="h-screen">
          <h2 className="text-3xl"></h2>
        </section>

      </div>
    </div>
  );
}

export default App;
