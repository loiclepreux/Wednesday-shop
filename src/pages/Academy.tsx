import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { places, timeline } from "../data/academy";
import { archives } from "../data/archives";

function caseNumberOf(archiveId?: string) {
    return archives.find((r) => r.id === archiveId)?.caseNumber;
}

export default function Academy() {
    return (
        <main className="pt-32 px-6 md:px-8 max-w-6xl mx-auto">
            {/* Introduction */}
            <header className="max-w-3xl mx-auto text-center mb-32">
                <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">
                    Est. 1791
                </p>
                <h1 className="font-title text-4xl md:text-5xl tracking-widest mb-10">
                    The Academy
                </h1>
                <div className="space-y-6 text-foreground/70 leading-8">
                    <p>
                        Founded centuries ago, Nevermore Academy stands apart
                        from conventional institutions. It was designed not to
                        correct what society fears, but to cultivate it.
                    </p>
                    <p>
                        Students admitted within its walls are not chosen by
                        chance. Each carries a trait deemed incompatible with
                        the outside world — an ability, a perception, or a
                        silence that cannot be ignored.
                    </p>
                </div>
            </header>

            {/* Lieux */}
            <section className="mb-32">
                <h2 className="font-title text-2xl md:text-3xl tracking-widest mb-4 text-center">
                    The Grounds
                </h2>
                <p className="text-center text-sm text-foreground/50 mb-16">
                    Every corner of the academy keeps a record.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {places.map((place, index) => (
                        <motion.div
                            key={place.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: (index % 3) * 0.15,
                            }}
                        >
                            <Link
                                to={`/archives/${place.archiveId}`}
                                className="group flex h-full flex-col border border-white/10 bg-black/30 p-8 transition-all duration-500 hover:border-accent/60 hover:-translate-y-1"
                            >
                                <h3 className="font-title text-lg tracking-wide mb-4 group-hover:text-accent transition">
                                    {place.name}
                                </h3>
                                <p className="flex-1 text-sm text-foreground/60 leading-6 mb-8">
                                    {place.description}
                                </p>
                                <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 group-hover:text-accent transition">
                                    {caseNumberOf(place.archiveId)} →
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Chronologie */}
            <section className="max-w-3xl mx-auto mb-32">
                <h2 className="font-title text-2xl md:text-3xl tracking-widest mb-4 text-center">
                    The Chronicle
                </h2>
                <p className="text-center text-sm text-foreground/50 mb-16">
                    Two centuries, recorded in silence.
                </p>

                <ol className="relative border-l border-white/10 ml-3 space-y-14">
                    {timeline.map((event) => (
                        <motion.li
                            key={event.year}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative pl-10"
                        >
                            <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_12px_#7c7cff]" />

                            <p className="font-title text-3xl tracking-widest text-foreground/90 mb-2">
                                {event.year}
                            </p>
                            <h3 className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                                {event.title}
                            </h3>
                            <p className="text-foreground/60 leading-7 mb-3">
                                {event.text}
                            </p>

                            {event.archiveId ? (
                                <Link
                                    to={`/archives/${event.archiveId}`}
                                    className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 hover:text-accent transition"
                                >
                                    Read {caseNumberOf(event.archiveId)} →
                                </Link>
                            ) : (
                                <Link
                                    to="/relics"
                                    className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 hover:text-accent transition"
                                >
                                    Browse the relics →
                                </Link>
                            )}
                        </motion.li>
                    ))}
                </ol>
            </section>

            {/* Fin mystérieuse */}
            <Link
                to="/archives/case-0013"
                className="block text-center text-sm italic text-foreground/40 hover:text-red-400/80 transition"
            >
                Access to certain sections of the academy remains restricted.
            </Link>
        </main>
    );
}
