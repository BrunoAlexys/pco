import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Team = () => {
  const teamMembers = [
    {
      name: "Bruno Alex",
      role: "Desenvolvedor, responsável pelo desenvolvimento e manutenção da lógica de sistemas.",
      image: "/Img/Bruno. perfil .jpg"
    },
    {
      name: "Felipe Serri",
      role: "Technical Writer, responsável por produzir e organizar documentação técnica clara e acessível.",
      image: "/Img/1695241728342-Photoroom.png"
    },
    {
      name: "João Aguiar",
      role: "QA e Gerente de Projetos, especializado em metodologias ágeis e otimização de processos empresariais.",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Marcos Pereira",
      role: "Desenvolvedor, responsável pelo desenvolvimento e manutenção da lógica de sistemas.",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Ronaldo Ferreira",
      role: "Technical Writer, responsável por produzir e organizar documentação técnica clara e acessível.",
      image: "/Img/Ronaldo.Perfil.jpg"
    },
    {
      name: "Raony Cavalcanti",
      role: "Designer UX/UI responsável pela criação de interfaces intuitivas e experiências digitais inovadoras.",
      image: "/api/placeholder/300/400"
    }
  ];

  return (
    <section id="equipe" className="py-10 px-5 text-center bg-white">
      <div className="mb-10 relative">
        <h1 className="text-4xl text-gray-800 mb-2">Nossa Equipe</h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div className="w-full max-w-full px-0 relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="myTeamSwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="h-[400px] bg-white rounded-xl shadow-lg overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent text-white p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col h-1/2 justify-end">
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