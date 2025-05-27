import imagemBG from '../../assets/Blue Modern Investment Mobile App Promotion Facebook Ad.png';

function Products() {

    return (
        <div className=" w-auto h-[850px] sm:h-[860px] md:h-[930px] lg:h-[1050px] xl:h-[650px] py-10 p-2">
            <section id='Produtos' className="py-10 px-5 bg-white">
                <div className="mb-10 relative text-center">
                    <h1 className="text-2xl lg:text-3xl text-[#0d1e26] mb-2 font-bold">Nossos Produtos</h1>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
                </div>
                <div className=' flex flex-col xl:flex-row xl:justify-around'>
                    <div className='py-4' >
                        <img src={imagemBG} alt="Foto" className="xl:w-[650px] xl:h-auto rounded-2xl" />
                    </div>
                    <div className='xl:w-[40%]'>
                        <div className='flex flex-col items-start mb-4 md:pt-1.5'>
                            <h1 className='text-2xl md:text-3xl lg:text-3xl text-[#0d1e26] font-bold'>Meu Tempo</h1>
                            <div className="w-12.5 md:w-15.5 lg:w-15.5 h-1 bg-yellow-400"></div>
                        </div>
                        <p className='text-gray-800 text-lg mb-4'>
                            Nosso aplicativo de gestão de tempo está em fase de desenvolvimento e foi idealizado para ajudar você a planejar suas tarefas com eficiência e alcançar seus objetivos. Com uma interface intuitiva e moderna, ele permitirá:
                        </p>

                        <ul className='list-disc marker:text-yellow-400 pl-5 text-start text-gray-800'>
                            <li>Criar e organizar tarefas diárias</li>
                            <li>Acompanhar seu progresso com relatórios detalhados</li>
                            <li>Receber lembretes para manter o foco</li>
                            <li>Visualizar compromissos no calendário integrado</li>
                            <li>Transforme sua rotina e maximize sua produtividade com praticidade e inovação!</li>
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;