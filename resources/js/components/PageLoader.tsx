import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function PageLoader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        router.on('start', () => setLoading(true));
        router.on('finish', () => setLoading(false));
        router.on('error', () => setLoading(false));
        router.on('invalid', () => setLoading(false));
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
    );
}
