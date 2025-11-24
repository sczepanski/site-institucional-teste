import AppLayout from '@/layouts/app/app-horizontal-layout';
import AboutSection from './components/AboutSection';
import ContactPreview from './components/ContactPreview';
import CortinaSection from './components/CortinaSection';
import HeroSection from './components/HeroSection';
import PersianaSection from './components/PersianaSection';
import ServicesSection from './components/ServiceSection';
import TestimonialsSection from './components/TestimonialSection';

const Index = () => {
    return (
        <>
            <AppLayout>
                <HeroSection />
                <CortinaSection />
                <ServicesSection />
                <PersianaSection />
                <AboutSection />
                <TestimonialsSection />
                <ContactPreview />
            </AppLayout>
        </>
    );
};

export default Index;
