import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import React from 'react';
import { IconType } from 'react-icons';

type IconTextProps = {
    text?: string;
    icon?: React.ReactNode | IconType;
    href?: string;
    variant?: 'primary' | 'secondary';
};

const IconText: React.FC<IconTextProps> = ({ href, text, icon, variant = 'primary' }) => {
    const baseClasses = 'flex flex-col items-center rounded-md text-center shadow transition font-sora';

    const variantClasses = clsx({
        'text-blue-600 border border-blue-600 bg-white cursor-pointer hover:scale-105 cursor-pointer gap-1 w-24 h-24 p-4':
            variant === 'primary',
        'text-blue-600 border border-blue-600 bg-white w-28 p-2': variant === 'secondary',
    });

    const IconElement = typeof icon === 'function' ? React.createElement(icon as IconType, { size: 32 }) : icon;

    const content = (
        <>
            {IconElement}
            <span>{text}</span>
        </>
    );

    return href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer" className={clsx(baseClasses, variantClasses)}>
            {content}
        </Link>
    ) : (
        <div className={clsx(baseClasses, variantClasses)}>{content}</div>
    );
};

export default IconText;
