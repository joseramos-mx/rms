"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TextType from './TextType';
import { useEffect } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

// 1. DATA
const projects = [
  {
    id: 1,
    name: 'JAU',
    image: '/jau.webp',
    bg: '/bg10.webp',
    description: 'Estudio de arquitectura',
    textPos: 'items-start text-left pl-10 md:pl-20',
    accent: 'text-orange-500'
  },
  {
    id: 2,
    name: 'Deuz',
    image: '/deuz.png',
    bg: 'https://ik.imagekit.io/0i4our85y/introvideo.mp4',
    description: 'Grupo de construcción',
    textPos: 'items-center text-center',
    accent: 'text-red-600'
  },
  {
    id: 3,
    name: 'HockeyStick',
    image: '/hs.png',
    bg: 'https://ik.imagekit.io/0i4our85y/0302.mp4', // Temporal
    description: 'Soluciones para PyMes',
    textPos: 'items-end text-right pr-10 md:pr-20',
    accent: 'text-purple-400'
  },
];

export default function Hero() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const activeData = projects.find(p => p.id === activeProject);

  useGSAP(() => {
    gsap.from(".hero-text-anim", {
      y: 100, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2
    });
  }, { scope: containerRef });

  useEffect(() => {
    // Force play on all videos to help bypass iOS Safari autoplay restrictions
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.muted = true;
      video.play().catch(e => console.log('Autoplay prevented by iOS:', e));
    });
  }, [activeProject]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-10 md:pb-20 px-6">

      {/* === PISO 0: FONDOS === */}
      <div className="absolute inset-0 -z-10">
        {/* Default */}
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeProject ? 'opacity-0' : 'opacity-100'}`}>
          <video
            src="https://ik.imagekit.io/0i4our85y/0302%20(1).mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className="w-full h-full object-cover pointer-events-none scale-105"
          />
          {/* Overlay for video */}
          <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none mix-blend-multiply" />
        </div>

        {/* Proyectos */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}
          >
            {project.bg.includes('.mp4') ? (
              project.bg.includes('/embed/') ? (
                <>
                  <iframe
                    src={project.bg}
                    allow="autoplay; fullscreen"
                    className="w-full h-full pointer-events-none scale-105"
                    style={{ border: 'none' }}
                  />
                  {/* Overlay for iframe video */}
                  <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none mix-blend-multiply" />
                </>
              ) : (
                <>
                  <video
                    src={project.bg}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    className="object-cover w-full h-full"
                  />
                  {/* Overlay for direct video */}
                  <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none mix-blend-multiply" />
                </>
              )
            ) : (
              <>
                <Image src={project.bg} alt={project.name} fill className="object-cover transition-transform duration-[20000ms] ease-linear hover:scale-110" sizes="100vw" />
                {/* Overlay for image */}
                <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none mix-blend-multiply" />
              </>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full relative z-10 pointer-events-none">

        {/* IZQUIERDA */}
        <div className="md:col-span-3 flex flex-col justify-center items-start gap-4 pointer-events-auto order-2 md:order-1 mt-10 md:mt-0">
          <div className="flex flex-wrap md:flex-col gap-3 w-full pl-0 md:pl-10">
            {projects.map((project) => (
              <button
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className={`
                  group px-6 py-2.5 rounded-full text-sm transition-all duration-300 border font-jakarta text-left w-max
                  ${activeProject === project.id
                    ? 'border-white bg-white text-black md:translate-x-4 scale-105 shadow-lg'
                    : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'}
                `}
              >
                {project.name}
              </button>
            ))}
            <button className="px-6 py-2.5 rounded-full text-sm font-jakarta border border-white/10 text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300 w-max mt-2">
              Todos los casos
            </button>
          </div>
        </div>

        {/* CENTRO */}
        <div className={`md:col-span-6 flex flex-col justify-center transition-all duration-500 order-1 md:order-2 mt-20 md:mt-0 
            ${activeData ? activeData.textPos : 'items-center text-center'} 
        `}>
          <h1 className="hero-text-anim text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white font-light font-jakarta transition-all duration-500">
            We make <br />
            <span className={`font-light font-fraunces transition-colors duration-300 block mt-1 md:mt-3 ${activeData ? activeData.accent : 'text-lime-400'}`}>
              {activeData ? (
                <span className="animate-fade-in block">{activeData.name}</span>
              ) : (
                <TextType as="span" text={["websites", "innovation", "growth", "solutions"]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" style={{ fontFamily: 'var(--font-fraunces)' }} />
              )}
            </span>
          </h1>
        </div>

        {/* DERECHA */}
        <div className="md:col-span-3 flex flex-col justify-center md:items-end pr-0 md:pr-10 text-right pointer-events-auto order-3 mt-10 md:mt-0">
          <div className="h-[200px] flex flex-col justify-center w-full max-w-[300px]">
            {activeProject ? (
              <div className="animate-fade-in text-left md:text-right flex flex-col items-start md:items-end">
                <h3 className="text-3xl font-bold mb-2 font-jakarta text-white">{activeData?.name}</h3>
                <p className="text-white/70 text-sm mb-4">{activeData?.description}</p>
                <div className="w-full h-32 relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <Image src={activeData?.image || ''} alt="Preview" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                </div>
              </div>
            ) : (
              <div className="hero-text-anim text-left md:text-right transition-all duration-500 flex flex-col items-start md:items-end">
                <p className="text-sm md:text-base font-jakarta font-light text-white/80 leading-relaxed z-50 relative">
                  Since 2018, we've helped the most innovative startups and reputable brands design products worth talking about.
                </p>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300 group">
                    Start a project
                    <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <ArrowUpRight />
                    </span>
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