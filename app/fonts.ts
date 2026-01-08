import { Plus_Jakarta_Sans } from 'next/font/google';
import { Fraunces } from 'next/font/google';
import localFont from 'next/font/local';

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-fraunces',
    display: 'swap',
  });

export const noopla = localFont({
  src: '../public/fonts/NooplaRegular.woff2', // Ajusta la ruta
  variable: '--font-noopla',
  display: 'swap',
});