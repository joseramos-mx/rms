"use client"; // Necesario para usar hooks
import { List, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { useMenu } from '../context/ContextMenu';
import Image from 'next/image';

export default function Header() {
  const { toggleMenu, isOpen } = useMenu();

  return (
    // Usamos mix-blend-difference para que se vea bien en fondos claros y oscuros
<header className="fixed top-0 w-full flex justify-between items-center px-6 py-6 z-[100] text-white pointer-events-none">      {/* Botón Menú: Ahora usa toggleMenu */}
<button 
        onClick={toggleMenu}
        className="pointer-events-auto flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/20 transition-all hover-target border border-white/5"
      >
        <div className="flex items-center gap-2 mix-blend-difference">
            <span className="text-sm font-medium font-jakarta">{isOpen ? 'Close' : 'Menu'}</span>
        </div>
      </button>

      {/* Logo Central - Se oculta si el menú está abierto para limpiar la vista */}
      <Link 
        href="/" 
        className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 hover-target transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}`}
      >
        {/* El logo lleva su propio mix-blend para contrastar con cualquier fondo */}
        <div className="mix-blend-difference">
             <Image 
                src="/logo_rms_w.svg" 
                alt="RMS Logo" 
                width={100} 
                height={24} // Ajusta la altura real de tu SVG
                className="object-contain" // Asegura que no se deforme
             />
        </div>
      </Link>

      {/* Botón Contacto - Se oculta igual que el logo */}
      <button 
        className={`pointer-events-auto flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all hover-target duration-300 border border-white/5 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
         <div className="mix-blend-difference">
            <EnvelopeSimple size={20} />
         </div>
      </button>
    </header>
  );
}