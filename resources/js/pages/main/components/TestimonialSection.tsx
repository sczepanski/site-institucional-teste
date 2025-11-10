const testimonials = [
    { name: 'Ana Souza', quote: 'Profissionais incríveis! Meu site ficou perfeito.', company: 'Loja Bella' },
    { name: 'Carlos Lima', quote: 'Atendimento excelente e resultado além do esperado.', company: 'TechPlus' },
    { name: 'Mariana Rocha', quote: 'Trabalho impecável e entrega rápida. Recomendo muito!', company: 'MR Estilo' },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">O que dizem nossos clientes</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="p-6 border rounded-xl shadow-sm bg-slate-50">
                        <p className="italic text-slate-700 mb-4">“{t.quote}”</p>
                        <h4 className="font-semibold text-blue-600">{t.name}</h4>
                        <p className="text-sm text-slate-500">{t.company}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
