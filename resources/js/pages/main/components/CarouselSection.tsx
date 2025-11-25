import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';

import CortinaIlhos from '../../../../../public/products/ilhos.png';
import PersianaEspecial from '../../../../../public/products/persiana-especial.png';
import PersianaHorizontal from '../../../../../public/products/persiana-horizontal.jpg';
import PregaLinho from '../../../../../public/products/prega-linho-veludo.jpg';
import PregaVoil from '../../../../../public/products/prega-voil.png';

interface ArrowProps {
    onClick?: () => void;
}

const CarouselSection = () => {
    const produtos = [
        { nome: 'Cortina Ilhos', img: CortinaIlhos, desc: 'Cortina Ilhos' },
        { nome: 'Prega Voil', img: PregaVoil, desc: 'Prega Voil' },
        { nome: 'Prega Linho Veludo', img: PregaLinho, desc: 'Prega Linho Veludo' },
        { nome: 'Persiana Especial', img: PersianaEspecial, desc: 'Persiana Especial' },
        { nome: 'Persiana Horizontal', img: PersianaHorizontal, desc: 'Persiana Horizontal' },
    ];
    const PrevArrow = ({ onClick }: ArrowProps) => (
        <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white"
            onClick={onClick}
        >
            <FaChevronLeft />
        </button>
    );

    const NextArrow = ({ onClick }: ArrowProps) => (
        <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white"
            onClick={onClick}
        >
            <FaChevronRight />
        </button>
    );

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    return (
        <Slider className="text-black max-w-5xl mx-auto" {...settings}>
            {produtos.map((produto, index) => (
                <div key={index} className="flex justify-center">
                    <div className="w-[32rem] aspect-square mx-auto">
                        <img
                            src={produto.img}
                            alt={produto.desc}
                            className="w-[20rem] h-[32rem] object-cover rounded-md shadow"
                        />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CarouselSection;
