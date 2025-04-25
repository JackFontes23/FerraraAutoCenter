'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  // Definindo o estado do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-600">
          FERRARA<span className="text-white">AUTO CENTER</span>
        </Link>

        {/* Botão de Menu (Hamburger) */}
        <button className="menu-button md:hidden" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navegação */}
        <nav className={`nav ${menuOpen ? 'open' : ''} hidden md:flex space-x-8`}>
          <Link href="#services" className="text-white hover:text-red-600 transition-colors">
            Serviços
          </Link>
          <Link href="#localizacao" className="text-white hover:text-red-600 transition-colors">
            Localização
          </Link>
          <Link href="#sobre" className="text-white hover:text-red-600 transition-colors">
            Sobre nós
          </Link>
        </nav>

        <motion.a
          href="https://wa.me/89994546210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="https://www.svgrepo.com/show/176768/whatsapp-social-media.svg" // URL da logo do WhatsApp
            alt="WhatsApp"
            width={48} // Largura da imagem
            height={48} // Altura da imagem
            className="h-12 w-12" // Aumentando o tamanho da imagem
          />
        </motion.a>
      </div>
    </header>
  );
}
