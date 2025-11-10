export default function MapSection() {
    return (
        <section className="h-[400px] w-full">
            <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.158902050374!2d-46.6565718237621!3d-23.56309806167267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9e4aa01f3%3A0xd706a5abf71d1ef8!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </section>
    );
}
