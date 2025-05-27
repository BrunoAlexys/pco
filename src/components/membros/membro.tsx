import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Ronaldo from '../../assets/ronaldo.jpg';
import Felipe from '../../assets/felipe.png';
import Bruno from '../../assets/bruno.jpg';
import Raony from '../../assets/raony.jpeg';
import Marcos from '../../assets/marcos.jpeg';
import Joao from '../../assets/joao.jpeg';

const Team = () => {
    const teamMembers = [
        {
            name: "Bruno Álexys",
            role: "Desenvolvedor, responsável pelo desenvolvimento e manutenção da lógica de sistemas.",
            image: Bruno,
        },
        {
            name: "Felipe Serri",
            role: "Technical Writer, responsável por produzir e organizar documentação técnica clara e acessível.",
            image: Felipe,
        },
        {
            name: "João Aguiar",
            role: "QA e Gerente de Projetos, especializado em metodologias ágeis e otimização de processos empresariais.",
            image: Joao,
        },
        {
            name: "Marcos Pereira",
            role: "Desenvolvedor, responsável pelo desenvolvimento e manutenção da lógica de sistemas.",
            image: Marcos,
        },
        {
            name: "Ronaldo Ferreira",
            role: "Technical Writer, responsável por produzir e organizar documentação técnica clara e acessível.",
            image: Ronaldo,
        },
        {
            name: "Raony Cavalcanti",
            role: "Designer UX/UI responsável pela criação de interfaces intuitivas e experiências digitais inovadoras.",
            image: Raony,
        }
    ];

    return (
        <section id="equipe" className="py-10 px-5 text-center bg-[#ccc]">
            <div className="mb-10 relative">
                <h1 className="text-2xl lg:text-3xl text-gray-800 mb-2 font-bold">Nossa Equipe</h1>
                <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            <div className="w-full max-w-full px-0 relative">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5, 
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,   
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,    
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 4,   
                            spaceBetween: 40,
                        }
                    }}
                    className="myTeamSwiper"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-[400px] bg-white rounded-xl shadow-lg overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group mx-2">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent text-white p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col h-1/2 justify-end transform translate-y-full group-hover:translate-y-0">
                                    <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-base opacity-90 leading-relaxed">{member.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Team;