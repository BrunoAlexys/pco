import { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const whatsappLink = "https://wa.me/5581983261747?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20equipe%20da%20PCO%20para%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.%20Aguardo%20o%20retorno.%20Obrigado!";

    return (
        <>
            <header className="w-full h-20 fixed top-0 left-0 bg-white shadow-md flex items-center justify-between px-4 z-50">
                {/* Logo */}
                <img src={Logo} alt="Logo" className="w-16 h-16" />

                {/* Menu centralizado apenas no desktop */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <nav className="flex items-center gap-8 text-lg font-medium">
                        <a href="#sobre">Sobre</a>
                        <a href="#servicos">Serviços</a>
                        <a href="#produtos">Produtos</a>
                        <a href="#tecnologia">Tecnologia</a>
                        <a href="#equipe">Equipe</a>
                    </nav>
                </div>

                {/* Botão "Entre em Contato" apenas no desktop */}
                <div className="hidden lg:block">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition"
                    >
                        Entre em Contato
                    </a>
                </div>

                {/* Ícone de menu apenas para mobile */}
                <button
                    onClick={toggleMenu}
                    className="text-3xl text-gray-800 z-50 lg:hidden"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Menu mobile deslizando de cima */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <nav className="flex flex-col items-center pt-32 h-full gap-4 text-lg font-medium">
                    <a href="#sobre" onClick={toggleMenu}>Sobre</a>
                    <a href="#servicos" onClick={toggleMenu}>Serviços</a>
                    <a href="#produtos" onClick={toggleMenu}>Produtos</a>
                    <a href="#tecnologia" onClick={toggleMenu}>Tecnologia</a>
                    <a href="#equipe" onClick={toggleMenu}>Equipe</a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleMenu}
                        className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition"
                    >
                        Entre em Contato
                    </a>
                </nav>
            </div>
        </>
    );
}

export default Header;
