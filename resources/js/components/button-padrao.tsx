import { Link } from '@inertiajs/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'back';

type ButtonPadraoProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    className?: string;
    href?: string; // link externo
    to?: string; // rota interna
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const styles: Record<ButtonVariant, string> = {
    primary:
        'flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors border border-transparent',
    secondary:
        'flex items-center gap-1 px-4 py-2 bg-white border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 rounded-md shadow transition-colors',
    back: 'flex items-center gap-1 px-4 py-2 bg-white border border-transparent text-blue-600 rounded-md transition-colors hover:underline transition',
};

const ButtonPadrao: React.FC<ButtonPadraoProps> = ({
    children,
    variant = 'primary',
    className,
    href,
    to,
    onClick,
    ...rest
}) => {
    const baseClasses = twMerge(styles[variant], 'w-fit text-center font-sora cursor-pointer', className);

    if (href) {
        return (
            <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    if (to) {
        return (
            <Link href={to} className={baseClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={baseClasses} {...rest} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonPadrao;
