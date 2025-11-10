import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(form);
        alert('Mensagem enviada (simulação)');
    }

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="grid gap-6 text-left bg-white p-8 rounded-xl shadow-sm">
                    <div>
                        <label className="block font-medium mb-1 text-slate-600">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1 text-slate-600">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1 text-slate-600">Mensagem</label>
                        <textarea
                            name="mensagem"
                            value={form.mensagem}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
}
