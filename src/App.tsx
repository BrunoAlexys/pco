import Banner from "./components/banner"
import Card from "./components/card"
import Header from "./components/header"

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Banner />
      <div className="border-b-2 border-yellow-400 pb-2 mb-4 hidden lg:block w-36 mt-10">
        <h1 className="text-2xl font-bold">Sobre Nós</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mx-20 mx-8 gap-6">
        <div className="border-b-2 border-yellow-400 pb-2 mb-4 lg:hidden">
          <h1 className="text-2xl font-bold">Sobre Nós</h1>
        </div>
        <Card
          icon="🚀"
          title="Missão"
          description="Trasformar ideias em soluções inovadoras, garantindo excelência em um ambiente dinâmico e divertido."
        />
        <Card
          icon="👁️"
          title="Visão"
          description="Ser referência em inovação, entregando qualidade com um toque de criatividade e leveza."
        />
        <Card
          icon="❤️"
          title="Valores"
          description="Inovação, qualidade e um ambiente leve, onde criatividade e diversão impulsionam grandes resultados."
        />
      </div>

      <div className="bg-[#0d1e26] w-full mt-10 py-10"> 
        <div className="flex flex-col items-center justify-center lg:mx-20 mx-8">
          <div className="border-b-2 border-yellow-400 pb-2 mb-10 text-center"> 
            <h1 className="text-2xl font-bold text-white">Nossos Serviços</h1>
          </div>

          {/* Container dos Cards com gap responsivo (gap-6 em mobile, gap-8 em desktop) */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full">
            <Card
              icon="&lt;/&gt;"  
              title="Desenvolvimento"
              description="Soluções personalizadas para seu negócio."
              color="bg-white"
              colorIcon="text-yellow-400"
            />
            <Card
              icon="☁️"
              title="Cloud Computing"
              description="Infraestrutura escalável e segura."
              color="bg-white"
            />
            <Card
              icon="🛡️"
              title="Segurança"
              description="Proteção completa para seus dados."
              color="bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
