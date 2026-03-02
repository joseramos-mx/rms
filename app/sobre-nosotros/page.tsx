"use client";

import Header from "../components/Header";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";

export default function SobreNosotros() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black font-jakarta">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-[70vh] flex flex-col justify-end">
                <div className="mb-16 md:mb-32">
                    <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-light leading-[0.9] tracking-tight text-white mb-6">
                        Innovar para <br />
                        <span className="font-fraunces    text-white/50">apoyar.</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-light text-white/70 max-w-3xl leading-relaxed">
                        Un ecosistema ético de innovación y desarrollo que apoya al crecimiento de la humanidad.
                    </p>
                </div>
            </section>

            {/* Purpose & Description Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/20 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                    <div className="lg:col-span-5 flex flex-col items-start h-fit">
                        <span className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-bold mb-6 md:mb-8 border-l-2 border-lime-400 pl-4">¿Quiénes Somos?</span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-white pr-0 md:pr-10">
                            Especialistas en automatización y resolución de problemas.
                        </h2>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-12 mt-8 lg:mt-0 lg:pl-12">
                        <p className="text-white/60 text-xl font-light leading-relaxed">
                            Trabajamos aplicando filosofías, metodologías ágiles (Lean, Scrum, Design Thinking, Growth Hacking) y normativas estrictas (ISO:9001, ISO:14001) para resolver problemas de eficiencia y productividad en sectores biomédicos, mecatrónicos, industriales y de servicios.
                        </p>
                        <p className="text-white/60 text-xl font-light leading-relaxed">
                            Nuestro propósito es claro: apoyar a que la humanidad florezca con el uso eficiente de sus recursos y la autosustentabilidad, sin dejar de innovar para obtener un mundo limpio, eficiente y feliz.
                        </p>
                    </div>

                </div>
            </section>

            {/* Pillars / Data Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    <div className="flex flex-col border-l border-white/10 pl-6">
                        <span className="text-4xl font-fraunces    text-lime-400 mb-6">01</span>
                        <h3 className="text-xl font-light mb-4">Misión Ética</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Apoyamos con nuestro conocimiento a florecer a todas las entidades a nuestro alcance, teniendo como pilar principal la ética.
                        </p>
                    </div>
                    <div className="flex flex-col border-l border-white/10 pl-6">
                        <span className="text-4xl font-fraunces    text-lime-400 mb-6">02</span>
                        <h3 className="text-xl font-light mb-4">Sustentabilidad</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Redireccionamos las industrias a un desarrollo sustentable, frenando el impacto al ecosistema mediante nuestra tecnología y desarrollo de biosistemas.
                        </p>
                    </div>
                    <div className="flex flex-col border-l border-white/10 pl-6">
                        <span className="text-4xl font-fraunces    text-lime-400 mb-6">03</span>
                        <h3 className="text-xl font-light mb-4">Adaptabilidad</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Somos el músculo del Growth Hacking adaptativo: identificamos, evolucionamos y escalamos soluciones para acceder fácilmente a la innovación.
                        </p>
                    </div>
                </div>
            </section>

            {/* Target Audience / Call to action */}
            <section className="py-24 md:py-48 px-6 md:px-12 w-full bg-[#0A0A0A] border-y border-white/10 text-center flex flex-col items-center justify-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-bold mb-8">Nuestro Ecosistema</span>
                    <h2 className="text-3xl md:text-5xl font-fraunces font-light leading-tight text-white mb-10">
                        Creamos alianzas con quienes buscan <span className="   text-orange-400">superar obstáculos</span> y mejorar el mundo.
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-2xl">
                        Hablamos a makers, industrias, gobiernos y líderes de todos los sectores que comparten nuestra preocupación por la ética, la humanidad y el éxito sustentable certificado.
                    </p>
                    <a href="/contacto" className="inline-block bg-white text-black px-10 py-5 rounded-full font-medium tracking-wide hover:bg-lime-400 hover:scale-105 transition-all duration-300 shadow-xl">
                        Conectar con RMS
                    </a>
                </div>
            </section>

        </main>
    );
}
