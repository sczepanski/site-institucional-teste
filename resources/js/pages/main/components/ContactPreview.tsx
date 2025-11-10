export default function ContactPreview() {
    return (
        <section className="py-20 px-6 bg-blue-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua ideia em realidade?</h2>
            <p className="text-lg mb-8">
                Fale conosco e descubra como podemos ajudar a construir algo incrível juntos.
            </p>
            <a
                href="/contato"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
                Entrar em Contato
            </a>
        </section>
    );
}
