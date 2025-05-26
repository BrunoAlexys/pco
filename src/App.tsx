import Banner from "./components/banner"
import Card from "./components/card"
import Header from "./components/header"
import Team from "./components/membros/membro";
import Tecnologias from "./components/tecnologia/tecnologias";
import { IconData } from "./data/iconData";
import Olho from './assets/olho.png';
import Foguete from './assets/foguete.png';
import Coracao from './assets/heart.png';
import Nuvem from './assets/cloud.png';
import Shield from './assets/shield.png';
import Code from './assets/code.png';
import Products from "./components/Product/product";

function App() {

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <Banner />
      
      <div className="pb-2 mb-4 mt-10">
          <h1 className="text-2xl font-bold pb-2 md:text-3xl">Sobre Nós</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mx-20 mx-8 gap-6">
        <Card
          icon={Foguete}
          title="Missão"
          description="Trasformar ideias em soluções inovadoras, garantindo excelência em um ambiente dinâmico e divertido."
        />
        <Card
          icon={Olho}
          title="Visão"
          description="Ser referência em inovação, entregando qualidade com um toque de criatividade e leveza."
        />
        <Card
          icon={Coracao}
          title="Valores"
          description="Inovação, qualidade e um ambiente leve, onde criatividade e diversão impulsionam grandes resultados."
        />
      </div>

      <div className="bg-[#0d1e26] w-full mt-10 py-10">
        <div className="flex flex-col items-center justify-center lg:mx-20 mx-8">
          <div className="pb-2 mb-10 text-center">
            <h1 className="text-2xl font-bold text-white pb-2">Nossos Serviços</h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* Container dos Cards com gap responsivo (gap-6 em mobile, gap-8 em desktop) */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full">
            <Card
              icon={Code}
              title="Desenvolvimento"
              description="Soluções personalizadas para seu negócio."
              color="bg-white"
              colorIcon="text-yellow-400"
            />
            <Card
              icon={Nuvem}
              title="Cloud Computing"
              description="Infraestrutura escalável e segura."
              color="bg-white"
            />
            <Card
              icon={Shield}
              title="Segurança"
              description="Proteção completa para seus dados."
              color="bg-white"
            />
          </div>
        </div>
      </div>

      <div>
        <Products />
      </div>

      <div className="w-full h-[340px]">
        <Tecnologias iconData={IconData} />
      </div>

      <div className="w-full">
        <Team />
      </div>
    </div>
  );
}

export default App
