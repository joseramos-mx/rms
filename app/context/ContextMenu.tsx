// app/context/MenuContext.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

type MenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

// Valor por defecto (esto es lo que se usa si falla la conexión)
const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: () => console.log("ERROR: Contexto desconectado (usando default)"),
  closeMenu: () => {},
});

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const toggleMenu = () => {
    console.log("🟢 MENU TOGGLEADO. Nuevo estado:", !isOpen); // Si ves esto, funciona
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    console.log("🔴 MENU CERRADO");
    setIsOpen(false);
  };

  useEffect(() => {
    if (lenis) {
      isOpen ? lenis.stop() : lenis.start();
    }
  }, [isOpen, lenis]);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};