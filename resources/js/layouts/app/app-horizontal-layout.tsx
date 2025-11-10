import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { type PropsWithChildren } from 'react';

export default function AppHorizontalLayout({ children }: PropsWithChildren<{}>) {
    return (
        <AppShell variant="horizontal">
            {/* HEADER horizontal */}
            <Header />

            {/* CONTEÚDO */}
            <AppContent variant="horizontal" className="flex-1 overflow-x-hidden mx-auto w-full">
                {children}
            </AppContent>

            {/* FOOTER */}
            <Footer />
        </AppShell>
    );
}
