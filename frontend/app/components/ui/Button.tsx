import React from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    isLoading = false,
    className,
    children,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-medium inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
        link: 'bg-transparent text-blue-600 hover:underline p-0 h-auto'
    };

    const sizeStyles = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
        icon: 'p-2'
    };

    const disabledStyles = 'opacity-50 cursor-not-allowed';

    const loadingStyles = 'relative !text-transparent transition-none';

    const classes = clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && disabledStyles,
        isLoading && loadingStyles,
        className
    );

    return (
        <button
            disabled={disabled || isLoading}
            className={classes}
            {...props}
        >
            {isLoading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </span>
            )}

            {Icon && iconPosition === 'left' && !isLoading && (
                <Icon className={clsx('shrink-0', children ? 'mr-2' : '')} size={size === 'lg' ? 20 : size === 'sm' ? 16 : 18} />
            )}

            {children}

            {Icon && iconPosition === 'right' && !isLoading && (
                <Icon className={clsx('shrink-0', children ? 'ml-2' : '')} size={size === 'lg' ? 20 : size === 'sm' ? 16 : 18} />
            )}
        </button>
    );
} 