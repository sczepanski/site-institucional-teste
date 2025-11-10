import AppLayout from '@/layouts/app/app-horizontal-layout';
import CompanyHistory from './components/CompanyHistory';
import MissionVisionValues from './components/MissionValues';
import TeamSection from './components/TeamSection';

const Index = () => {
    return (
        <>
            <AppLayout>
                <CompanyHistory />
                <MissionVisionValues />
                <TeamSection />
            </AppLayout>
        </>
    );
};

export default Index;
