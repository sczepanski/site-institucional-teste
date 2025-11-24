import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PageLoader } from '@/components/PageLoader';
import { type PropsWithChildren } from 'react';

export default function AppHorizontalLayout({ children }: PropsWithChildren<{}>) {
    return (
        <AppShell variant="horizontal">
            <PageLoader />

            {/* HEADER horizontal */}
            <Header />

            {/* CONTEÚDO */}
            <AppContent variant="horizontal" className="flex-1 overflow-x-hidden mx-auto w-full bg-white z-0">
                {children}
            </AppContent>

            {/* FOOTER */}
            <Footer />
        </AppShell>
    );
}
