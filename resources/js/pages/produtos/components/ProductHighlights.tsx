import { Blocks, Palette, Rocket } from 'lucide-react';

export default function ProductHighlights() {
    const highlights = [
        {
            title: 'Desempenho Escalável',
            text: 'Arquiteturas modernas baseadas em microserviços e SSR para máxima performance.',
            icon: Rocket,
        },
        {
            title: 'Integrações Flexíveis',
            text: 'Conecte APIs, bancos de dados e serviços de terceiros de forma descomplicada.',
            icon: Blocks,
        },
        {
            title: 'Design Centrado no Usuário',
            text: 'Interfaces responsivas, acessíveis e com experiência de uso fluida.',
            icon: Palette,
        },
    ];

    return (
        <section className="py-12 bg-slate-50 text-center">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Por que escolher nossas soluções?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {highlights.map(({ title, text, icon: Icon }) => (
                    <div
                        key={title}
                        className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 text-slate-800"
                    >
                        <Icon className="text-4xl mb-3 mx-auto" />
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-slate-600 mt-2">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
