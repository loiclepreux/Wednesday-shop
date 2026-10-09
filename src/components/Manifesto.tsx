import { motion } from "framer-motion";

export default function Manifesto() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="bg-black/80 py-32"
        >
            <div className="max-w-3xl mx-auto text-center px-6">
                <p className="font-title text-xl tracking-widest mb-8">
                    “Where darkness is not feared,
                    <br />
                    but understood.”
                </p>

                <span className="text-xs tracking-widest uppercase text-foreground/40">
                    Nevermore Academy
                </span>
            </div>
        </motion.section>
    );
}
