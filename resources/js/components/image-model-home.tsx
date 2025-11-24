import React, { useState } from 'react';
import PregaVoil from '../../../public/products/prega-voil.png';
import ButtonPadrao from './button-padrao';
import DescriptionText from './description-text';
import IconText from './icon-text';
import SubTitleText from './subtitle-text';
import TitleText from './title-text';

import { BsArrowUpRight } from 'react-icons/bs';
import { FaBed, FaCouch, FaSuitcase } from 'react-icons/fa';

type ImageModelHomeProps = {
    onClick?: () => void;
};

const ImageModelHome: React.FC<ImageModelHomeProps> = ({ onClick }) => {
    const [open, setOpen] = useState(false);

    return (
        <main>
            <section className="relative">
                <img src={PregaVoil} alt="Prega Voil" className="rounded-md shadow" onClick={onClick} />
                <button
                    className="absolute text-white bg-black/30 w-6 h-6 rounded-full top-1 right-1 cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    +
                </button>
                <p className="absolute bottom-0 left-0 text-sm font-sora font-light italic text-white w-full bg-black/30 p-4 text-center rounded-b-md">
                    Prega Voil
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
                                    <TitleText>Cortina</TitleText>
                                    <SubTitleText>Modelo - Prega</SubTitleText>
                                    <SubTitleText>Tecido - Voil</SubTitleText>
                                    <DescriptionText>
                                        A persiana rolô é um modelo moderno e prático, perfeita para quem busca design
                                        clean e funcionalidade. Seu principal diferencial é o sistema de rolagem
                                        vertical, que permite abrir e fechar de forma simples, controlando a entrada de
                                        luz de maneira eficaz. Além disso, a persiana rolô é conhecida por ser discreta
                                        e versátil, combinando facilmente com estilos de decoração modernos e
                                        minimalistas.
                                    </DescriptionText>
                                    <TitleText>Perfeito para estes ambientes: </TitleText>
                                    <div className="flex gap-2 mt-2">
                                        <IconText variant="secondary" icon={FaCouch} text="Sala de Estar" />
                                        <IconText variant="secondary" icon={FaBed} text="Quarto" />
                                        <IconText variant="secondary" icon={FaSuitcase} text="Formal" />
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
                            <img src={PregaVoil} alt="Prega Voil" className="w-1/2 h-120 rounded-sm shadow" />
                        </section>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ImageModelHome;
