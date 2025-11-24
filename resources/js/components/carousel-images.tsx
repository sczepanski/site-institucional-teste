import CortinaIlhos from '../../../public/products/ilhos.png';
import PersianaEspecial from '../../../public/products/persiana-especial.png';
import PersianaHorizontal from '../../../public/products/persiana-horizontal.jpg';
import PregaLinho from '../../../public/products/prega-linho-veludo.jpg';
import PregaVoil from '../../../public/products/prega-voil.png';

const CarouselImages = () => {
    const produtos = [
        { nome: 'Cortina Ilhos', img: CortinaIlhos, desc: 'Cortina Ilhos' },
        { nome: 'Prega Voil', img: PregaVoil, desc: 'Prega Voil' },
        { nome: 'Prega Linho Veludo', img: PregaLinho, desc: 'Prega Linho Veludo' },
        { nome: 'Persiana Especial', img: PersianaEspecial, desc: 'Persiana Especial' },
        { nome: 'Persiana Horizontal', img: PersianaHorizontal, desc: 'Persiana Horizontal' },
    ];

    return (
        <section>
            {produtos.map((produto, index) => (
                <div key={index}>
                    <img src={produto.img} alt={produto.desc} />
                </div>
            ))}
        </section>
    );
};

export default CarouselImages;
