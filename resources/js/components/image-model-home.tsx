import React, { useState } from 'react';
import ButtonPadrao from './button-padrao';
import DescriptionText from './description-text';
import IconText from './icon-text';
import SubTitleText from './subtitle-text';
import TitleText from './title-text';

import PersianaEspecial from '../../../public/products/persiana-especial.png';
import PregaVoil from '../../../public/products/prega-voil.png';

import { BsArrowUpRight } from 'react-icons/bs';
import { FaBed, FaCouch, FaSuitcase } from 'react-icons/fa';

type ImageModelHomeProps = {
    onClick?: () => void;
    variant?: 'cortina' | 'persiana';
};

const ImageModelHome: React.FC<ImageModelHomeProps> = ({ onClick, variant = 'cortina' }) => {
    const models = {
        cortina: {
            titulo: 'Cortina',
            modelo: 'Prega',
            tecido: 'Voil',
            descricao: [
                'A cortina de Prega Macho se destaca pelo caimento impecável e sofisticado, criando um visual elegante em qualquer ambiente. Ela traz volume e movimento natural ao tecido, deixando o espaço mais aconchegante e refinado.',
                'Também combina bem com diferentes tipos de tecidos e estilos de decoração, sendo perfeita para quem busca beleza, praticidade e um toque clássico.',
            ],
            ambientes: [
                { icon: FaCouch, text: 'Sala de Estar' },
                { icon: FaBed, text: 'Quarto' },
                { icon: FaSuitcase, text: 'Escritório' },
            ],
            imagem: PregaVoil,
        },

        persiana: {
            titulo: 'Persiana',
            modelo: 'Rolô',
            tecido: 'Précia',
            descricao: [
                'A persiana rolô é um modelo moderno e prático, perfeita para quem busca design clean e funcionalidade. Seu principal diferencial é o sistema de rolagem vertical, que permite abrir e fechar de forma simples, controlando a entrada de luz de maneira eficaz.',
                'Além disso, a persiana rolô é conhecida por ser discreta e versátil, combinando facilmente com estilos de decoração modernos e minimalistas.',
            ],
            ambientes: [
                { icon: FaCouch, text: 'Sala de TV' },
                { icon: FaSuitcase, text: 'Formal' },
                { icon: FaBed, text: 'Suíte' },
            ],
            imagem: PersianaEspecial, // coloque a imagem correta depois
        },
    } as const;

    const [open, setOpen] = useState(false);
    const data = models[variant];

    return (
        <main>
            <section className="relative">
                <img src={data.imagem} alt="Prega Voil" className="rounded-md shadow" onClick={onClick} />
                <button
                    className="absolute text-white bg-black/30 w-6 h-6 rounded-full top-1 right-1 cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    +
                </button>
                <p className="absolute bottom-0 left-0 text-sm font-sora font-light italic text-white w-full bg-black/30 p-4 text-center rounded-b-md">
                    {data.modelo} + {data.tecido}
                </p>
            </section>

            {/* Modal */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-5"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white text-black p-4 rounded-lg shadow-xl max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
                    >
                        <section className="flex gap-2">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <TitleText>{data.titulo}</TitleText>
                                    <SubTitleText>Modelo — {data.modelo}</SubTitleText>
                                    <SubTitleText>Tecido — {data.tecido}</SubTitleText>
                                    {data.descricao.map((paragrafo, i) => (
                                        <DescriptionText key={i}>{paragrafo}</DescriptionText>
                                    ))}
                                    <TitleText>Perfeito para estes ambientes: </TitleText>
                                    <div className="flex gap-2 mt-2">
                                        {data.ambientes.map((item, index) => (
                                            <IconText
                                                key={index}
                                                variant="secondary"
                                                icon={item.icon}
                                                text={item.text}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <ButtonPadrao onClick={() => setOpen(false)} variant="back">
                                        Voltar
                                    </ButtonPadrao>
                                    <ButtonPadrao href="/produtos">
                                        Conferir mais modelos <BsArrowUpRight />
                                    </ButtonPadrao>
                                </div>
                            </div>
                            <img src={data.imagem} alt={data.modelo} className="w-1/2 h-120 rounded-sm shadow" />
                        </section>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ImageModelHome;
