'use client';

import React from 'react';
import { CartProvider } from './context/CartContext';
import ErrorBoundary from './components/common/ErrorBoundary';

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ErrorBoundary>
            <CartProvider>
                {children}
            </CartProvider>
        </ErrorBoundary>
    );
} 