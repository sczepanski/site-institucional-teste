import ButtonPadrao from '@/components/button-padrao';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagemFundo from '../../../../../public/images/fundo_home.jpg';

import { motion } from 'framer-motion';

const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: i * 0.3, // delay diferente por índice
            duration: 0.8,
        },
    }),
};

export default function HeroSection() {
    const items = ['CORTINAS,', 'PERSIANAS,', 'TERCIDOS &', 'ACESSÓRIOS.'];

    return (
        <section className="relative h-[80vh] flex flex-col justify-center text-slate-100 text-center">
            <img
                src={imagemFundo}
                alt="Imagem de fundo"
                className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75 -z-10"
            />
            <div className="max-w-5xl mx-auto flex flex-col justify-between h-2/3 w-full">
                <div></div>
                <p className="text-5xl flex flex-col text-left gap-1 font-bold">
                    {items.map((item, i) => (
                        <motion.span key={i} variants={variants} initial="hidden" animate="visible" custom={i}>
                            {item}
                        </motion.span>
                    ))}
                </p>
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="flex flex-col gap-2"
                    >
                        <p className="text-lg">
                            <span className="italic slate-100">Tudo que seu ambiente precisa, está aqui!</span>
                        </p>
                        <ButtonPadrao to="/produtos" variant="primary">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-slate-100 text-3xl" />
                            Solicitar orçamento
                        </ButtonPadrao>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
