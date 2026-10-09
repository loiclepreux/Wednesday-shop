import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

export default function Header() {
    const items = useCartStore((state) => state.items);

    const totalQuantity = items.reduce(
        (sum, item) => sum + (item.quantity ?? 1),
        0,
    );

    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
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

                <div className="flex items-center gap-8">
                    <nav className="flex gap-10 text-xs tracking-widest uppercase">
                        <Link to="/" className="hover:text-accent transition">
                            Relics
                        </Link>
                        <Link
                            to="/academy"
                            className="hover:text-accent transition"
                        >
                            The Academy
                        </Link>
                        <a
                            href="#archives"
                            className="hover:text-accent transition"
                        >
                            Archives
                        </a>
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
                </div>
            </div>
        </header>
    );
}
