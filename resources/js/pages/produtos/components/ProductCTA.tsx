import { Rocket } from 'lucide-react';

export default function ProductCTA() {
    return (
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para acelerar sua transformação digital?</h2>
            <p className="text-slate-100 max-w-2xl mx-auto mb-6">
                Desenvolvemos soluções sob medida, com foco em desempenho, escalabilidade e experiência do usuário.
            </p>
            <div className="bg-white text-blue-700 font-semibold hover:bg-slate-100 w-fit px-6 py-3 rounded-full mx-auto flex gap-2">
                Fale com a gente <Rocket />
            </div>
        </section>
    );
}
