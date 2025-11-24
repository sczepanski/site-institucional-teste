import DescriptionText from '@/components/description-text';
import IconText from '@/components/icon-text';
import TitleText from '@/components/title-text';

import ButtonPadrao from '@/components/button-padrao';
import ImageModelHome from '@/components/image-model-home';

import { BsArrowUpRight } from 'react-icons/bs';

import IconBando from '../../../../../public/images/bando.svg';
import IconFranzido from '../../../../../public/images/franzido.svg';
import IconIlhos from '../../../../../public/images/ilhos.svg';
import IconPrega from '../../../../../public/images/prega.svg';
import IconWave from '../../../../../public/images/wave.svg';
import IconXale from '../../../../../public/images/xale.svg';

const CortinaSection = () => {
    return (
        <main className="py-20 px-6 bg-amber-50/50">
            <section className="max-w-5xl mx-auto flex gap-8">
                <div className="w-2/3">
                    <div className="flex flex-col gap-2">
                        <TitleText>Cortinas</TitleText>
                        <div className="flex flex-col gap-2">
                            <DescriptionText>
                                Optar por uma cortina sob medida é investir em harmonia e exclusividade para o seu
                                espaço. Cada detalhe é pensado para valorizar o ambiente, proporcionando o equilíbrio
                                perfeito entre beleza, funcionalidade e conforto.
                            </DescriptionText>
                            <DescriptionText>
                                Com o diferencial de se ajustar com precisão às dimensões da sua janela, o modelo sob
                                medida permite personalizar cada aspecto, desde o tipo de tecido e o estilo de prega até
                                as cores e acabamentos.
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
                                icon={<img className="w-12" src={IconIlhos} alt="Ícone de ilhós" />}
                            ></IconText>
                            <IconText
                                text="Prega"
                                variant="primary"
                                icon={<img className="w-12" src={IconPrega} alt="Ícone de prega" />}
                            ></IconText>
                            <IconText
                                text="Wave"
                                variant="primary"
                                icon={<img className="w-12" src={IconWave} alt="Ícone de wave" />}
                            ></IconText>
                            <IconText
                                text="Franzido"
                                variant="primary"
                                icon={<img className="w-12" src={IconFranzido} alt="Ícone de franzido" />}
                            ></IconText>
                            <IconText
                                text="Xale"
                                variant="primary"
                                icon={<img className="w-12" src={IconXale} alt="Ícone de xale" />}
                            ></IconText>
                            <IconText
                                text="Bandô"
                                variant="primary"
                                icon={<img className="w-12" src={IconBando} alt="Ícone de bandô" />}
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
                        <ImageModelHome variant="cortina" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CortinaSection;
