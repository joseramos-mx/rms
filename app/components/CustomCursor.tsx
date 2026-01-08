"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Mover el cursor
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: .5, // Un poco de delay para suavidad (lerp)
        ease: "power2.out"
      });
    };

    // Escalar al hacer hover en links
    const onMouseEnter = () => gsap.to(cursor, { scale: 2, opacity: 0.5, duration: 0.3 });
    const onMouseLeave = () => gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });

    window.addEventListener('mousemove', moveCursor);
    
    // Detectar elementos interactivos
    const links = document.querySelectorAll('a, button, .hover-target');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
}