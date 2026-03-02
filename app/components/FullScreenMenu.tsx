"use client";

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from '@phosphor-icons/react/dist/ssr';
import { useMenu } from '../context/ContextMenu';

const mainLinks = [
    { name: "Qué hacemos", url: "/que-hacemos" },
    { name: "Sobre nosotros", url: "/sobre-nosotros" },
    { name: "Noticias", url: "#" },
    { name: "Contacto", url: "/contacto" }
];
const projectLinks = [
    {
        id: 1,
        link: 'JAU',
        color: 'bg-white/10 text-white hover:bg-zinc-500',
        url: '/jau',
    },
    {
        id: 2,
        link: 'Deuz',
        color: 'bg-white/10 text-white hover:bg-red-700',
        url: '/deuz',
    },
    {
        id: 3,
        link: 'HockeyStick',
        color: 'bg-white/10 text-white hover:bg-purple-700',
        url: '/hs',
    },
    {
        id: 4,
        link: 'Con Todo!',
        color: 'bg-white/10 text-white hover:bg-amber-600',
        url: '/ctodo',
    },
    {
        id: 5,
        link: 'Proyecto U',
        color: 'bg-white/10 text-white hover:bg-emerald-600',
        url: '/prusem',
    },
];

const blogPosts: { id: number; date: string; title: string; image?: string }[] = [
    { id: 1, date: "Jul 2025", title: "Cómo la IA transformo nuestros procesos", image: "bg1.png" },
    { id: 2, date: "Jun 2025", title: "La IA y la robotica en la industria", image: "sirka.jpg" },
    { id: 3, date: "Ene 2026", title: "Estudios de diseño que cambiaran tu forma de ver el diseño", image: "meta.webp" },
];
const featuredPost: { id: number; date: string; title: string; image?: string }[] = [
    { id: 1, date: "Jan 2026", title: "Ve nuestro study case de Proyecto U", image: "pru.png" }
]

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
    fixed inset-0 z-90 flex flex-col justify-center items-center
    transition-all duration-300 ease-in-out
    ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
    
    bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent
  `}
        >
            {/* === MARCOS (FRAMES) ESTÁTICOS === */}
            {/* CAMBIO 2: Agregamos 'hidden md:block' a los 4 divs. 
            Esto hace que en móvil no existan, y en desktop aparezcan para crear la ventana. */}

            {/* Top Bar */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-[10vh] bg-white dark:bg-black z-10" />
            {/* Bottom Bar */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-[10vh] bg-white dark:bg-black z-10" />
            {/* Left Bar */}
            <div className="hidden md:block absolute top-0 left-0 h-full w-[30vw] bg-white dark:bg-black z-10" />
            {/* Right Bar */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-[30vw] bg-white dark:bg-black z-10" />


            {/* === CONTENIDO === */}
            <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-12 px-6 md:px-12 py-24 pointer-events-auto md:pointer-events-none overflow-y-auto md:overflow-hidden">
                {/* Nota: Agregué overflow-y-auto arriba por si el menú es muy largo en móvil */}

                {/* Botones Flotantes */}
                <div className="absolute top-6 right-6 md:top-24 md:right-12 flex flex-col gap-4 pointer-events-auto">

                </div>

                {/* Links Izquierda */}
                <div className="md:col-span-3 flex flex-col justify-center h-full pointer-events-auto mb-10 md:mb-0">
                    <nav className="flex flex-col gap-6 items-start">
                        <Link href="/">
                            <img src="logo_rms_w.svg" alt="" className="h-6" />
                        </Link>
                        {mainLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url}
                                onClick={closeMenu}
                                className="text-4xl md:text-sm md:hover:text-xl transition-all hover-target font-noopla hover:opacity-50 text-black dark:text-white"
                                style={{ fontFamily: 'var(--font-jakarta)' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-12 flex flex-col gap-4 items-start">
                        <p className="text-xs text-black dark:text-white" style={{ fontFamily: 'var(--font-jakarta)' }}>CASE STUDIES</p>
                        <div className="flex flex-wrap gap-2 max-w-50">
                            {projectLinks.map((link, i) => (
                                <Link key={link.id || i} href={`${link.url}`} onClick={closeMenu} className={` rounded-full text-xs font-jakarta transition-colors ${link.color} text-black`}>
                                    <button className={`px-3 py-1 rounded-full text-xs font-jakarta transition-colors ${link.color} text-black`}>
                                        {link.link}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Centro Hueco (Solo sirve para espaciar en desktop, en móvil lo ocultamos para que no ocupe espacio si tuviera altura) */}
                <div className="hidden md:block md:col-span-6 pointer-events-none  z-0"></div>

                {/* Blog Derecha */}
                <div className="md:col-span-3 flex flex-col gap-2 justify-center h-full md:pl-8 pointer-events-auto " style={{ fontFamily: 'var(--font-jakarta)' }}>
                    <div className="bg-white/5 w-70 p-3 rounded-md border border-white/0 hover:border-white/40 transition-all">
                        {featuredPost.map((post, i) => (
                            <div key={post.id || i}>
                                <h4 className="text-sm md:text-xs leading-snug group-hover:underline text-black dark:text-white tracking-wide mb-2" style={{ fontFamily: "var(--font-jakarta)", fontWeight: "200" }}>
                                    {post.title}
                                </h4>
                                <img src={post.image} alt={post.title} className="w-[100%] rounded-md" />
                            </div>
                        ))}
                    </div>
                    {blogPosts.map((post, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className='flex flex-col bg-white/5 border border-white/0 hover:border-white/40 transition-all p-2 rounded-md w-70 x-auto'>
                                <p className='text-xs'>{post.date}</p>
                                <div className='flex flex-row gap-3  px-2 py-1 mt-2 rounded-xl items-center'>
                                    {/* Defaulting to an original image if post.image isn't defined yet */}
                                    <img src={post.image || "/bg1.png"} alt={post.title} className='h-15 w-15 aspect-square object-cover rounded-md' />
                                    <h4 className="text-sm md:text-sm leading-snug group-hover:underline text-black dark:text-white/70 tracking-wide" style={{ fontFamily: "var(--font-jakarta)", fontWeight: "200" }}>
                                        {post.title}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}