import { Database, Settings, Shield } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'NextFlow',
        description: 'Automação de fluxos com IA integrada e dashboards em tempo real.',
        stack: ['Next.js', 'TypeScript', 'AI API'],
        icon: Settings,
    },
    {
        id: 2,
        name: 'DataCore',
        description: 'Plataforma para análise de dados com gráficos e relatórios dinâmicos.',
        stack: ['React', 'Node.js', 'PostgreSQL'],
        icon: Shield,
    },
    {
        id: 3,
        name: 'SecureHub',
        description: 'Sistema de autenticação e segurança baseado em tokens e OAuth2.',
        stack: ['Laravel', 'JWT', 'Redis'],
        icon: Database,
    },
];

export default function ProductGrid() {
    return (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 max-w-6xl mx-auto">
            {products.map(({ id, name, description, stack, icon: Icon }) => (
                <div
                    key={id}
                    className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b from-slate-50 to-white border border-slate-200 p-4 rounded-md"
                >
                    <div>
                        <Icon className="w-8 h-8 text-blue-600 mb-2" />
                        <h3 className="text-xl font-semibold mt-2 text-slate-800">{name}</h3>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 mb-3">{description}</p>
                        <div className="flex flex-wrap gap-2">
                            {stack.map((s) => (
                                <span
                                    key={s}
                                    className="text-xs bg-slate-100 border border-slate-200 px-2 py-1 rounded-full text-slate-500"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
