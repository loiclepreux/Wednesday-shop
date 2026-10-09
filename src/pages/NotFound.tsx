import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="pt-40 px-8 max-w-2xl mx-auto text-center min-h-screen">
            <p className="font-title text-7xl md:text-8xl tracking-widest text-foreground/10 mb-8">
                404
            </p>

            <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">
                Lost in the corridors
            </p>

            <h1 className="font-title text-3xl md:text-4xl tracking-widest mb-6">
                This room does not exist
            </h1>

            <p className="text-foreground/60 leading-7 mb-12">
                Some doors at Nevermore lead nowhere. Others were never meant to
                be opened. Either way, there is nothing for you here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    to="/"
                    className="border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-500"
                >
                    Return to the entrance
                </Link>
                <Link
                    to="/archives"
                    className="border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-500"
                >
                    Search the archives
                </Link>
            </div>
        </main>
    );
}
