const team = [
    {
        name: 'Eduardo Sczepanski',
        role: 'Desenvolvedor Front-End',
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    { name: 'Eduardo Sczepanski', role: 'UX/UI Designer', img: 'https://randomuser.me/api/portraits/men/19.jpg' },
    { name: 'Eduardo Sczepanski', role: 'Gerente de Projetos', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
];

export default function TeamSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-slate-800">Nosso Time</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {team.map((person, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <img
                                src={person.img}
                                alt={person.name}
                                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
                            />
                            <h3 className="font-semibold text-lg text-slate-600">{person.name}</h3>
                            <p className="text-blue-600 text-sm">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
