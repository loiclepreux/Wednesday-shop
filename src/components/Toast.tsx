import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useToastStore } from "../store/useToastStore";

export default function Toast() {
    const message = useToastStore((state) => state.message);

    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed top-24 left-6 right-6 md:left-auto md:w-80 z-50 border border-white/15 bg-black/90 backdrop-blur-md px-6 py-5"
                >
                    <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-2">
                        Added to your bag
                    </p>
                    <p className="font-title tracking-wide mb-4">{message}</p>
                    <Link
                        to="/cart"
                        className="text-xs tracking-widest uppercase text-accent hover:text-foreground transition"
                    >
                        View bag →
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
