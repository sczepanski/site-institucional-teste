const values = [
    { title: 'Missão', desc: 'Oferecer soluções criativas e eficientes que impulsionem negócios e inspirem pessoas.' },
    { title: 'Visão', desc: 'Ser reconhecida como referência em inovação e design no mercado digital.' },
    { title: 'Valores', desc: 'Comprometimento, ética, criatividade e paixão pelo que fazemos.' },
];

export default function MissionVisionValues() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-slate-800">Nossa Essência</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, i) => (
                        <div key={i} className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
