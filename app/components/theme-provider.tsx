"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// Si te da error de tipos en la siguiente línea, avísame, pero debería funcionar bien
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}