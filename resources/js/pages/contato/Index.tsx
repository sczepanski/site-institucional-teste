import AppLayout from '@/layouts/app/app-horizontal-layout';
import ContactForm from './components/ContactForm';
import InfoSection from './components/InfoSection';
import MapSection from './components/MapSection';

const Index = () => {
    return (
        <>
            <AppLayout>
                <InfoSection />
                <ContactForm />
                <MapSection />
            </AppLayout>
        </>
    );
};

export default Index;
