import AppLayout from '@/layouts/app/app-horizontal-layout';
import AboutSection from './components/AboutSection';
import ContactPreview from './components/ContactPreview';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServiceSection';
import TestimonialsSection from './components/TestimonialSection';

const Index = () => {
    return (
        <>
            <AppLayout>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <TestimonialsSection />
                <ContactPreview />
            </AppLayout>
        </>
    );
};

export default Index;
