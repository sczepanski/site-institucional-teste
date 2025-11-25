import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import laravel from 'laravel-vite-plugin';
import { defineConfig, PluginOption } from 'vite';

let wayfinderPlugin: PluginOption[] = [];

try {
    execSync('php -v', { stdio: 'ignore' });
    wayfinderPlugin = [
        wayfinder({
            formVariants: true,
        }),
    ];
} catch {
    console.warn('⚠️ PHP não encontrado — ignorando @laravel/vite-plugin-wayfinder');
}

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        ...wayfinderPlugin,
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
