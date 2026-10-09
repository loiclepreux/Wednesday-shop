import { Link } from "react-router-dom";
import { navLinks } from "../data/navigation";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-32 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid gap-12 md:grid-cols-3">
                <div>
                    <p className="font-title text-sm tracking-[0.35em] mb-3">
                        NEVERMORE
                    </p>
                    <p className="text-xs text-foreground/40 leading-6 max-w-xs">
                        Apparel and relics from the shadows of the academy.
                        Catalogued with care, sold to the few.
                    </p>
                </div>

                <nav className="flex flex-col gap-4 text-xs tracking-widest uppercase">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className="w-fit text-foreground/60 hover:text-accent transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/cart"
                        className="w-fit text-foreground/60 hover:text-accent transition"
                    >
                        Bag
                    </Link>
                </nav>

                <div className="text-xs text-foreground/40 leading-6 md:text-right">
                    <p>Unofficial fan project — portfolio demo.</p>
                    <p>No real artefacts are sold.</p>
                    <p className="mt-4">
                        Designed & built by{" "}
                        <a
                            href="https://loic-lepreux.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground/70 hover:text-accent transition"
                        >
                            Loïc Lepreux
                        </a>
                    </p>
                </div>
            </div>

            <p className="border-t border-white/5 py-6 text-center text-[10px] tracking-[0.3em] uppercase text-foreground/30">
                © {year} Nevermore Archives
            </p>
        </footer>
    );
}
