"use client";

import Header from "../components/Header";
import { ArrowDownRight, Robot, Globe, ShareNetwork, SlidersHorizontal, HardDrives } from "@phosphor-icons/react/dist/ssr";

const services = [
    {
        title: "AI & Automations",
        description: "Using AI as an empowerer with intelligent agents and workflow automations to scale your operations rapidly.",
        icon: Robot,
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
        title: "Websites & Landing Pages",
        description: "High-level, experiential websites and landing pages designed to convert, impress, and dominate search.",
        icon: Globe,
        color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
        title: "Social Media Strategy",
        description: "Data-driven social media strategies to amplify your brand presence and authentically engage your audience.",
        icon: ShareNetwork,
        color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
        title: "Automation & Control",
        description: "Industrial and business automation systems, providing total control and radical efficiency over your processes.",
        icon: SlidersHorizontal,
        color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
        title: "Engineering & Additive Mfg.",
        description: "Cutting-edge engineering and additive manufacturing (3D printing) solutions for rapid prototyping and production.",
        icon: HardDrives,
        color: "bg-red-500/10 text-red-400 border-red-500/20"
    }
];

const businessLines = [
    { name: "Zahnfacturing", icon: "/zahnfacturing.svg", description: "Advanced dental manufacturing and 3D dental printing solutions." },
    { name: "Dynamics", icon: "/dynamics.svg", description: "Robotics, industrial automation, and comprehensive control systems." },
    { name: "Devlabs", icon: "/devlabs.svg", description: "Software development, AI integration, and digital product creation." },
    { name: "Medfacturing", icon: "/medfacturing.svg", description: "Medical device engineering, prototyping, and healthcare additive manufacturing." },
    { name: "Innovation", icon: "/innovation.svg", description: "R&D, advanced prototyping, and future-forward technological exploration." }
];

export default function QueHacemos() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black font-jakarta">
            <Header />

            {/* Editorial Hero Section */}
            <section className="pt-32 md:pt-56 pb-16 md:pb-20 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-[70vh] flex flex-col justify-end">
                <div className="mb-12 md:mb-32">
                    <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-light leading-[0.9] tracking-tight text-white mb-2">
                        Qué <span className="font-fraunces">hacemos</span>
                    </h1>
                </div>

                {/* Metadata Grid (Metalab style) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/20 pt-8 w-full">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 font-bold">Focus</span>
                        <span className="text-sm md:text-base text-white font-light">Digital Transformation</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 font-bold">Expertise</span>
                        <span className="text-sm md:text-base text-white font-light">AI, Web, Auto & Additive Mfg</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 font-bold">Approach</span>
                        <span className="text-sm md:text-base text-white font-light">Data-driven, Aesthetic, Engineered</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 font-bold">Impact</span>
                        <span className="text-sm md:text-base text-white font-light">Empowering the future</span>
                    </div>
                </div>
            </section>

            {/* Services Section - Asymmetrical Layout */}
            <section className="py-32 md:py-48 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/20 mt-10 md:mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                    {/* Left Column: Statement */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:sticky top-32 h-fit">
                        <span className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-bold mb-6 md:mb-8 border-l-2 border-lime-400 pl-4">Our Services</span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-white pr-0 md:pr-10">
                            Building ecosystems where every interaction drives <span className="font-fraunces text-orange-400">hyper-growth</span>.
                        </h2>
                    </div>

                    {/* Right Column: Service List */}
                    <div className="lg:col-span-7 flex flex-col gap-16 md:gap-24 mt-16 lg:mt-0">
                        {services.map((service, i) => (
                            <div key={i} className="flex flex-col group border-t border-white/10 pt-10 first:border-0 first:pt-0">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16  flex items-center justify-center border ${service.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                                        <service.icon size={28} weight="duotone" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-lime-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed max-w-2xl ml-0 md:ml-22">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Lines Section - Large Colored Blocks */}
            <section className="w-full mt-24">
                {/* Usamos un color bloque ligeramente distinto que el negro puro (e.g. gris muy oscuro o un azul nocturno) */}
                <div className="bg-[#0A0A0A] border-t border-b border-white/10 py-32 md:py-48 px-6 md:px-12">
                    <div className="max-w-[1400px] mx-auto">
                        <span className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-bold mb-12 md:mb-20 block text-center md:text-left">RMS Divisions</span>

                        <div className="flex flex-col gap-0 border-t border-white/10">
                            {businessLines.map((line, i) => (
                                <div key={i} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-b border-white/10 cursor-default hover:bg-white/5 transition-colors duration-500 md:px-8 -mx-8 sm:mx-0 sm:px-4 rounded-2xl gap-8 md:gap-0">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                                        <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 relative opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                            {/* Si los SVGs existen en /public, Image de Next o img tag funciona. Usamos img de momento */}
                                            <img src={line.icon} alt={line.name} className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-light font-fraunces text-white/40 group-hover:text-white transition-colors duration-500">
                                            {line.name}
                                        </h3>
                                    </div>
                                    <p className="text-white/50 text-base md:text-xl font-light max-w-sm md:max-w-md lg:max-w-lg md:text-right group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                                        {line.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / CTA (Metalab style massive question) */}
            <section className="py-24 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-12 relative z-10">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-fraunces font-light leading-[0.9] tracking-tight text-white max-w-3xl">
                    How can we <span className=" ">help?</span>
                </h2>

                <div className="flex flex-col gap-6 md:gap-8 w-full md:w-auto mt-10 md:mt-0">
                    <a href="/#contact" className="group flex items-center justify-between gap-12 border-b border-white/20 pb-4 text-2xl md:text-4xl font-light text-white/70 hover:text-white hover:border-white transition-colors duration-300 w-full md:w-max">
                        Start a project
                        <ArrowDownRight size={32} className="transform -rotate-90 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform opacity-50 group-hover:opacity-100" />
                    </a>
                    <a href="#" className="group flex items-center justify-between gap-12 border-b border-white/20 pb-4 text-2xl md:text-4xl font-light text-white/70 hover:text-white hover:border-white transition-colors duration-300 w-full md:w-max">
                        Join our team
                        <ArrowDownRight size={32} className="transform -rotate-90 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform opacity-50 group-hover:opacity-100" />
                    </a>
                </div>
            </section>
        </main>
    );
}
