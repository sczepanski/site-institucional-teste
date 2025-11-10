const services = [
    { title: 'Desenvolvimento Web', desc: 'Sites modernos e responsivos para qualquer dispositivo.' },
    { title: 'Identidade Visual', desc: 'Criação de logotipos e materiais gráficos personalizados.' },
    { title: 'Soluções Personalizadas', desc: 'Aplicações feitas sob medida para o seu negócio.' },
];

export default function ServicesSection() {
    return (
        <section className="py-20 px-6 bg-white" id="servicos">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                        <h3 className="text-xl font-semibold mb-3 text-blue-600">{s.title}</h3>
                        <p className="text-slate-600">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
