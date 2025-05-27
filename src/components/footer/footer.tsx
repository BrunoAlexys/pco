import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github-rodape.png';

function Rodape() {
    return (
        <div className="bg-[#0d1e26] w-full h-full py-6">
            <nav className="flex items-start py-4 ml-6 sm:ml-10 lg:ml-10 gap-3 text-sm font-medium text-white md:text-lg">
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Serviços</a>
                <a href="#produtos">Produtos</a>
                <a href="#tecnologia">Tecnologia</a>
                <a href="#equipe">Equipe</a>
            </nav>
            <div className="ml-6 sm:ml-10 lg:ml-10 flex items-center sm:justify-between gap-4">
                <h4 className="text-white font-sans text-[12px] md:text-lg">PCO.2025. All rights reserved.</h4>
                <div className="flex items-center gap-2 sm:mr-6 md:mr-8">
                    <div className="w-8 md:w-14 xl:w-12 h-8 md:h-14 xl:h-12 border-2 ml-6 border-white rounded-full flex items-center justify-center">
                        <a href="#">
                            <img 
                                src={Instagram} 
                                alt="Instagram" 
                                width={16} 
                                height={16} 
                                className='md:w-7 md:h-7'
                            />
                        </a>
                    </div>
                    <div className="w-8 md:w-14 xl:w-12 h-8 md:h-14 xl:h-12 border-2 border-white rounded-full flex items-center justify-center">
                        <a href="#">
                            <img 
                                src={Linkedin} 
                                alt="LinkedIn" 
                                className='rounded-full md:w-8 md:h-8' 
                                width={18} 
                                height={18}
                            />
                        </a>
                    </div>
                    <div className="w-8 md:w-14 xl:w-12 h-8 md:h-14 xl:h-12 border-2 border-white rounded-full flex items-center justify-center">
                        <a href="#">
                            <img 
                                src={Github} 
                                alt="GitHub" 
                                width={18} 
                                height={18}
                                className='rounded-full md:w-8 md:h-8'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Rodape;