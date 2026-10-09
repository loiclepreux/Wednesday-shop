import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useCartStore } from "../store/useCartStore";

const inputClass =
    "w-full bg-transparent border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-accent transition";

const buttonClass =
    "inline-block border border-white/20 px-12 py-4 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-500";

export default function Checkout() {
    const items = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);
    const [orderNumber, setOrderNumber] = useState<string | null>(null);

    const total = items.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0,
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const number = "NVM-" + Math.floor(100000 + Math.random() * 900000);
        setOrderNumber(number);
        clearCart();
    };

    if (orderNumber) {
        return (
            <>
                <Header />
                <main className="pt-40 px-8 max-w-2xl mx-auto text-center min-h-screen">
                    <p className="text-xs tracking-widest uppercase text-foreground/40 mb-4">
                        Order sealed
                    </p>
                    <h1 className="font-title text-3xl md:text-4xl tracking-widest mb-6">
                        Thank you
                    </h1>
                    <p className="text-foreground/60 leading-7 mb-4">
                        Your artefacts have been recorded in the archives. A
                        raven will be dispatched shortly.
                    </p>
                    <p className="font-title tracking-widest mb-12">
                        {orderNumber}
                    </p>
                    <Link to="/" className={buttonClass}>
                        Return to the relics
                    </Link>
                </main>
            </>
        );
    }

    if (items.length === 0) {
        return (
            <>
                <Header />
                <main className="pt-40 px-8 max-w-2xl mx-auto text-center min-h-screen">
                    <p className="text-foreground/60 mb-12">
                        Your bag is empty. There is nothing to seal.
                    </p>
                    <Link to="/" className={buttonClass}>
                        Return to the relics
                    </Link>
                </main>
            </>
        );
    }

    return (
        <>
            <Header />

            <main className="pt-32 pb-24 px-8 max-w-6xl mx-auto">
                <h1 className="font-title text-4xl tracking-widest mb-16">
                    Checkout
                </h1>

                <div className="grid md:grid-cols-2 gap-16">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            required
                            placeholder="Full name"
                            className={inputClass}
                        />
                        <input
                            required
                            type="email"
                            placeholder="Email"
                            className={inputClass}
                        />
                        <input
                            required
                            placeholder="Address"
                            className={inputClass}
                        />
                        <input
                            required
                            placeholder="City"
                            className={inputClass}
                        />

                        <p className="text-xs text-foreground/40 italic">
                            Demo shop — no payment will be taken.
                        </p>

                        <button type="submit" className={buttonClass}>
                            Seal the order
                        </button>
                    </form>

                    <aside className="border border-white/10 p-8 h-fit">
                        <h2 className="text-xs tracking-widest uppercase text-foreground/40 mb-6">
                            Summary
                        </h2>

                        <ul className="space-y-4 mb-8">
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex justify-between text-sm"
                                >
                                    <span>
                                        {item.name} × {item.quantity}
                                    </span>
                                    <span>
                                        {(
                                            item.price * (item.quantity ?? 1)
                                        ).toFixed(2)}{" "}
                                        €
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-between border-t border-white/10 pt-6">
                            <span className="tracking-widest">Total</span>
                            <span className="text-xl">
                                {total.toFixed(2)} €
                            </span>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}
