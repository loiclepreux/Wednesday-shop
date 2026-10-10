import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useToastStore } from "../store/useToastStore";
import { archives } from "../data/archives";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Product() {
    const { id } = useParams();
    const addToCart = useCartStore((state) => state.addToCart);
    const showToast = useToastStore((state) => state.showToast);
    const product = products.find((p) => p.id === Number(id));
    const [size, setSize] = useState<string | null>(null);

    if (!product) {
        return (
            <>
                <main className="pt-40 px-8 max-w-2xl mx-auto text-center min-h-screen">
                    <p className="text-xs tracking-widest uppercase text-foreground/40 mb-4">
                        Archive error
                    </p>

                    <h1 className="font-title text-3xl md:text-4xl tracking-widest mb-6">
                        Artefact not found
                    </h1>

                    <p className="text-foreground/60 leading-7 mb-12">
                        This item does not exist in the archives of Nevermore
                        Academy — or it has been deliberately erased.
                    </p>

                    <Link
                        to="/"
                        className="inline-block border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-500"
                    >
                        Return to the relics
                    </Link>
                </main>
            </>
        );
    }

    const record = archives.find((r) => r.productId === product.id);
    const needsSize = Boolean(product.sizes) && !size;
    const related = [
        ...products.filter(
            (p) => p.id !== product.id && p.category === product.category,
        ),
        ...products.filter(
            (p) => p.id !== product.id && p.category !== product.category,
        ),
    ].slice(0, 3);

    return (
        <>
            <main className="pt-32 px-8 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="bg-black/40 h-[520px] flex items-center justify-center overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                        />
                    </div>

                    <div>
                        <p className="text-xs tracking-widest uppercase text-foreground/40 mb-4">
                            {product.category}
                        </p>

                        <h1 className="font-title text-4xl tracking-widest mb-6">
                            {product.name}
                        </h1>

                        <p className="text-foreground/80 leading-7 mb-8">
                            {product.description}
                        </p>

                        <span className="block text-2xl mb-10">
                            {product.price} €
                        </span>

                        {product.sizes && (
                            <div className="mb-8">
                                <p className="text-xs tracking-widest uppercase text-foreground/40 mb-3">
                                    Size
                                </p>
                                <div className="flex gap-3">
                                    {product.sizes.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`w-12 h-12 border text-xs tracking-widest transition ${
                                                size === s
                                                    ? "border-accent text-accent bg-accent/10"
                                                    : "border-white/20 hover:border-white/50"
                                            }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            disabled={needsSize}
                            onClick={() => {
                                addToCart(product, size ?? undefined);
                                showToast(
                                    size
                                        ? `${product.name} — ${size}`
                                        : product.name,
                                );
                            }}
                            className="border border-white/20 px-10 py-4 text-xs tracking-widest uppercase transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent hover:text-accent"
                        >
                            {needsSize ? "Select a size" : "Add to Cart"}
                        </button>

                        {record && (
                            <Link
                                to={`/archives/${record.id}`}
                                className="group mt-12 block border-t border-white/10 pt-6"
                            >
                                <p className="text-xs tracking-widest uppercase text-foreground/40 mb-2">
                                    Archive note · {record.caseNumber}
                                </p>
                                <p className="text-sm text-foreground/60 leading-6 mb-3">
                                    {record.excerpt}
                                </p>
                                <span className="text-xs tracking-widest uppercase text-foreground/50 group-hover:text-accent transition">
                                    Read the file →
                                </span>
                            </Link>
                        )}
                    </div>
                </div>

                <section className="mt-32 border-t border-white/10 pt-20">
                    <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 text-center">
                        From the same archives
                    </p>
                    <h2 className="font-title text-2xl md:text-3xl tracking-widest mb-16 text-center">
                        You may also be drawn to
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                        {related.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
