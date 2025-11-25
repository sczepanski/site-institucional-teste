const colors = require('tailwindcss/colors');
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.{js,ts,jsx,tsx,vue,blade.php}',
        './resources/js/**/*.js',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.blue,
                secondary: colors.slate,
                success: colors.emerald,
                error: colors.rose,
                danger: colors.rose,
                warning: colors.amber,
                info: colors.sky,
            },
        },
    },

    plugins: [forms],

    safelist: [
        'text-orange-700',
        'bg-orange-100',
        'bg-orange-700',
        'text-yellow-700',
        'bg-yellow-100',
        'bg-yellow-700',
        'text-green-700',
        'bg-green-100',
        'bg-green-700',
        'text-red-700',
        'bg-red-100',
        'bg-red-700',
        'text-purple-700',
        'bg-purple-100',
        'bg-purple-700',
        'text-sky-700',
        'bg-sky-100',
        'bg-sky-700',
        'text-blue-700',
        'bg-blue-100',
        'bg-blue-700',

        // PRIMARY
        ...Array.from({ length: 9 }, (_, i) => `bg-primary-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `text-primary-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `border-primary-${(i + 1) * 100}`),

        // SECONDARY
        ...Array.from({ length: 9 }, (_, i) => `bg-secondary-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `text-secondary-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `border-secondary-${(i + 1) * 100}`),

        // SUCCESS
        ...Array.from({ length: 9 }, (_, i) => `bg-success-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `text-success-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `border-success-${(i + 1) * 100}`),

        // DANGER
        ...Array.from({ length: 9 }, (_, i) => `bg-error-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `text-error-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `border-error-${(i + 1) * 100}`),

        ...Array.from({ length: 9 }, (_, i) => `bg-danger-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `text-danger-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `border-danger-${(i + 1) * 100}`),

        // WARNING
        ...Array.from({ length: 9 }, (_, i) => `bg-warning-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `text-warning-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `border-warning-${(i + 1) * 100}`),

        // INFO
        ...Array.from({ length: 9 }, (_, i) => `bg-info-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `text-info-${(i + 1) * 100}`),
        ...Array.from({ length: 9 }, (_, i) => `border-info-${(i + 1) * 100}`),
    ],
};
