import Header from './components/Header';
import Home from './components/Home';


function App() {

  return (
    <div id='home' className="font-kanit-regular bg-zinc-800 min-h-screen">
      <Header />

      <div className="flex-col">
        <section id="sobre" className="sm:h-screen max-w-7xl mx-auto p-5 sm:p-6 lg:p-8 flex flex-wrap items-center justify-center border-b-2 border-white ">
          <Home/>
        </section>

        <section id="projetos" className="h-screen">
          <h2 className="text-3xl"></h2>
        </section>

        <section id="contato" className="h-screen">
          <h2 className="text-3xl"></h2>
        </section>
      </div>
    </div>
  );
}

export default App;
