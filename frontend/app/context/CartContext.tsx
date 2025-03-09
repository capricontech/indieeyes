'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '../components/category/ProductGrid';

export interface CartItem {
    product: Product;
    quantity: number;
    size?: string;
    color?: string;
}

interface CartState {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: { productId: number } }
    | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
    | { type: 'CLEAR_CART' };

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

function calculateCartTotals(items: CartItem[]): Pick<CartState, 'totalItems' | 'totalPrice'> {
    return items.reduce(
        (totals, item) => {
            return {
                totalItems: totals.totalItems + item.quantity,
                totalPrice: totals.totalPrice + item.product.price * item.quantity,
            };
        },
        { totalItems: 0, totalPrice: 0 }
    );
}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.items.findIndex(
                (item) => item.product.id === action.payload.product.id
            );

            let updatedItems: CartItem[];

            if (existingItemIndex >= 0) {
                // Update quantity of existing item
                updatedItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            } else {
                // Add new item
                updatedItems = [...state.items, action.payload];
            }

            return {
                ...state,
                items: updatedItems,
                ...calculateCartTotals(updatedItems),
            };
        }

        case 'REMOVE_FROM_CART': {
            const updatedItems = state.items.filter(
                (item) => item.product.id !== action.payload.productId
            );

            return {
                ...state,
                items: updatedItems,
                ...calculateCartTotals(updatedItems),
            };
        }

        case 'UPDATE_QUANTITY': {
            const updatedItems = state.items.map((item) =>
                item.product.id === action.payload.productId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );

            return {
                ...state,
                items: updatedItems,
                ...calculateCartTotals(updatedItems),
            };
        }

        case 'CLEAR_CART':
            return initialState;

        default:
            return state;
    }
}

interface CartContextType extends CartState {
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load cart from localStorage on initial render
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart) as CartState;
                // Re-calculate totals to ensure consistency
                const totals = calculateCartTotals(parsedCart.items);
                Object.entries(totals).forEach(([key, value]) => {
                    parsedCart[key as keyof typeof totals] = value;
                });
                // Setting initial state directly, not via dispatch
                // (could use a specific INIT action instead for a cleaner approach)
                Object.entries(parsedCart).forEach(([key, value]) => {
                    state[key as keyof CartState] = value;
                });
            }
        } catch (error) {
            console.error('Failed to load cart from localStorage:', error);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(state));
        } catch (error) {
            console.error('Failed to save cart to localStorage:', error);
        }
    }, [state]);

    const addToCart = (item: CartItem) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (productId: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
    };

    const updateQuantity = (productId: number, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
} 