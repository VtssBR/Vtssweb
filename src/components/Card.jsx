import PropTypes from 'prop-types';


Card.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string
}

export default function Card({src, alt, title, text, link}){
    return(
            <div className='h-auto shadow-zinc-900 shadow-lg rounded-md p-2 transform transition-transform duration-300 hover:scale-110 '>

              <img src={src} alt={alt} className='w-1/4 h-auto m-auto justify-center p-2'/>
              
                <div className='m-auto p-4 h-auto'>
                    <h1 className='text-center text-violet-500 text-xl mb-4'>{title}</h1>
                    <p className='text-sm sm:text-md text-zinc-400'>{text}</p>
                </div>
                    <div className='flex justify-center items-center my-4'>
                    <a 
                        className="rounded-md bg-violet-500 border-2 text-white border-transparent hover:border-slate-300 px-4 py-2" 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Acesse o GitHub
                    </a>
            </div>
        </div>
    )
}