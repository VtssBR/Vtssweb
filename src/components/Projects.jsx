import Card from './Card';
import webhook from'../assets/hook.png';
import companies from'../assets/empresa.png';
import website from'../assets/internet.png';
import seta from '../assets/seta.png';


export default function Projects() {
    return (
        <>
        <div className='text-white flex flex-col justify-center items-center sm:mt-16'>
            <h1 className='text-2xl sm:text-4xl text-violet-500 font-bold p-2'>Projetos</h1>
            <p className='text-sm sm:text-base text-zinc-400 p-2 sm:text-center '>
              Nesta seção, apresento meus projetos, todos hospedados no meu GitHub.<br />
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:mt-20 mt-5'>
            <Card
              src={webhook}
              alt="Imagem Webhook"
              title="WebhookEmailSender"
              text={`Este projeto é uma aplicação Node.js que recebe webhooks de um sistema externo para processar eventos, como pagamentos, e enviar e-mails com links de convite para um grupo do Telegram.`}
              link="https://github.com/VtssBR/WebhookEmailSender"
              />
            <Card
              src={companies}
              alt="Imagem companies"
              title="Companies"
              text={`Este projeto foi desenvolvido como um teste técnico e permite o cadastro de informações de empresas, como endereço e contato, por meio de uma aplicação web conectada a um banco de dados local.`}
              link="https://github.com/VtssBR/Companies"
              />
              <Card
              src={website}
              alt="Imagem website"
              title="Vtssweb"
              text={`Este projeto é um portfólio web que apresenta meus projetos, informações sobre mim e meios de contato, desenvolvido para aplicar os conhecimentos adquiridos em estudos e experiências práticas.`}
              link="https://github.com/VtssBR/Vtssweb"
              />
          </div>
            <div className='flex items-center justify-center'>
                <a href='#contato'>
                <img src={seta} alt="seta para baixo" className=" mt-10 sm:mt-36 w-6 sm:w-10 cursor-pointer transform transition-transform duration-300 hover:scale-110" />
                </a>
            </div>
        </>
    )
}