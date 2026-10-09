import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const links = [
    { to: "/", label: "Relics" },
    { to: "/academy", label: "The Academy" },
    { to: "/#archives", label: "Archives" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const items = useCartStore((state) => state.items);

    const totalQuantity = items.reduce(
        (sum, item) => sum + (item.quantity ?? 1),
        0,
    );

    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto h-full px-6 md:px-8 flex items-center justify-between">
                <div className="flex flex-col leading-none">
                    <Link
                        to="/"
                        className="text-sm tracking-[0.35em] font-light font-title"
                    >
                        NEVERMORE
                    </Link>
                    <span className="text-[10px] tracking-widest text-foreground/40 uppercase">
                        Academy · Est. 1791
                    </span>
                </div>

                <div className="flex items-center gap-6 md:gap-8">
                    <nav className="hidden md:flex gap-10 text-xs tracking-widest uppercase">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className="hover:text-accent transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <Link to="/cart" className="relative text-sm">
                        <span className="font-title text-lg tracking-widest">
                            Bag
                        </span>
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-6 bg-accent text-black text-xs px-2 rounded-full">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                        className="md:hidden ml-4 flex flex-col gap-1.5"
                    >
                        <span
                            className={`block h-px w-6 bg-foreground transition duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                        />
                        <span
                            className={`block h-px w-6 bg-foreground transition duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {open && (
                <nav className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 flex flex-col items-center gap-8 py-10 text-xs tracking-widest uppercase">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className="hover:text-accent transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
