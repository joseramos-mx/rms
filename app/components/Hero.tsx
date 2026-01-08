"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TextType from './TextType';

// 1. DATA
const projects = [
  { 
    id: 1, 
    name: 'JAU', 
    image: '/jau.webp', 
    bg: '/bg2.jpeg', 
    description: 'Estudio de arquitectura',
    textPos: 'items-start text-left pl-10 md:pl-20', 
    accent: 'text-orange-500' 
  },
  { 
    id: 2, 
    name: 'Deuz', 
    image: '/deuz.png', 
    bg: '/bg1.png', // Temporal
    description: 'Grupo de construcción',
    textPos: 'items-center text-center', 
    accent: 'text-red-600'
  },
  { 
    id: 3, 
    name: 'HockeyStick', 
    image: '/hs.png', 
    bg: '/bg1.png', // Temporal
    description: 'Soluciones para PyMes',
    textPos: 'items-end text-right pr-10 md:pr-20', 
    accent: 'text-purple-400'
  },
  { 
    id: 4, 
    name: 'Con Todo!', 
    image: '/ctodo.png', 
    bg: '/bg2.jpeg', // Temporal
    description: 'Elotes y botanas',
    textPos: 'items-center text-center', 
    accent: 'text-amber-600'
  },
];

export default function Hero() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef(null);
  const activeData = projects.find(p => p.id === activeProject);

  useGSAP(() => {
    gsap.from(".hero-text-anim", {
      y: 100, opacity: 100, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-10 md:pb-20 px-6">
      
      {/* === PISO 0: FONDOS === */}
      <div className="absolute inset-0 -z-10">
        {/* Default */}
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeProject ? 'opacity-0' : 'opacity-100'}`}>
             {/* CAMBIO 1: Quitamos 'opacity-80'. Ahora es 100% brillante. */}
             <Image src="/bg1.png" alt="Background" fill className="object-cover opacity-40" priority />
        </div>
        
        {/* Proyectos */}
        {projects.map((project) => (
           <div 
             key={project.id}
             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}
           >
              <Image src={project.bg} alt={project.name} fill className="object-cover scale-105 z-0 opacity-40" />
           </div>
        ))}
      </div>

      {/* === PISO 10: GRADIENTE (Opcional) === */}
      {/* Si quieres ver la imagen PURA, borra esta línea. Si la dejas, le bajé la opacidad al negro. */}


      {/* === PISO 50: TEXTO Y CONTENIDO === */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full relative z-50 pointer-events-none">
        
        {/* IZQUIERDA */}
        <div className="md:col-span-3 flex flex-col justify-center items-start gap-3 pointer-events-auto pl-2 md:pl-10 order-2 md:order-1 mt-10 md:mt-0">
          <div className="flex flex-wrap md:flex-col gap-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className={`
                  group px-5 py-2 rounded-full text-sm transition-all duration-300 border border-white/10 hover-target font-jakarta
                  ${activeProject === project.id 
                    ? 'bg-white text-black translate-x-4 scale-105' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'}
                `}
              >
                {project.name}
              </button>
            ))}
             <button className="px-5 py-2 rounded-full text-sm font-jakarta border border-white/10 text-white hover:bg-lime-400 hover:text-black transition-all hover-target">
                Todos los casos
             </button>
          </div>
        </div>

        {/* CENTRO */}
        <div className={`md:col-span-6 flex flex-col justify-center transition-all duration-500 order-1 md:order-2 mt-20 md:mt-0 
            ${activeData ? activeData.textPos : 'items-center text-center'} 
        `}>
            {/* CAMBIO 2: Aseguramos text-white puro y quitamos cualquier mix-blend-mode */}
            <h1 className="hero-text-anim text-6xl md:text-8xl lg:text-[6rem] leading-[0.9] text-white font-light transition-all duration-500" style={{ fontFamily: 'var(--font-jakarta)' }}>
              We make <br />
              <span 
                style={{ fontFamily: 'var(--font-fraunces)' }} 
                className={`font-light font-fraunces transition-colors duration-300 ${activeData ? activeData.accent : 'text-lime-400'}`}
              >
                {activeData ? (
                    <span className="animate-fade-in">{activeData.name}</span>
                ) : (
                    <TextType as="span" text={["websites", "innovation", "growth", "solutions"]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" style={{ fontFamily: 'var(--font-fraunces)' }} />
                )}
              </span>
            </h1>
        </div>

        {/* DERECHA */}
        <div className="md:col-span-3 flex flex-col justify-center md:items-end pr-0 md:pr-10 text-right pointer-events-auto order-3">
          <div className="h-[200px] flex flex-col justify-center w-full max-w-[300px]">
            {activeProject ? (
              <div className="animate-fade-in text-left md:text-right">
                <h3 className="text-3xl font-bold mb-2 font-jakarta">{activeData?.name}</h3>
                <p className="text-white/70 text-sm mb-4">{activeData?.description}</p>
                <div className="w-full h-32 relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                    <Image src={activeData?.image || ''} alt="Preview" fill className="object-cover" />
                </div>
              </div>
            ) : (
              <div className="hero-text-anim text-left md:text-right transition-all duration-500">
                <p className="text-sm md:text-sm font-jakarta font-light text-white/80 leading-relaxed z-100">
                  Since 2006, we've helped the most innovative startups and reputable brands design products worth talking about.
                </p>
                <div className="mt-6 flex justify-start md:justify-end">
                    <a href="#contact" className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors hover-target">
                        Start a project <ArrowUpRight />
                    </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}