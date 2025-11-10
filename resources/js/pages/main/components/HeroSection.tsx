import { Skull } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 flex gap-2 items-center">
                Bem-vindo à CaveiraTech <Skull className="w-14 h-14" />
            </h1>
            <p className="max-w-2xl text-lg opacity-90">
                Soluções digitais modernas com performance, design e propósito.
            </p>
            <a
                className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition"
                href="#servicos"
            >
                Conheça nossos serviços
            </a>
        </section>
    );
}
