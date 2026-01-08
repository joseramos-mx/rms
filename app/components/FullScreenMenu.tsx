"use client";

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from '@phosphor-icons/react/dist/ssr';
import { useMenu } from '../context/ContextMenu';

const mainLinks = ["What We Do", "About Us", "Latest News", "Get in Touch"];
const projectLinks = ["JAU", "Deuz", "HockeyStick", "Con Todo!"];
const blogPosts = [
    { id: 1, date: "Jul 2025", title: "PlayerZero raises $16M in a Series A funding round" },
    { id: 2, date: "Jun 2025", title: "Designing a New Relationship with AI by Sara Vienna" },
    { id: 3, date: "Jun 2025", title: "Metalab named Design Company of the Year finalist" },
];

export default function FullScreenMenu() {
    const { isOpen, closeMenu } = useMenu();
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
      }, []);
  return (
<div 
  className={`
    fixed inset-0 z-[90] flex flex-col justify-center items-center
    transition-all duration-300 ease-in-out
    ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
    
    bg-white dark:bg-gray-950 md:bg-transparent md:dark:bg-transparent
  `}
>
        {/* === MARCOS (FRAMES) ESTÁTICOS === */}
        {/* CAMBIO 2: Agregamos 'hidden md:block' a los 4 divs. 
            Esto hace que en móvil no existan, y en desktop aparezcan para crear la ventana. */}
        
        {/* Top Bar */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-[10vh] bg-white dark:bg-neutral-950 z-0" />
        {/* Bottom Bar */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[10vh] bg-white dark:bg-neutral-950 z-0" />
        {/* Left Bar */}
        <div className="hidden md:block absolute top-0 left-0 h-full w-[30vw] bg-white dark:bg-neutral-950 z-0" />
        {/* Right Bar */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-[30vw] bg-white dark:bg-neutral-950 z-0" />


        {/* === CONTENIDO === */}
        <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-12 px-6 md:px-12 py-24 pointer-events-none overflow-y-auto md:overflow-hidden"> 
            {/* Nota: Agregué overflow-y-auto arriba por si el menú es muy largo en móvil */}
            
            {/* Botones Flotantes */}
            <div className="absolute top-6 right-6 md:top-24 md:right-12 flex flex-col gap-4 pointer-events-auto">
            <button 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="..."
      >
        {/* 4. Renderizado Condicional Seguro */}
        {/* Si no está montado, no mostramos icono (o mostramos un div vacío) para evitar el error */}
        {mounted ? (
           theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
        ) : (
           <div className="w-5 h-5" /> // Espacio vacío del mismo tamaño
        )}
      </button>
            </div>

            {/* Links Izquierda */}
            <div className="md:col-span-3 flex flex-col justify-center h-full pointer-events-auto mb-10 md:mb-0">
                 <nav className="flex flex-col gap-6 items-start">
                    {mainLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        href="#" 
                        onClick={closeMenu} 
                        className="text-4xl md:text-5xl font-noopla hover:opacity-50 transition-opacity text-black dark:text-white"
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                    >
                        {link}
                    </Link>
                    ))}
                 </nav>
                 
                 <div className="mt-12 flex flex-col gap-4 items-start">
                    <p className="text-xs font-mono opacity-50 text-black dark:text-white">CASE STUDIES</p>
                    <div className="flex flex-wrap gap-2 max-w-[200px]">
                        {projectLinks.map((link, i) => (
                        <button key={i} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-jakarta hover:bg-black/10 transition-colors text-black dark:text-white">
                            {link}
                        </button>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Centro Hueco (Solo sirve para espaciar en desktop, en móvil lo ocultamos para que no ocupe espacio si tuviera altura) */}
            <div className="hidden md:block md:col-span-6 pointer-events-none"></div>

            {/* Blog Derecha */}
            <div className="md:col-span-3 flex flex-col justify-center h-full md:pl-8 pointer-events-auto">
                {blogPosts.map((post, i) => (
                <div key={i} className="group cursor-pointer mb-8">
                    <p className="text-xs font-mono opacity-50 mb-2 text-black dark:text-white">{post.date}</p>
                    <h4 className="font-jakarta text-sm md:text-base font-medium leading-snug group-hover:underline text-black dark:text-white">
                        {post.title}
                    </h4>
                    <div className="h-px w-full bg-black/10 dark:bg-white/10 mt-4" />
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}