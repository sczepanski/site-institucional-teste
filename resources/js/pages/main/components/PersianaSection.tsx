import DescriptionText from '@/components/description-text';
import IconText from '@/components/icon-text';
import TitleText from '@/components/title-text';

import ButtonPadrao from '@/components/button-padrao';
import ImageModelHome from '@/components/image-model-home';

import { BsArrowUpRight } from 'react-icons/bs';

import IconHorizontal from '../../../../../public/images/horizontal.svg';
import IconPainel from '../../../../../public/images/painel.svg';
import IconRolo from '../../../../../public/images/rolo.svg';
import IconRomana from '../../../../../public/images/romana.svg';
import IconVertical from '../../../../../public/images/vertical.svg';

const PersianaSection = () => {
    return (
        <main className="py-20 px-6 bg-amber-50/50">
            <section className="max-w-5xl mx-auto flex flex-row-reverse gap-8">
                <div className="w-2/3">
                    <div className="flex flex-col gap-2">
                        <TitleText>Persianas</TitleText>
                        <div className="flex flex-col gap-2">
                            <DescriptionText>
                                As persianas sob medida são a solução perfeita para quem busca funcionalidade,
                                modernidade e controle da iluminação no ambiente. Ao serem feitas sob medida, se ajustam
                                exatamente às dimensões da sua janela, garantindo um acabamento impecável e sofisticado.
                            </DescriptionText>
                            <DescriptionText>
                                Contribuindo com a estética, também oferecem versatilidade de uso: permitem controlar a
                                entrada de luz de forma prática, preservam a privacidade e são fáceis de manter.
                            </DescriptionText>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-2">
                        <TitleText>Disponíveis nos seguintes modelos: </TitleText>
                        <div className="flex gap-4">
                            <IconText
                                href="/produtos"
                                text="Ilhós"
                                variant="primary"
                                icon={<img className="w-12" src={IconHorizontal} alt="Ícone da horizontal" />}
                            ></IconText>
                            <IconText
                                text="Prega"
                                variant="primary"
                                icon={<img className="w-12" src={IconRolo} alt="Ícone da rolo" />}
                            ></IconText>
                            <IconText
                                text="Wave"
                                variant="primary"
                                icon={<img className="w-12" src={IconRomana} alt="Ícone da romana" />}
                            ></IconText>
                            <IconText
                                text="Franzido"
                                variant="primary"
                                icon={<img className="w-12" src={IconPainel} alt="Ícone da painel" />}
                            ></IconText>
                            <IconText
                                text="Xale"
                                variant="primary"
                                icon={<img className="w-12" src={IconVertical} alt="Ícone da vertical" />}
                            ></IconText>
                        </div>
                        <ButtonPadrao className="mt-4" to="/produtos" variant="secondary">
                            Mais modelos
                            <BsArrowUpRight />
                        </ButtonPadrao>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex flex-col gap-2">
                        <ImageModelHome />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PersianaSection;
