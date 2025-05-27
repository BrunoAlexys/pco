import PlanoDeFundo from '../assets/PlanoFundo.png';

function Banner() {
    return (
        <div className="relative w-full h-48 sm:h-44 md:h-64 lg:h-80 xl:h-96 mt-20">
            <img
                src={PlanoDeFundo}
                alt="Banner"
                className='w-full h-full object-cover'
            />
            <div className='absolute left-4 sm:left-6 md:left-8 lg:left-8 xl:left-10 right-auto bottom-auto top-4 md:top-8 flex flex-col items-start w-[70%] sm:w-[38%] md:w-[55%] lg:w-[50%] xl:w-[40%] gap-4 mt-2 md:gap-6 lg:mt-8 xl:mt-10'>
                <p className='text-2xl md:text-4xl lg:text-5xl font-bold text-white pb-0.5 sm:pb-1 md:pb-1 lg:pb-2 xl:pb-3'>
                    Inovação e <span className='text-yellow-400'>Tecnologia</span> para seu negócio
                </p>
                <a 
                    href='#produtos'
                    className='text-center bg-[#08151b] hover:bg-yellow-400 transition w-32 md:w-52 py-2 md:py-4 rounded-full text-white hover:text-[#08151b] md:text-xl font-bold lg:text-xl xl:text-2xl'
                >
                    Saiba Mais
                </a>
            </div>
        </div>
    );
}

export default Banner;
