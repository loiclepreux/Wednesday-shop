import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { archives } from "../data/archives";

export default function Archives() {
    return (
        <main className="pt-32 px-6 md:px-8 max-w-5xl mx-auto min-h-screen">
            <header className="mb-20 max-w-2xl">
                <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">
                    Restricted records
                </p>
                <h1 className="font-title text-4xl md:text-5xl tracking-widest mb-6">
                    Archives
                </h1>
                <p className="text-foreground/60 leading-7">
                    Every artefact has a past. These files record where each one
                    was found, and what happened to those who carried it.
                </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
                {archives.map((record, index) => {
                    const sealed = record.status === "Sealed";

                    return (
                        <motion.div
                            key={record.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: (index % 2) * 0.15,
                            }}
                        >
                            <Link
                                to={`/archives/${record.id}`}
                                className={`group block h-full border p-8 transition-all duration-500 ${
                                    sealed
                                        ? "border-white/5 bg-black/60 hover:border-red-900/60"
                                        : "border-white/10 bg-black/30 hover:border-accent/60 hover:-translate-y-1"
                                }`}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">
                                        {record.caseNumber}
                                    </span>
                                    <span
                                        className={`text-[10px] tracking-[0.3em] uppercase px-2 py-1 border ${
                                            sealed
                                                ? "border-red-900/60 text-red-400/80"
                                                : "border-accent/40 text-accent"
                                        }`}
                                    >
                                        {record.status}
                                    </span>
                                </div>

                                <h2 className="font-title text-xl tracking-wide mb-2 group-hover:text-accent transition">
                                    {record.title}
                                </h2>

                                <p className="text-xs text-foreground/40 mb-6">
                                    {record.date} · {record.location}
                                </p>

                                <p className="text-sm text-foreground/60 leading-6 mb-8">
                                    {record.excerpt}
                                </p>

                                <span className="text-xs tracking-widest uppercase text-foreground/50 group-hover:text-accent transition">
                                    {sealed
                                        ? "Request access →"
                                        : "Open file →"}
                                </span>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </main>
    );
}
