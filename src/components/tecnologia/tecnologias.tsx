import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { IconData } from '../../data/iconData';

interface TecnologiaProps {
    iconData: IconData[];
}

function Tecnologias({ iconData }: TecnologiaProps) {

    return (
        <div className='w-full h-full p-4 bg-[#f7f5f0] '>
            <div className="text-center mt-4">
                    <h1 className="text-2xl lg:text-3xl font-bold pb-2">Tecnologias</h1>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>
            </div>
            
            <div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                slidesPerView={1} 
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30, 
                    },
                }}
                >
                {iconData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='w-full h-full flex flex-col items-center justify-center gap-4 p-4'>
                            <img
                                src={item.icon}
                                alt={item.alt}
                                className='w-20 h-20 object-contain'
                            />
                            <h2 className='text-2xl font-bold text-[#0d1e26]'>{item.alt}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
}

export default Tecnologias;