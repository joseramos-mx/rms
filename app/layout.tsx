"use client";
// app/layout.tsx
import { ReactLenis } from '@studio-freight/react-lenis';
import { ThemeProvider } from 'next-themes'; // IMPORTANTE
import { MenuProvider } from './context/ContextMenu';
import { jakarta, noopla, fraunces } from './fonts';
import './globals.css';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import FullScreenMenu from './components/FullScreenMenu'; // Lo crearemos pronto

export default function RootLayout({ children }: { children: React.ReactNode }) {  return (
    // Agregamos suppressHydrationWarning para next-themes
    <html lang="es" className={`${jakarta.variable} ${noopla.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden md:cursor-none transition-colors duration-300 dark:bg-black bg-white dark:text-white text-black selection:bg-lime-400 selection:text-black" style={{fontFamily:"var(--font-jakarta)"}}>
        {/* Configuración de next-themes */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MenuProvider>
            <ReactLenis root>
              <CustomCursor />
              <Header />
              <FullScreenMenu /> 
              {/* @ts-ignore */}
              {children as any}
            </ReactLenis>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}