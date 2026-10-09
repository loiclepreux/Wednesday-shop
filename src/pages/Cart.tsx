import Header from "../components/Header";
import { useCartStore } from "../store/useCartStore";
import type { Product } from "../types/product";
import { Link } from "react-router-dom";

export default function Cart() {
    const items = useCartStore((state) => state.items);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const total = items.reduce((sum, item) => {
        return sum + item.price * (item.quantity ?? 1);
    }, 0);

    return (
        <>
            <Header />

            <main className="pt-32 px-8 max-w-6xl mx-auto">
                <h1 className="font-title text-4xl tracking-widest mb-16">
                    Cart
                </h1>

                {items.length === 0 ? (
                    <p className="text-foreground/60">Your cart is empty.</p>
                ) : (
                    <div className="space-y-12">
                        {items.map((item: Product) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b border-white/10 pb-6"
                            >
                                <div>
                                    <h2 className="font-title tracking-wide">
                                        {item.name}
                                    </h2>
                                    <p className="text-sm text-foreground/60">
                                        {item.price} €
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                        className="border border-white/20 px-3 py-1 hover:border-accent"
                                    >
                                        −
                                    </button>

                                    <span className="w-6 text-center">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                        className="border border-white/20 px-3 py-1 hover:border-accent"
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-4 text-xs text-foreground/50 hover:text-accent"
                                    >
                                        Remove
                                    </button>
                                </div>

                                <div className="text-right">
                                    {(
                                        item.price * (item.quantity ?? 1)
                                    ).toFixed(2)}{" "}
                                    €
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-between items-center pt-10">
                            <span className="text-xl tracking-widest">
                                Total
                            </span>
                            <span className="text-2xl">
                                {total.toFixed(2)} €
                            </span>
                        </div>

                        <div className="pt-10 text-right">
                            <Link
                                to="/checkout"
                                className="
                  border border-white/20
                  px-12 py-4
                  text-xs tracking-widest uppercase
                  hover:border-accent hover:text-accent
                  transition-all duration-500
                "
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
