import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black text-white pt-24 pb-8 px-6 md:px-12 relative z-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

                {/* Brand Section */}
                <div className="md:col-span-5 flex flex-col items-start pr-0 md:pr-12">
                    <img src="/logo_rms_w.svg" alt="RMS Logo" className="h-6 mb-8 opacity-90" />
                    <p className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-8 max-w-sm">
                        Empowering the future of business through AI, automation, digital experiences, and advanced engineering.
                    </p>
                    <a href="/contacto" className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-lime-400 transition-colors duration-300">
                        Start a project
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-2 md:col-start-8 flex flex-col gap-5">
                    <h4 className="text-sm font-medium mb-1 tracking-wider text-white">Menu</h4>
                    <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">Inicio</Link>
                    <Link href="/que-hacemos" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">Qué hacemos</Link>
                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">Sobre nosotros</Link>
                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">Noticias</Link>
                </div>

                {/* Social Links */}
                <div className="md:col-span-2 flex flex-col gap-5">
                    <h4 className="text-sm font-medium mb-1 tracking-wider text-white">Socials</h4>
                    <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">Instagram</a>
                    <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">LinkedIn</a>
                    <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">Twitter (X)</a>
                    <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 w-max">Behance</a>
                </div>

            </div>

            {/* Bottom Legal / Copyright */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-xs font-light">
                <p>&copy; {new Date().getFullYear()} RMS. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
