import { Mail, MapPin, Phone } from 'lucide-react';

export default function InfoSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Entre em Contato</h2>
                <p className="text-slate-600 mb-12">
                    Estamos prontos para te atender! Fale conosco por qualquer um dos canais abaixo.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <Phone className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="font-semibold text-lg mb-1 text-slate-600">Telefone</h3>
                        <p className="text-slate-600">(11) 99999-9999</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Mail className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="font-semibold text-lg mb-1 text-slate-600">E-mail</h3>
                        <p className="text-slate-600">contato@empresa.com</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="font-semibold text-lg mb-1 text-slate-600">Endereço</h3>
                        <p className="text-slate-600">Rua Exemplo, 123 — São Paulo/SP</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
