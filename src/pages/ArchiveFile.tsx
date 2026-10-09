import { Link, useParams } from "react-router-dom";
import { archives } from "../data/archives";
import { products } from "../data/products";

const redactedLines = [
    "w-full",
    "w-11/12",
    "w-4/5",
    "w-full",
    "w-2/3",
    "w-5/6",
    "w-1/2",
];

export default function ArchiveFile() {
    const { id } = useParams();
    const record = archives.find((r) => r.id === id);

    if (!record) {
        return (
            <main className="pt-40 px-8 max-w-2xl mx-auto text-center min-h-screen">
                <h1 className="font-title text-3xl tracking-widest mb-6">
                    File not found
                </h1>
                <Link
                    to="/archives"
                    className="text-xs tracking-widest uppercase text-accent"
                >
                    ← Back to the archives
                </Link>
            </main>
        );
    }

    const sealed = record.status === "Sealed";
    const product = products.find((p) => p.id === record.productId);

    return (
        <main className="pt-32 pb-12 px-6 md:px-8 max-w-3xl mx-auto min-h-screen">
            <Link
                to="/archives"
                className="text-xs tracking-widest uppercase text-foreground/40 hover:text-accent transition"
            >
                ← All files
            </Link>

            <article className="mt-12 border border-white/10 bg-black/30 p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                    <span className="text-xs tracking-[0.3em] uppercase text-foreground/40">
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

                <h1 className="font-title text-3xl md:text-4xl tracking-widest mb-10">
                    {record.title}
                </h1>

                <dl className="grid grid-cols-2 gap-6 border-y border-white/10 py-6 mb-10 text-sm">
                    <div>
                        <dt className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-1">
                            Date
                        </dt>
                        <dd>{record.date}</dd>
                    </div>
                    <div>
                        <dt className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-1">
                            Location
                        </dt>
                        <dd>{record.location}</dd>
                    </div>
                </dl>

                {sealed ? (
                    <div className="space-y-4">
                        {redactedLines.map((width, i) => (
                            <div
                                key={i}
                                className={`h-4 bg-foreground/80 ${width}`}
                            />
                        ))}
                        <p className="pt-6 text-sm italic text-red-400/70">
                            {record.excerpt}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6 text-foreground/80 leading-8">
                        {record.story.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                )}
            </article>

            {product && (
                <Link
                    to={`/product/${product.id}`}
                    className="group mt-10 flex items-center gap-6 border border-white/10 p-4 hover:border-accent/60 transition"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-24 object-cover grayscale group-hover:grayscale-0 transition duration-700"
                    />
                    <div className="flex-1">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-1">
                            Recovered artefact
                        </p>
                        <p className="font-title tracking-wide group-hover:text-accent transition">
                            {product.name}
                        </p>
                        <p className="text-sm text-foreground/60">
                            {product.price} €
                        </p>
                    </div>
                    <span className="text-xs tracking-widest uppercase text-foreground/50 group-hover:text-accent transition">
                        View →
                    </span>
                </Link>
            )}
        </main>
    );
}
