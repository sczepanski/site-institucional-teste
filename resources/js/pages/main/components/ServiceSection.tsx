import { FaIndustry, FaRulerCombined, FaTruck, FaWrench } from 'react-icons/fa';

const services = [
    { title: 'Confecção Própria', desc: 'Produzido por nós, garantindo qualidade e exclusividade.', icon: FaIndustry },
    { title: 'Sob-Medida', desc: 'Feito nas medidas exatas do seu ambiente, sem adaptações.', icon: FaRulerCombined },
    { title: 'Nós Instalamos', desc: 'Instalação profissional feita pela nossa equipe especializada.', icon: FaWrench },
    { title: 'Exclusivo', desc: 'Você escolhe modelo, tecido e detalhes do jeito que quiser.', icon: FaTruck },
];

export default function ServicesSection() {
    return (
        <section className="py-20 px-6 bg-blue-50" id="servicos">
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto font-sora">
                {services.map((s, i) => (
                    <div key={i} className="p-2 text-center">
                        <s.icon className="text-5xl mb-3 mx-auto text-blue-600" />
                        <h3 className="text-lg font-normal mb-3 text-blue-600">{s.title}</h3>
                        <p className="text-slate-600 text-md">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
