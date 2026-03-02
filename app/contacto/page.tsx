"use client";

import Header from "../components/Header";
import { ArrowUpRight, InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function Contacto() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black font-jakarta relative overflow-hidden flex flex-col">
            <Header />

            {/* Background aesthetics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none -z-10" />

            {/* Main Content */}
            <section className="flex-grow flex flex-col justify-center px-6 md:px-12 w-full max-w-[1400px] mx-auto pt-32 pb-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-light leading-[0.9] tracking-tight text-white mb-6">
                            Let's <br />
                            <span className="font-fraunces italic text-white/50">talk.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/60 max-w-xl leading-relaxed">
                            Whether you have a project in mind or just want to say hi, we'd love to hear from you.
                        </p>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center gap-12 lg:pl-12">

                        {/* Email */}
                        <div className="group flex flex-col border-b border-white/20 pb-8 hover:border-white transition-colors duration-500">
                            <span className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 flex items-center gap-2">
                                <EnvelopeSimple size={16} /> Email Us
                            </span>
                            <a
                                href="mailto:hello@rmsindustries.io"
                                className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white group-hover:text-orange-600 transition-colors duration-300 flex items-center justify-between"
                            >
                                hello@rmsindustries.io
                                <ArrowUpRight size={32} className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                            </a>
                        </div>

                        {/* Instagram */}
                        <div className="group flex flex-col border-b border-white/20 pb-8 hover:border-white transition-colors duration-500">
                            <span className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 flex items-center gap-2">
                                <InstagramLogo size={16} /> Follow Us
                            </span>
                            <a
                                href="https://instagram.com/rms.innovation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white group-hover:text-orange-600 transition-colors duration-300 flex items-center justify-between"
                            >
                                @rms.innovation
                                <ArrowUpRight size={32} className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* Optional: Very minimal footer copyright for this page specifically to keep it clean, 
          since the global Footer might feel heavy here, or we can just let layout.tsx handle it. 
          Assuming layout.tsx injects the global footer, we don't need one here. */}
        </main>
    );
}
