import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importação explícita
import 'swiper/css/navigation'; // Importação explícita
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { IconData } from '../../data/iconData';

interface TecnologiaProps {
    iconData: IconData[];
}

function Tecnologias({ iconData }: TecnologiaProps) {

    return (
        <div className='w-full h-full p-4'>
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Tecnologias;