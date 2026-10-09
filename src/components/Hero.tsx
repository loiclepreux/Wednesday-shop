import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url(/src/assets/backgrounds/mercredi.png)",
            }}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="relative z-10 max-w-3xl text-center px-6"
            >
                <h1 className="font-title text-5xl md:text-6xl tracking-widest mb-8">
                    NEVERMORE
                </h1>

                <p className="text-sm md:text-base text-foreground/80 leading-7 tracking-wide mb-12">
                    Born from silence.
                    <br />
                    Shaped by darkness.
                    <br />
                    Apparel and relics inspired by the shadows of Nevermore
                    Academy.
                </p>

                <Link
                    to="/#archives"
                    className="
    inline-flex items-center gap-3
    border border-white/20 px-8 py-3
    text-xs tracking-widest uppercase
    hover:border-accent hover:text-accent
    transition-all duration-500
  "
                >
                    Enter the Shop
                    <span className="text-lg">→</span>
                </Link>
            </motion.div>
        </section>
    );
}
