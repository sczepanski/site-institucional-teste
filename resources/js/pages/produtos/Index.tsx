import AppLayout from '@/layouts/app/app-horizontal-layout';
import ProductCTA from './components/ProductCTA';
import ProductGrid from './components/ProductGrid';
import ProductHighlights from './components/ProductHighlights';

const Index = () => {
    return (
        <>
            <AppLayout>
                <ProductGrid />
                <ProductHighlights />
                <ProductCTA />
            </AppLayout>
        </>
    );
};

export default Index;
