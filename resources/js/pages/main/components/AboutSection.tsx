export default function AboutSection() {
    return (
        <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-slate-800">Sobre Nós</h2>
                    <p className="text-slate-600 mb-4">
                        Somos uma equipe apaixonada por tecnologia e design, comprometida em entregar resultados reais.
                    </p>
                    <p className="text-slate-600">
                        Desde a concepção até a entrega, cada projeto é tratado com dedicação e atenção aos detalhes.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1522205408450-add114ad53fe"
                    alt="Equipe trabalhando"
                    className="rounded-xl shadow-md"
                />
            </div>
        </section>
    );
}
