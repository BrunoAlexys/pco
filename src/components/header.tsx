import { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Header fixo */}
            <header className="w-full h-20 fixed top-0 left-0 bg-white shadow-md flex items-center justify-between px-4 z-50">
                <img src={Logo} alt="Logo" className="w-16 h-16" />

                {/* Ícone de menu para mobile/tablet */}
                <button
                    onClick={toggleMenu}
                    className="text-3xl text-gray-800 z-50 lg:hidden"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Menu desktop (a partir de lg) */}
                <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
                    <a href="#sobre">Sobre</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#produtos">Produtos</a>
                    <a href="#tecnologia">Tecnologia</a>
                    <a href="#equipe">Equipe</a>
                    <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition">
                        Entre em Contato
                    </button>
                </nav>
            </header>

            {/* Menu mobile/tablet deslizando de cima */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden ${
                    menuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <nav className="flex flex-col items-center pt-32 h-full gap-4 text-lg font-medium">
                    <a href="#sobre" onClick={toggleMenu}>Sobre</a>
                    <a href="#servicos" onClick={toggleMenu}>Serviços</a>
                    <a href="#produtos" onClick={toggleMenu}>Produtos</a>
                    <a href="#tecnologia" onClick={toggleMenu}>Tecnologia</a>
                    <a href="#equipe" onClick={toggleMenu}>Equipe</a>
                    <button
                        onClick={toggleMenu}
                        className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition"
                    >
                        Entre em Contato
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Header;
