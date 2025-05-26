import ImageBanner from '../assets/banner.png';

function Banner() {
    return (
        <div className="relative w-full h-40 md:h-60 lg:h-80 mt-20">
            <img
                src={ImageBanner}
                alt="Banner"
                className='w-full h-full object-cover'
            />
            <div className='absolute left-3 right-auto bottom-auto top-4 md:top-8 flex flex-col items-start w-[80%] md:w-[55%] lg:w-[40%] gap-4 md:gap-6'>
                <p className='text-2xl md:text-4xl lg:text-5xl font-medium text-white'>
                    Inovação e <span className='text-yellow-400'>Tecnologia</span> para seu negócio
                </p>
                <button
                    className='bg-[#08151b] hover:bg-yellow-400 transition w-32 md:w-52 py-2 md:py-4 rounded-full text-white hover:text-[#08151b] md:text-xl font-bold'
                >
                    Saiba Mais
                </button>
            </div>
        </div>
    );
}

export default Banner;
