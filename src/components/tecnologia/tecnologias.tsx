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
    // Para depuração no console do navegador:
    console.log('Número de ícones para o Swiper:', iconData.length);
    if (typeof window !== "undefined") {
        console.log('Largura atual da janela:', window.innerWidth);
    }

    return (
        <div className='w-full h-full bg-gray-100 p-4'> {/* Fundo para ver os limites do container */}
            <Swiper
                // spaceBetween={30} // Vamos manter o spaceBetween
                // centeredSlides={true} // TENTE COMENTAR OU REMOVER ESTA LINHA PARA TESTAR
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper" // Verifique se há CSS personalizado para .mySwiper
                slidesPerView={1} // Padrão para telas menores
                breakpoints={{
                    // Telas a partir de 768px de largura
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20, // Ajuste o espaçamento conforme necessário
                    },
                    // Telas a partir de 1024px de largura
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30, // Ajuste o espaçamento conforme necessário
                    },
                }}
            >
                {iconData.map((item) => (
                    // Adicione uma borda e um fundo ao SwiperSlide para depuração visual
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