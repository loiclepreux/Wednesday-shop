import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

export interface CartItem extends Product {
    key: string;
    size?: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addToCart: (product: Product, size?: string) => void;
    removeFromCart: (key: string) => void;
    increaseQuantity: (key: string) => void;
    decreaseQuantity: (key: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],

            addToCart: (product, size) =>
                set((state) => {
                    const key = size
                        ? `${product.id}-${size}`
                        : `${product.id}`;
                    const existing = state.items.find(
                        (item) => item.key === key,
                    );

                    if (existing) {
                        return {
                            items: state.items.map((item) =>
                                item.key === key
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item,
                            ),
                        };
                    }

                    return {
                        items: [
                            ...state.items,
                            { ...product, key, size, quantity: 1 },
                        ],
                    };
                }),

            removeFromCart: (key) =>
                set((state) => ({
                    items: state.items.filter((item) => item.key !== key),
                })),

            increaseQuantity: (key) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.key === key
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    ),
                })),

            decreaseQuantity: (key) =>
                set((state) => ({
                    items: state.items
                        .map((item) =>
                            item.key === key
                                ? { ...item, quantity: item.quantity - 1 }
                                : item,
                        )
                        .filter((item) => item.quantity > 0),
                })),

            clearCart: () => set({ items: [] }),
        }),
        { name: "nevermore-cart-v2" },
    ),
);
